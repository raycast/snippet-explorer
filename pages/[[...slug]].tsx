/* eslint-disable react/no-unescaped-entities */
import React from "react";
import NextLink from "next/link";
import SelectionArea, { SelectionEvent } from "@viselect/react";
import { useRouter } from "next/router";
import copy from "copy-to-clipboard";
import { Select, SelectItem } from "../components/Select";
import {
  ChevronDownIcon,
  ClipboardIcon,
  CogIcon,
  DownloadIcon,
  LinkIcon,
  PlusCircle,
  RaycastLogoIcon,
  SnippetsIcon,
  Trash,
} from "../components/Icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../components/Dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../components/DropdownMenu";
import { SnippetLogo } from "../components/SnippetLogo";
import { Toast, ToastTitle } from "../components/Toast";
import { ScrollArea } from "../components/ScrollArea";
import { Button } from "../components/Button";
import { ButtonGroup } from "../components/ButtonGroup";
import * as Collapsible from "@radix-ui/react-collapsible";
import { isTouchDevice } from "../utils/isTouchDevice";

import { snippetGroups } from "../data/snippets";

import styles from "../styles/Home.module.css";
import { Instructions } from "../components/Instructions";
import { useSectionInView } from "../utils/useSectionInViewObserver";

const raycastProtocolForEnvironments = {
  development: "raycastinternal",
  production: "raycast",
};
const raycastProtocol = raycastProtocolForEnvironments[process.env.NODE_ENV];

type Modifiers =
  | "!"
  | ":"
  | "_"
  | "__"
  | "-"
  | "@"
  | "@@"
  | "$"
  | ";"
  | ";;"
  | "none";

const modifiders: Modifiers[] = [
  "!",
  ":",
  "_",
  "__",
  "-",
  "@",
  "@@",
  "$",
  ";",
  ";;",
  "none",
];

