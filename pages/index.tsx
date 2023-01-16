/* eslint-disable react/no-unescaped-entities */
import React from "react";
import NextLink from "next/link";
import Link from "next/link";
import { useRouter } from "next/router";
import copy from "copy-to-clipboard";
import { nanoid } from "nanoid";
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

import { snippets } from "../data/snippets";

import styles from "../styles/Home.module.css";
import { Instructions } from "../components/Instructions";
import {
  useSectionInView,
  useSectionInViewObserver,
} from "../utils/useSectionInViewObserver";

const raycastProtocolForEnvironments = {
  development: "raycastinternal",
  production: "raycastdebug",
};
const raycastProtocol = raycastProtocolForEnvironments[process.env.NODE_ENV];

const modifiders = [":", "!", "_", "__", "-", "@", ";", "empty"];

const ROOT_MARGIN = "72px";

export default function Home() {
  useSectionInViewObserver({ headerHeight: 50 });
  const activeSection = useSectionInView();
  const router = useRouter();
  console.log(activeSection);

  const [selectedSnippets, setSelectedSnippets] = React.useState([]);
  const [copied, setCopied] = React.useState(false);

  const [startMod, setStartMod] = React.useState("!");
  const [endMod, setEndMod] = React.useState("empty");
  const [actionsOpen, setActionsOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [sharedSnippetsInURL, setSharedSnippetsInURL] = React.useState([]);
  // const [activeSection, setActiveSection] = React.useState(null);

  const hasSharedSnippets = sharedSnippetsInURL.length > 0;

  const sharedSnippetGroup = {
    name: "Shared with you",
    gridCols: 1,
    isTemplate: true,
    isShared: true,
    snippets: sharedSnippetsInURL,
    slug: "shared",
  };

  const allSnippets = hasSharedSnippets
    ? [sharedSnippetGroup, ...snippets]
    : snippets;

  const selectedSnippetsConfig = selectedSnippets;

  const makeSnippetImportData = React.useCallback(() => {
    return `[${selectedSnippetsConfig
      .map((snippet) => {
        const { name, text } = snippet;
        const keyword =
          snippet.isShared || snippet.type === "spelling"
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
          snippet.isShared || snippet.type === "spelling"
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
    copy(`${window.location.origin}?${makeQueryString()}`);
    setCopied(true);
  }, [makeQueryString]);

  const handleCopyText = React.useCallback(() => {
    const textStrings = selectedSnippetsConfig
      .map((snippet) => {
        const { text } = snippet;
        return text;
      })
      .join(" ");

    copy(textStrings);
    setCopied(true);
  }, [selectedSnippetsConfig]);

  const handleAddToRaycast = React.useCallback(
    () =>
      router.replace(
        `${raycastProtocol}://snippets/import?${makeQueryString()}`
      ),
    [router, makeQueryString]
  );

  // React.useEffect(() => {
  //   const pageHeader = document.querySelector("header");
  //   const sections = Array.from(document.querySelectorAll("[data-section]"));

  //   const DOWN = "DOWN";
  //   const UP = "UP";

  //   const options = {
  //     // rootMargin: `${pageHeader.offsetHeight * -1}px 0px 0px 0px`,
  //     threshold: 1,
  //   };

  //   let prevScrollTop = 0;

  //   function getScrollDirection() {
  //     const { scrollTop } = document.documentElement;
  //     const direction = prevScrollTop < scrollTop ? DOWN : UP;
  //     prevScrollTop = scrollTop;

  //     if (!prevScrollTop) {
  //       return null;
  //     }

  //     return direction;
  //   }

  //   function getNextCategory(entry) {
  //     const index = sections.findIndex((section) => section == entry.target);
  //     return sections[index + 1];
  //   }

  //   function getLastIntersectedSection(entries) {
  //     // const intersectedSections = entries.filter(
  //     //   (entry) => entry.isIntersecting
  //     // );
  //     // const lastIntersectedSection = intersectedSections.pop();
  //     // console.log(entries);
  //     // return lastIntersectedSection.target;
  //   }

  //   function shouldUpdate(entry, direction) {
  //     return (
  //       (direction === DOWN && !entry.isIntersecting) ||
  //       (direction === UP && entry.isIntersecting)
  //     );
  //   }

  //   function onObserve(entries) {
  //     // console.log(entries);
  //     entries.forEach((entry) => {
  //       // console.log("oioi");
  //       console.log(
  //         entry.isIntersecting,
  //         entry.target.getAttribute("data-section")
  //       );

  //       const direction = getScrollDirection();
  //       // console.log({ direction });

  //       // if (!direction) {
  //       //   setActiveSection(entries[0].target.getAttribute("data-section"));
  //       // }

  //       if (shouldUpdate(entry, direction)) {
  //         const target =
  //           direction === DOWN
  //             ? getLastIntersectedSection(entries)
  //             : entry.target;
  //         // console.log(entry);

  //         // const activeCategory = target.getAttribute("data-section");
  //         // pageHeader.setAttribute("data-active-section", activeCategory);
  //         // setActiveSection(activeCategory);
  //       }
  //     });
  //   }

  //   const observer = new IntersectionObserver(onObserve, options);

  //   sections.forEach((section) => {
  //     observer.observe(section);
  //   });

  //   return () => observer.disconnect();
  // }, []);

  React.useEffect(() => {
    if (router.query.snippet) {
      setSharedSnippetsInURL(formatURLSnippet(router.query.snippet));
    } else {
      setSharedSnippetsInURL([]);
    }
  }, [router.query]);

  React.useEffect(() => {
    const down = (event) => {
      const { key, keyCode, metaKey, shiftKey, altKey } = event;

      if (key === "k" && metaKey) {
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

      if (key === "c" && metaKey && !shiftKey) {
        handleCopyData();
        setActionsOpen(false);
      }

      if (key === "c" && metaKey && shiftKey) {
        event.preventDefault();
        handleCopyUrl();
        setActionsOpen(false);
      }

      // key === "c" doesn't work when using alt key, so we use keCode instead
      if (keyCode === 67 && metaKey && altKey) {
        event.preventDefault();
        handleCopyText();
        setActionsOpen(false);
      }

      if (key === "," && metaKey && shiftKey) {
        event.preventDefault();
        setActionsOpen(false);
        setSettingsOpen((prevOpen) => !prevOpen);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [
    setActionsOpen,
    selectedSnippetsConfig,
    handleCopyData,
    handleDownload,
    handleCopyUrl,
    handleCopyText,
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
        <Link href="/">
          <SnippetLogo />
        </Link>
        <div className={styles.navControls}>
          <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
            <DialogTrigger asChild>
              <Button>
                <CogIcon /> Configure Modifiers
              </Button>
            </DialogTrigger>
            <DialogContent showCloseButton>
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
                  <Select value={startMod} onValueChange={setStartMod}>
                    {modifiders.map((mod) => (
                      <SelectItem key={mod} value={mod}>
                        {mod}
                      </SelectItem>
                    ))}
                  </Select>
                </span>
                <span className={styles.modifierInput}>
                  End Modifier
                  <Select value={endMod} onValueChange={setEndMod}>
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
                >
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  disabled={selectedSnippetsConfig.length === 0}
                  onSelect={() => handleDownload()}
                >
                  <DownloadIcon /> Download
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
                    <kbd>C</kbd>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  disabled={selectedSnippetsConfig.length === 0}
                  onSelect={() => handleCopyUrl()}
                >
                  <LinkIcon /> Share URL{" "}
                  <span className={styles.hotkeys}>
                    <kbd>⌘</kbd>
                    <kbd>⇧</kbd>
                    <kbd>C</kbd>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  disabled={selectedSnippetsConfig.length === 0}
                  onSelect={() => handleCopyText()}
                >
                  <ClipboardIcon /> Copy Text{" "}
                  <span className={styles.hotkeys}>
                    <kbd>⌘</kbd>
                    <kbd>⌥</kbd>
                    <kbd>C</kbd>
                  </span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
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
                  <p className={styles.sidebarTitle}>
                    Categories{" "}
                    <span className={styles.badge}>
                      {allSnippets.reduce(
                        (acc, curr) => acc + curr.snippets.length,
                        0
                      )}
                    </span>
                  </p>

                  {allSnippets.map((snippetGroup) => (
                    <a
                      key={snippetGroup.name}
                      className={styles.sidebarNavItem}
                      href={`#${snippetGroup.slug}`}
                      data-active={activeSection === snippetGroup.slug}
                    >
                      <SnippetsIcon />
                      {snippetGroup.name}
                      <span className={styles.badge}>
                        {snippetGroup.snippets.length}
                      </span>
                    </a>
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
          {allSnippets.map((snippetGroup) => {
            return (
              <div
                key={snippetGroup.name}
                id={snippetGroup.slug}
                style={{ scrollMarginTop: ROOT_MARGIN }}
                data-section-slug={snippetGroup.slug}
              >
                <h2 className={styles.subtitle}>{snippetGroup.name}</h2>
                <div
                  className={styles.snippets}
                  data-grid={snippetGroup.gridCols}
                >
                  {snippetGroup.snippets.map((snippet) => {
                    const keyword =
                      snippet.isShared || snippet.type === "spelling"
                        ? snippet.keyword
                        : addModifiersToKeyword({
                            keyword: snippet.keyword,
                            start: startMod,
                            end: endMod,
                          });

                    return (
                      <label className={styles.item} key={snippet.id}>
                        <input
                          className={styles.checkbox}
                          type="checkbox"
                          name="snippet"
                          checked={selectedSnippets.some(
                            (selectedSnippet) =>
                              selectedSnippet.id === snippet.id
                          )}
                          onChange={() => {
                            const isSelected = selectedSnippets.some(
                              (selectedSnippet) =>
                                selectedSnippet.id === snippet.id
                            );
                            if (isSelected) {
                              setSelectedSnippets(
                                selectedSnippets.filter(
                                  (selectedSnippet) =>
                                    selectedSnippet.id !== snippet.id
                                )
                              );
                            } else {
                              setSelectedSnippets((snippets: any) => [
                                ...snippets,
                                snippet,
                              ]);
                            }
                          }}
                        />
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
                      </label>
                    );
                  })}
                </div>
                {snippetGroup.gridCols === 1 && (
                  <hr className={styles.divider} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function addModifiersToKeyword({ keyword, start, end }) {
  if (!keyword) return keyword;
  return `${start === "empty" ? "" : start}${keyword}${
    end === "empty" ? "" : end
  }`;
}

function formatURLSnippet(snippetQueryString) {
  let snippets;
  if (Array.isArray(snippetQueryString)) {
    snippets = snippetQueryString;
  } else {
    snippets = [snippetQueryString];
  }
  return snippets.map((snippet) => ({
    ...JSON.parse(snippet),
    id: nanoid(),
    isShared: true,
  }));
}
