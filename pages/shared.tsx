import React from "react";
import Link from "next/link";
import SelectionArea, { SelectionEvent } from "@viselect/react";
import { useRouter } from "next/router";
import copy from "copy-to-clipboard";
import { nanoid } from "nanoid";
import {
  ChevronDownIcon,
  ClipboardIcon,
  DownloadIcon,
  PlusCircle,
  SnippetsIcon,
} from "../components/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../components/DropdownMenu";
import { Toast, ToastTitle } from "../components/Toast";
import { ScrollArea } from "../components/ScrollArea";
import { Button } from "../components/Button";
import { ButtonGroup } from "../components/ButtonGroup";

import styles from "../styles/Home.module.css";
import buttonStyles from "../components/Button.module.css";

const raycastProtocolForEnvironments = {
  development: "raycastinternal",
  production: "raycast",
};
const raycastProtocol = raycastProtocolForEnvironments[process.env.NODE_ENV];

export default function Home() {
  const router = useRouter();

  const [selectedSnippets, setSelectedSnippets] = React.useState([]);
  const [copied, setCopied] = React.useState(false);

  const [actionsOpen, setActionsOpen] = React.useState(false);
  const [sharedSnippetsInURL, setSharedSnippetsInURL] = React.useState([]);

  let gridCols = 1;
  switch (sharedSnippetsInURL.length) {
    case 2:
      gridCols = 2;
      break;
    case 3:
      gridCols = 3;
      break;
    case 4:
    case 5:
    case 6:
      gridCols = 4;
      break;
    default:
      gridCols = 4;
      break;
  }

  const sharedSnippetGroup = [
    {
      name: `${sharedSnippetsInURL.length} snippets shared with you`,
      gridCols,
      isTemplate: true,
      isShared: true,
      snippets: sharedSnippetsInURL,
      slug: "/shared",
      icon: SnippetsIcon,
    },
  ];

  const selectedSnippetsConfig = selectedSnippets;

  const extractIds = (els: Element[]) =>
    els.map((v) => v.getAttribute("data-key"));

  const onStart = ({ event, selection }: SelectionEvent) => {
    if (!event?.ctrlKey && !event?.metaKey) {
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
      const snippetCategory = sharedSnippetGroup.find(
        (snippet) => snippet.slug === slug
      );

      return snippetCategory.snippets[index];
    });

    addedSnippets.forEach((snippet) => {
      setSelectedSnippets((prevSnippets) => [...prevSnippets, snippet]);
    });

    const removedSnippets = removedIds.map((id) => {
      const [slug, index] = id.split("-");
      const snippetCategory = sharedSnippetGroup.find(
        (snippet) => snippet.slug === slug
      );
      return snippetCategory.snippets[index];
    });

    removedSnippets.forEach((snippet) => {
      setSelectedSnippets((prevSnippets) => {
        return prevSnippets.filter((s) => s?.id !== snippet?.id);
      });
    });
  };

  const makeSnippetImportData = React.useCallback(() => {
    return `[${selectedSnippetsConfig
      .map((snippet) => {
        const { name, text } = snippet;
        const keyword = snippet.keyword;
        return JSON.stringify({ name, text, keyword });
      })
      .join(",")}]`;
  }, [selectedSnippetsConfig]);

  const makeQueryString = React.useCallback(() => {
    const queryString = selectedSnippetsConfig
      .map((snippet) => {
        const { name, text, type } = snippet;
        const keyword = snippet.keyword;
        return `snippet=${encodeURIComponent(
          JSON.stringify({ name, text, keyword, type })
        )}`;
      })
      .join("&");
    return queryString;
  }, [selectedSnippetsConfig]);

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

  const handleAddToRaycast = React.useCallback(
    () =>
      router.replace(
        `${raycastProtocol}://snippets/import?${makeQueryString()}`
      ),
    [router, makeQueryString]
  );

  React.useEffect(() => {
    if (router.query.snippet) {
      setSharedSnippetsInURL(formatURLSnippet(router.query.snippet));
    } else {
      setSharedSnippetsInURL([]);
    }
  }, [router.query]);

  React.useEffect(() => {
    const down = (event) => {
      const { key, keyCode, metaKey, altKey } = event;

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

      if (key === "a" && metaKey) {
        event.preventDefault();
        setSelectedSnippets([...sharedSnippetsInURL]);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [
    sharedSnippetsInURL,
    setActionsOpen,
    selectedSnippetsConfig,
    handleCopyData,
    handleDownload,
    handleAddToRaycast,
  ]);

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  if (sharedSnippetsInURL.length === 0) {
    return;
  }

  return (
    <div>
      <header className={styles.nav}>
        <Link
          href="/"
          aria-label="Home"
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <span
            className={buttonStyles.button}
            style={{ fontWeight: 500, fontSize: 13 }}
            data-variant="gray"
          >
            ← See all Snippets
          </span>
        </Link>
        <div className={styles.navControls}>
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

      <div>
        <div className={styles.container}>
          <SelectionArea
            className="container"
            onStart={onStart}
            onMove={onMove}
            selectables=".selectable"
          >
            {sharedSnippetGroup.map((snippetGroup) => {
              return (
                <div
                  key={snippetGroup.name}
                  data-section-slug={snippetGroup.slug}
                  style={{ outline: "none" }}
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
                      const keyword = snippet.keyword;

                      return (
                        <div
                          className={`${styles.item} selectable`}
                          key={snippet.id}
                          data-selected={selectedSnippets.some(
                            (selectedSnippet) =>
                              selectedSnippet?.id === snippet.id
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
        </div>
      </div>
    </div>
  );
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