export function getStaticPaths() {
  const paths = snippetGroups.map((snippet) => ({
    params: { slug: [snippet.slug.replace("/", "")] },
  }));

  return {
    paths: [
      ...paths,
      {
        params: { slug: [] },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: { snippet: {} },
  };
}

export default function Home({ onTouchReady }) {
  const router = useRouter();

  const [selectedSnippets, setSelectedSnippets] = React.useState([]);
  const [copied, setCopied] = React.useState(false);

  const [startMod, setStartMod] = React.useState<Modifiers>("!");
  const [endMod, setEndMod] = React.useState<Modifiers>("none");
  const [actionsOpen, setActionsOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [isTouch, setIsTouch] = React.useState(null);

  const selectedSnippetsConfig = selectedSnippets;

  const extractIds = (els: Element[]) =>
    els.map((v) => v.getAttribute("data-key"));

  const onStart = ({ event, selection }: SelectionEvent) => {
    if (!isTouch && !event?.ctrlKey && !event?.metaKey) {
      selection.clearSelection();
      setSelectedSnippets([]);
    }
  };

  const onMove = ({
    store: {
      changed: { added, removed },
    },
  }: SelectionEvent) => {
    const addedIds = extractIds(added);
    const removedIds = extractIds(removed);

    const addedSnippets = addedIds.map((id) => {
      const [slug, index] = id.split("-");
      const snippetCategory = snippetGroups.find(
        (snippet) => snippet.slug === slug
      );
      return snippetCategory.snippets[index];
    });

    addedSnippets.forEach((snippet) => {
      setSelectedSnippets((prevSnippets) => {
        if (prevSnippets.find((s) => s.id === snippet.id)) {
          return prevSnippets;
        }
        return [...prevSnippets, snippet];
      });
    });

    const removedSnippets = removedIds.map((id) => {
      const [slug, index] = id.split("-");
      const snippetCategory = snippetGroups.find(
        (snippet) => snippet.slug === slug
      );
      return snippetCategory.snippets[index];
    });

    removedSnippets.forEach((snippet) => {
      setSelectedSnippets((prevSnippets) => {
        return prevSnippets.filter((s) => s.id !== snippet.id);
      });
    });
  };

  const makeSnippetImportData = React.useCallback(() => {
    return `[${selectedSnippetsConfig
      .map((snippet) => {
        const { name, text } = snippet;
        const keyword =
          snippet.type === "spelling"
            ? snippet.keyword
            : addModifiersToKeyword({
                keyword: snippet.keyword,
                start: startMod,
                end: endMod,
              });
        return JSON.stringify({ name, text, keyword });
      })
      .join(",")}]`;
  }, [selectedSnippetsConfig, startMod, endMod]);

  const makeQueryString = React.useCallback(() => {
    const queryString = selectedSnippetsConfig
      .map((snippet) => {
        const { name, text, type } = snippet;
        const keyword =
          snippet.type === "spelling"
            ? snippet.keyword
            : addModifiersToKeyword({
                keyword: snippet.keyword,
                start: startMod,
                end: endMod,
              });
        return `snippet=${encodeURIComponent(
          JSON.stringify({ name, text, keyword, type })
        )}`;
      })
      .join("&");
    return queryString;
  }, [selectedSnippetsConfig, startMod, endMod]);

  const handleDownload = React.useCallback(() => {
    const encodedSnippetsData = encodeURIComponent(makeSnippetImportData());
    const jsonString = `data:text/json;chatset=utf-8,${encodedSnippetsData}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "snippets.json";
    link.click();
  }, [makeSnippetImportData]);

  const handleCopyData = React.useCallback(() => {
    copy(makeSnippetImportData());
    setCopied(true);
  }, [makeSnippetImportData]);

  const handleCopyUrl = React.useCallback(() => {
    copy(`${window.location.origin}/shared?${makeQueryString()}`);
    setCopied(true);
  }, [makeQueryString]);

  const handleAddToRaycast = React.useCallback(
    () =>
      router.replace(
        `${raycastProtocol}://snippets/import?${makeQueryString()}`
      ),
    [router, makeQueryString]
  );

  React.useEffect(() => {
    setIsTouch(isTouchDevice());
    onTouchReady();
  }, [isTouch, setIsTouch, onTouchReady]);

  React.useEffect(() => {
    const down = (event) => {
      const { key, keyCode, metaKey, shiftKey, altKey } = event;

      if (key === "k" && metaKey) {
        if (selectedSnippetsConfig.length === 0) return;
        setActionsOpen((prevOpen) => {
          return !prevOpen;
        });
      }

      if (key === "d" && metaKey) {
        if (selectedSnippetsConfig.length === 0) return;
        event.preventDefault();
        handleDownload();
      }

      if (key === "Enter" && metaKey) {
        if (selectedSnippetsConfig.length === 0) return;
        event.preventDefault();
        handleAddToRaycast();
      }

      // key === "c" doesn't work when using alt key, so we use keCode instead (67)
      if (keyCode === 67 && metaKey && altKey) {
        if (selectedSnippetsConfig.length === 0) return;
        event.preventDefault();
        handleCopyData();
        setActionsOpen(false);
      }

      if (key === "c" && metaKey && shiftKey) {
        event.preventDefault();
        handleCopyUrl();
        setActionsOpen(false);
      }

      if (key === "," && metaKey && shiftKey) {
        event.preventDefault();
        setActionsOpen(false);
        setAboutOpen(false);
        setSettingsOpen((prevOpen) => !prevOpen);
      }

      if (key === "/" && metaKey) {
        event.preventDefault();
        setActionsOpen(false);
        setSettingsOpen(false);
        setAboutOpen((prevOpen) => !prevOpen);
      }

      if (key === "a" && metaKey) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [
    setActionsOpen,
    setAboutOpen,
    selectedSnippetsConfig,
    handleCopyData,
    handleDownload,
    handleCopyUrl,
    handleAddToRaycast,
  ]);

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div>
      <header className={styles.nav}>
        <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
          <DialogTrigger asChild>
            <button style={{ all: "unset" }}>
              <SnippetLogo />
            </button>
          </DialogTrigger>
          <DialogContent className={styles.about}>
            <div className={styles.aboutTopContent}>
              <div>
                <DialogTitle className={styles.dialogTitle}>About</DialogTitle>
                <DialogDescription className={styles.dialogDescription}>
                  Snippet Explorer is a tool to easily browse and import
                  Snippets directly in <a href="https://raycast.com">Raycast</a>
                  .
                </DialogDescription>
                <p className={styles.dialogDescription}>
                  Select the Snippets by clicking on them. To select multiple,
                  hold <kbd>⌘</kbd> or select them with your mouse.
                </p>
                <p className={styles.dialogDescription}>
                  Then, click the “Add to Raycast” button. You can also download
                  the Snippets as a JSON file, or copy the URL to share with
                  others.
                </p>
              </div>
              {!isTouch && (
                <div>
                  <h4 className={styles.dialogTitle}>Shortcuts</h4>
                  <ul className={styles.shortcuts}>
                    <li>
                      Add to Raycast
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>⏎</kbd>
                      </span>
                    </li>
                    <li>
                      Toggle Export Menu
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>K</kbd>
                      </span>
                    </li>
                    <li>
                      Configure Hotkeys
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>⇧</kbd>
                        <kbd>,</kbd>
                      </span>
                    </li>
                    <li>
                      Download JSON
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>D</kbd>
                      </span>
                    </li>
                    <li>
                      Copy JSON
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>⌥</kbd>
                        <kbd>C</kbd>
                      </span>
                    </li>
                    <li>
                      Copy URL to share
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>⇧</kbd>
                        <kbd>C</kbd>
                      </span>
                    </li>
                    <li>
                      Toggle this view
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>/</kbd>
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <h4 className={styles.dialogTitle}>Contribute</h4>
            <p className={styles.dialogDescription}>
              This project is Open Source and{" "}
              <a
                href="https://github.com/raycast/snippet-explorer"
                title="Snippet Explorer on GitHub"
              >
                available on GitHub
              </a>
              . We welcome contributions!
              <br />
              If you have any questions or feedback, please{" "}
              <a href="mailto:feedback+rayso@raycast.com?subject=snippets">
                send us an email
              </a>
              .
            </p>

            <p style={{ fontSize: 13, marginTop: 32 }}>
              <a
                href="https://raycast.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                Made by{" "}
                <span style={{ color: "#FF6363" }}>
                  <RaycastLogoIcon />{" "}
                </span>
                <span>Raycast</span>
              </a>
            </p>
            <div className={styles.aboutGlow} />
          </DialogContent>
        </Dialog>

        <div className={styles.navControls}>
          {!isTouch && (
            <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
              <DialogTrigger asChild>
                <Button>
                  <CogIcon /> Configure Modifiers
                </Button>
              </DialogTrigger>
              <DialogContent showCloseButton centered>
                <DialogTitle className={styles.dialogTitle}>
                  Configure Modifiers
                </DialogTitle>
                <DialogDescription className={styles.dialogDescription}>
                  Modifiers are used as prefixes and suffixes for your snippets'
                  keyword. If you wish to customize them, you can do so below.
                </DialogDescription>
                <div className={styles.modifierControls}>
                  <span className={styles.modifierInput}>
                    Start Modifier
                    <Select
                      value={startMod}
                      onValueChange={(newValue: Modifiers) =>
                        setStartMod(newValue)
                      }
                    >
                      {modifiders.map((mod) => (
                        <SelectItem key={mod} value={mod}>
                          {mod}
                        </SelectItem>
                      ))}
                    </Select>
                  </span>
                  <span className={styles.modifierInput}>
                    End Modifier
                    <Select
                      value={endMod}
                      onValueChange={(newValue: Modifiers) =>
                        setEndMod(newValue)
                      }
                    >
                      {modifiders.map((mod) => (
                        <SelectItem key={mod} value={mod}>
                          {mod}
                        </SelectItem>
                      ))}
                    </Select>
                  </span>
                </div>
              </DialogContent>
            </Dialog>
          )}

          {!isTouch ? (
            <ButtonGroup>
              <Button
                variant="red"
                disabled={selectedSnippetsConfig.length === 0}
                onClick={() => handleAddToRaycast()}
              >
                <PlusCircle /> Add to Raycast
              </Button>

              <DropdownMenu open={actionsOpen} onOpenChange={setActionsOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="red"
                    disabled={selectedSnippetsConfig.length === 0}
                    aria-label="Export options"
                  >
                    <ChevronDownIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    disabled={selectedSnippetsConfig.length === 0}
                    onSelect={() => handleDownload()}
                  >
                    <DownloadIcon /> Download JSON
                    <span className={styles.hotkeys}>
                      <kbd>⌘</kbd>
                      <kbd>D</kbd>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    disabled={selectedSnippetsConfig.length === 0}
                    onSelect={() => handleCopyData()}
                  >
                    <ClipboardIcon /> Copy JSON{" "}
                    <span className={styles.hotkeys}>
                      <kbd>⌘</kbd>
                      <kbd>⌥</kbd>
                      <kbd>C</kbd>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    disabled={selectedSnippetsConfig.length === 0}
                    onSelect={() => handleCopyUrl()}
                  >
                    <LinkIcon /> Copy URL to share{" "}
                    <span className={styles.hotkeys}>
                      <kbd>⌘</kbd>
                      <kbd>⇧</kbd>
                      <kbd>C</kbd>
                    </span>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </ButtonGroup>
          ) : (
            <Button
              variant="red"
              disabled={selectedSnippetsConfig.length === 0}
              onClick={() => handleCopyUrl()}
            >
              <LinkIcon /> Copy URL to share
            </Button>
          )}
        </div>
      </header>

      <Toast open={copied} onOpenChange={setCopied}>
        <ToastTitle className={styles.toastTitle}>
          <ClipboardIcon /> Copied to clipboard
        </ToastTitle>
      </Toast>

      <div className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            <ScrollArea>
              <div className={styles.sidebarContent}>
                <div className={styles.sidebarNav}>
                  <p className={styles.sidebarTitle}>Categories</p>

                  {snippetGroups.map((snippetGroup) => (
                    <NavItem
                      key={snippetGroup.slug}
                      snippetGroup={snippetGroup}
                    />
                  ))}
                </div>

                {selectedSnippetsConfig.length === 0 && <Instructions />}

                {selectedSnippetsConfig.length > 0 && (
                  <div>
                    <p className={styles.sidebarTitle}>Add to Raycast</p>

                    <Collapsible.Root>
                      <Collapsible.Trigger asChild>
                        <button className={styles.summaryTrigger}>
                          {selectedSnippetsConfig.length}{" "}
                          {selectedSnippetsConfig.length > 1
                            ? "Snippets"
                            : "Snippet"}{" "}
                          selected
                          <ChevronDownIcon />
                        </button>
                      </Collapsible.Trigger>

                      <Collapsible.Content className={styles.summaryContent}>
                        {selectedSnippetsConfig.map((snippet, index) => (
                          <div
                            key={snippet.name + index}
                            className={styles.summaryItem}
                          >
                            {snippet.name}
                            <button
                              className={styles.summaryItemButton}
                              onClick={() => {
                                setSelectedSnippets(
                                  selectedSnippets.filter(
                                    (selectedSnippet) =>
                                      selectedSnippet.id !== snippet.id
                                  )
                                );
                              }}
                            >
                              <Trash />
                            </button>
                          </div>
                        ))}
                      </Collapsible.Content>
                    </Collapsible.Root>

                    <div className={styles.summaryControls}>
                      <Button onClick={handleAddToRaycast} variant="red">
                        Add to Raycast
                      </Button>

                      <Button onClick={() => setSelectedSnippets([])}>
                        Clear selected
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>

        <div className={styles.container}>
          {isTouch !== null && (
            <SelectionArea
              className="container"
              onStart={onStart}
              onMove={onMove}
              selectables=".selectable"
              features={{
                // Disable support for touch devices
                touch: isTouch ? false : true,
                range: true,
                singleTap: {
                  allow: true,
                  intersect: "native",
                },
              }}
            >
              {snippetGroups.map((snippetGroup) => {
                return (
                  <div
                    key={snippetGroup.name}
                    data-section-slug={snippetGroup.slug}
                    style={{
                      outline: "none",
                    }}
                    tabIndex={-1}
                  >
                    <h2 className={styles.subtitle}>
                      <snippetGroup.icon /> {snippetGroup.name}
                    </h2>
                    <div
                      className={styles.snippets}
                      data-grid={snippetGroup.gridCols}
                    >
                      {snippetGroup.snippets.map((snippet, index) => {
                        const keyword =
                          snippet.type === "spelling"
                            ? snippet.keyword
                            : addModifiersToKeyword({
                                keyword: snippet.keyword,
                                start: startMod,
                                end: endMod,
                              });

                        return (
                          <div
                            className={`${styles.item} selectable`}
                            key={snippet.id}
                            data-selected={selectedSnippets.some(
                              (selectedSnippet) =>
                                selectedSnippet.id === snippet.id
                            )}
                            data-key={`${snippetGroup.slug}-${index}`}
                          >
                            <div className={styles.snippet}>
                              {snippet.type === "template" ||
                              snippet.type === "spelling" ? (
                                <ScrollArea>
                                  <pre className={styles.template}>
                                    {snippet.text}
                                  </pre>
                                </ScrollArea>
                              ) : (
                                <span
                                  className={styles.text}
                                  data-type={snippet.type}
                                >
                                  {snippet.text}
                                </span>
                              )}
                            </div>
                            <span className={styles.name}>{snippet.name}</span>
                            {snippet.keyword && (
                              <span className={styles.keyword}>{keyword}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    {snippetGroup.gridCols === 1 && (
                      <hr className={styles.divider} />
                    )}
                  </div>
                );
              })}
            </SelectionArea>
          )}
        </div>
      </div>
    </div>
  );
}

function NavItem({ snippetGroup }) {
  const activeSection = useSectionInView();

  return (
    <NextLink
      href={snippetGroup.slug}
      shallow
      className={styles.sidebarNavItem}
      data-active={activeSection === snippetGroup.slug}
    >
      {snippetGroup.icon ? <snippetGroup.icon /> : <SnippetsIcon />}

      {snippetGroup.name}
      <span className={styles.badge}>{snippetGroup.snippets.length}</span>
    </NextLink>
  );
}

function addModifiersToKeyword({
  keyword,
  start,
  end,
}: {
  keyword: string;
  start: Modifiers;
  end: Modifiers;
}) {
  if (!keyword) return keyword;
  return `${start === "none" ? "" : start}${keyword}${
    end === "none" ? "" : end
  }`;
}
