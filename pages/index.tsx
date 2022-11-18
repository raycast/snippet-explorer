/* eslint-disable react/no-unescaped-entities */
import React from "react";
import copy from "copy-to-clipboard";
import { nanoid } from "nanoid";
import styles from "../styles/Home.module.css";
import { Select, SelectItem } from "../components/Select";
import {
  ClipboardIcon,
  CogIcon,
  DownloadIcon,
  LinkIcon,
  RaycastLogo,
  SnippetsIcon,
} from "../components/Icons";
import { useRouter } from "next/router";
import {
  Dialog,
  DialogClose,
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
import Link from "next/link";
import { Toast, ToastTitle } from "../components/Toast";
import { ScrollArea } from "../components/ScrollArea";

const arrows = [
  {
    id: nanoid(),
    text: "←",
    name: "Arrow Left",
    keyword: "left",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↑",
    name: "Arrow Up",
    keyword: "up",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "→",
    name: "Arrow Right",
    keyword: "right",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↓",
    name: "Arrow Down",
    keyword: "down",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↖",
    name: "Arrow Up Left",
    keyword: "up-left",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↗︎",
    name: "Arrow Up Right",
    keyword: "up-right",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↙",
    name: "Arrow Down Left",
    keyword: "down-left",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↘",
    name: "Arrow Down Right",
    keyword: "down-right",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⟶",
    name: "Arrow Lon -Right",
    keyword: "long-right",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⟵",
    name: "Arrow Long Left",
    keyword: "long-left",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↩",
    name: "Arrow Left Hook",
    keyword: "left-hook",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↪",
    name: "Arrow Right Hook",
    keyword: "right-hook",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↺",
    name: "Undo",
    keyword: "undo",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↻",
    name: "Redo",
    keyword: "redo",
    type: "symbol",
  },
];

const bulletsAndStars = [
  {
    id: nanoid(),
    text: "·",
    name: "Middle Dot",
    keyword: "dot",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "●",
    name: "Circle",
    keyword: "circle",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "★",
    name: "Star Filled",
    keyword: "star-filled",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "☆",
    name: "Star Outline",
    keyword: "star-outline",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "❖",
    name: "Diamond",
    keyword: "diamond",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "※",
    name: "Reference Mark",
    keyword: "reference-mark",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⁂",
    name: "Asterism",
    keyword: "asterism",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⁖",
    name: "Three Dot Punctuation",
    keyword: "three-dots",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⁘",
    name: "Four Dot Punctuation",
    keyword: "four-dots",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⁙",
    name: "Five Dot Punctuation",
    keyword: "five-dots",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⁜",
    name: "Dotted Cross",
    keyword: "dotted-cross",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "☀",
    name: "Sun",
    keyword: "sun",
    type: "symbol",
  },
];

const technical = [
  {
    id: nanoid(),
    text: "⌘",
    name: "Command",
    keyword: "cmd",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⇪",
    name: "Caps Lock",
    keyword: "caps",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⇧",
    name: "Shift",
    keyword: "shift",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⌥",
    name: "Option",
    keyword: "opt",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⌃",
    name: "Control",
    keyword: "ctrl",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⌫",
    name: "Backspace",
    keyword: "backspace",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "",
    name: "Apple",
    keyword: "apple",
    type: "symbol",
  },
];

const currency = [
  {
    id: nanoid(),
    text: "£",
    name: "Sterling",
    keyword: "sterling",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "€",
    name: "Euro",
    keyword: "euro",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "¥",
    name: "Yen",
    keyword: "yen",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "$",
    name: "Dollar",
    keyword: "dollar",
    type: "symbol",
  },
];

const maths = [
  {
    id: nanoid(),
    text: "×",
    name: "Multiplication",
    keyword: "x",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "÷",
    name: "Division",
    keyword: "division",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "±",
    name: "Plus Minus",
    keyword: "+-",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "½",
    name: "One Half",
    keyword: "1/2",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⅓",
    name: "One Third",
    keyword: "1/3",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "¼",
    name: "One Quarter",
    keyword: "1/4",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "¾",
    name: "Three Quarters",
    keyword: "3/4",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⅚",
    name: "Five Sixths",
    keyword: "5/6",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⅟",
    name: "One Fraction",
    keyword: "1/",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⅞",
    name: "Seven Eighths",
    keyword: "7/8",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⅛",
    name: "One Eighth",
    keyword: "1/8",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⅝",
    name: "Five Eighths",
    keyword: "5/8",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⅜",
    name: "Three Eighths",
    keyword: "3/8",
    type: "symbol",
  },
];

const symbols = [
  {
    id: nanoid(),
    text: "®",
    name: "Registered",
    keyword: "registered",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "©",
    name: "Copyright",
    keyword: "copyright",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "℗",
    name: "Published",
    keyword: "published",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "™",
    name: "Trademark",
    keyword: "tm",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "№",
    name: "Numero Sign",
    keyword: "numero-sign",
    type: "symbol",
  },

  {
    id: nanoid(),
    text: "℃",
    name: "Celsius",
    keyword: "celsius",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "℉",
    name: "Fahrenheit",
    keyword: "fahrenheit",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "✓",
    name: "Check",
    keyword: "check",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "…",
    name: "Horizontal Ellipsis",
    keyword: "horizontal-ellipsis",
    type: "symbol",
  },
];

const feedback = [
  {
    name: "Feedback Thanks",
    id: nanoid(),
    text: `Hi 👋

Thanks for taking the time to give us your feedback.
    
{cursor}`,
    type: "template",
  },
  {
    name: "Feedback Resolved",
    id: nanoid(),
    text: `Glad to know it is resolved. Feel free to reach out for any further clarifications.`,
    type: "template",
  },
];

const coding = [
  {
    name: "Console Log",
    id: nanoid(),
    text: `console.log({cursor})`,
    keyword: "log",
    type: "template",
  },
  {
    name: "Raycast View Command",
    id: nanoid(),
    text: `export default function Command() {
  return {cursor}
}`,
    type: "template",
  },
  {
    name: "Export Functional Component",
    id: nanoid(),
    text: `export function Component() {
  return null
}`,
    keyword: "rfc",
    type: "template",
  },
  {
    name: "CSS Center Align",
    id: nanoid(),
    text: `.selector {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    type: "template",
  },
];

const project = [
  {
    id: nanoid(),
    text: `## Problem Statement

*Why is this project important?* *What user feedback initiated it?*

{cursor}

## Initial Scope

*What needs to be done to solve the problem? What are the constraints?*

## Possible Solution

*How can the scope be achieved? What are possible solutions?*

## Open Questions

*What is unclear and needs further investigations or discussions?*
    `,
    name: "Project Spec",
    type: "template",
  },
];

const github = [
  {
    id: nanoid(),
    name: "Github Issue Template",
    text: `## Expected Behavior

## Actual Behavior

## Steps to Reproduce the Problem
  
  1.
  1.
  1.

## Specifications

  - Version:
  - Platform:
  - Subsystem:
`,
    keyword: "gh-issue",
    type: "template",
  },
  {
    id: nanoid(),
    name: "Github Pull Request Template",
    text: `<!-- Thanks for opening a PR! Your contribution is much appreciated.-->
    
Fixes #

## Proposed Changes

  -
  -
  -
`,
    keyword: "gh-pr",
    type: "template",
  },
];

const spelling = [
  {
    id: nanoid(),
    name: "Apparently",
    text: "Apparently",
    keyword: "Apparantly",
    type: "spelling",
  },
  {
    id: nanoid(),
    name: "Calendar",
    text: "Calendar",
    keyword: "Calender",
    type: "spelling",
  },
  {
    id: nanoid(),
    name: "Definitely",
    text: "Definitely",
    keyword: "Definately",
    type: "spelling",
  },
  {
    id: nanoid(),
    name: "Environment",
    text: "Environment",
    keyword: "Enviroment",
    type: "spelling",
  },
  {
    id: nanoid(),
    name: "Fluorescent",
    text: "Fluorescent",
    keyword: "Florescent",
    type: "spelling",
  },
  {
    id: nanoid(),
    name: "Government",
    text: "Government",
    keyword: "Goverment",
    type: "spelling",
  },
];

const unicodes = [
  {
    id: nanoid(),
    name: "Shrug",
    text: "¯\\_(ツ)_/¯",
    keyword: "shrug",
    type: "unicode",
  },
  {
    id: nanoid(),
    name: "Happy With It Unicode",
    text: "ʘ‿ʘ",
    keyword: "happy",
    type: "unicode",
  },
  {
    id: nanoid(),
    name: "Cute Unicode",
    text: "•‿•",
    keyword: "cute",
    type: "unicode",
  },
  {
    id: nanoid(),
    name: "Tears Of Joy Unicode",
    text: "ಥ‿ಥ",
    keyword: "tears-of-joy",
    type: "unicode",
  },
  {
    id: nanoid(),
    name: "Wink Unicode",
    text: "◕‿↼",
    keyword: "tears-of-joy",
    type: "unicode",
  },
  {
    id: nanoid(),
    name: "Glasses of Disapproval Unicode",
    text: "(-■_■)",
    keyword: "glasses-disapproval",
    type: "unicode",
  },
  {
    id: nanoid(),
    name: "Meh Unicode",
    text: "ヽ(。_°)ノ",
    keyword: "meh",
    type: "unicode",
  },
  {
    id: nanoid(),
    name: "Serious Lookg Unicode",
    text: "(ಠ_ಠ)",
    keyword: "serious-look",
    type: "unicode",
  },
  {
    id: nanoid(),
    name: "Flipping Table Unicode",
    text: "(╯°□°)╯︵ ┻━┻",
    keyword: "flipping-table",
    type: "unicode",
  },
  {
    id: nanoid(),
    name: "Putting Table Back Unicode",
    text: "┳━┳ ヽ(ಠل͜ಠ)ﾉ",
    keyword: "flipping-table",
    type: "unicode",
  },
  {
    id: nanoid(),
    name: "Angry Cat Unicode",
    text: "(^._.^)ﾉ",
    keyword: "angry-cat",
    type: "unicode",
  },
  {
    id: nanoid(),
    name: "Lenny Unicode",
    text: "( ͡° ͜ʖ ͡°)",
    keyword: "lenny",
    type: "unicode",
  },
];

const snippets = [
  { name: "Coding", gridCols: 2, snippets: coding },
  { name: "Feedback", gridCols: 2, snippets: feedback },
  { name: "GitHub", gridCols: 2, snippets: github },
  { name: "Spelling", gridCols: 3, snippets: spelling },
  // { name: "Project", gridCols: 2, snippets: project },
  { name: "Arrows", gridCols: 4, snippets: arrows },
  { name: "Technical", gridCols: 4, snippets: technical },
  { name: "Bullets & Stars", gridCols: 4, snippets: bulletsAndStars },
  { name: "Maths", gridCols: 4, snippets: maths },
  { name: "Currency", gridCols: 4, snippets: currency },
  { name: "Symbols", gridCols: 4, snippets: symbols },
  { name: "Unicode", gridCols: 4, snippets: unicodes },
];

const modifiders = [":", "!", "_", "__", "-", "@", ";", "empty"];

export default function Home() {
  const router = useRouter();

  const [selectedSnippets, setSelectedSnippets] = React.useState({});
  const [copied, setCopied] = React.useState(false);

  const [startMod, setStartMod] = React.useState(":");
  const [endMod, setEndMod] = React.useState(":");
  const [actionsOpen, setActionsOpen] = React.useState(false);
  const [instructionsOpen, setInstructionsOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [sharedSnippetsInURL, setSharedSnippetsInURL] = React.useState([]);

  const dropdownTriggerRef =
    React.useRef<React.ElementRef<typeof DropdownMenuTrigger | null>>(null);

  const hasSharedSnippets = sharedSnippetsInURL.length > 0;

  const sharedSnippetGroup = {
    name: "Shared with you",
    gridCols: 1,
    isTemplate: true,
    isShared: true,
    snippets: sharedSnippetsInURL,
  };

  const allSnippets = hasSharedSnippets
    ? [sharedSnippetGroup, ...snippets]
    : snippets;

  const selectedSnippetsConfig = Object.keys(selectedSnippets)
    .filter((snippet) => selectedSnippets[snippet].checked)
    .map((snippet) => selectedSnippets[snippet]);

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
    const queryString = selectedSnippetsConfig
      .map((snippet) => {
        const { name, text, type } = snippet;
        const keyword = addModifiersToKeyword({
          keyword: snippet.keyword,
          start: startMod,
          end: endMod,
        });
        return `snippet=${encodeURIComponent(
          JSON.stringify({ name, text, keyword, type })
        )}`;
      })
      .join("&");

    copy(`${window.location.origin}?${queryString}`);
    setCopied(true);
  }, [selectedSnippetsConfig, startMod, endMod]);

  React.useEffect(() => {
    if (router.query.snippet) {
      setSharedSnippetsInURL(formatURLSnippet(router.query.snippet));
    } else {
      setSharedSnippetsInURL([]);
    }
  }, [router.query]);

  React.useEffect(() => {
    const down = (event) => {
      const { key, metaKey, shiftKey } = event;

      if (selectedSnippetsConfig.length === 0) return;

      if (key === "k" && metaKey && !instructionsOpen) {
        setActionsOpen((prevOpen) => {
          return !prevOpen;
        });
      }

      if (key === "d" && metaKey) {
        event.preventDefault();
        setInstructionsOpen((prevOpen) => !prevOpen);
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

      if (key === "," && metaKey && shiftKey) {
        event.preventDefault();
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
    instructionsOpen,
  ]);

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/">
          <SnippetLogo />
        </Link>

        <Toast open={copied} onOpenChange={setCopied}>
          <ToastTitle className={styles.toastTitle}>
            <ClipboardIcon /> Copied to clipboard
          </ToastTitle>
        </Toast>
      </div>

      {allSnippets.map((snippetGroup) => {
        return (
          <div key={snippetGroup.name}>
            <h2 className={styles.subtitle}>{snippetGroup.name}</h2>
            <div className={styles.snippets} data-grid={snippetGroup.gridCols}>
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
                      name="snipet"
                      checked={selectedSnippets[snippet.id]?.checked || false}
                      onChange={() =>
                        setSelectedSnippets((prevState) => ({
                          ...prevState,
                          [snippet.id]: {
                            ...snippet,
                            checked: !prevState[snippet.id]?.checked,
                          },
                        }))
                      }
                    />
                    <span className={styles.name}>{snippet.name}</span>
                    <div className={styles.snippet}>
                      {snippet.type === "template" ||
                      snippet.type === "spelling" ? (
                        <ScrollArea>
                          <pre className={styles.template}>{snippet.text}</pre>
                        </ScrollArea>
                      ) : (
                        <span className={styles.text} data-type={snippet.type}>
                          {snippet.text}
                        </span>
                      )}
                    </div>
                    {snippet.keyword && (
                      <span className={styles.keyword}>{keyword}</span>
                    )}
                  </label>
                );
              })}
            </div>
            {snippetGroup.gridCols === 1 && <hr className={styles.divider} />}
          </div>
        );
      })}

      {selectedSnippetsConfig.length > 0 && (
        <div className={styles.checkoutViewport}>
          <div className={styles.checkout}>
            <p className={styles.checkoutText}>
              {selectedSnippetsConfig.length}{" "}
              {selectedSnippetsConfig.length > 1 ? "Snippets" : "Snippet"}{" "}
              Selected
            </p>
            <Dialog open={instructionsOpen} onOpenChange={setInstructionsOpen}>
              <DialogTrigger className={styles.trigger} data-variant="primary">
                <DownloadIcon />
                Download
                <span className={styles.hotkeys}>
                  <kbd data-variant="dark">⌘</kbd>
                  <kbd data-variant="dark">D</kbd>
                </span>
              </DialogTrigger>
              <DialogContent>
                <SnippetsIcon aria-hidden size={24} />
                <div style={{ marginBottom: 24 }} />
                <DialogTitle className={styles.dialogTitle}>
                  Download Instructions
                </DialogTitle>
                <DialogDescription className={styles.dialogDescription}>
                  After downloading your Snippets, you&apos;ll need to import
                  them into Raycast. To do this, follow the steps below:
                </DialogDescription>
                <ol className={styles.dialogDescription}>
                  <li>Open Raycast</li>
                  <li>
                    Use the <code>Import Snippets</code> Command
                  </li>
                  <li>Select your file</li>
                </ol>
                <div className={styles.dialogButtons}>
                  <button
                    type="button"
                    className={styles.trigger}
                    data-variant="primary"
                    onClick={handleDownload}
                  >
                    <DownloadIcon />
                    Download
                    <span />
                  </button>
                  <DialogClose
                    className={styles.trigger}
                    data-variant="secondary"
                  >
                    Close
                    <span />
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
              <DropdownMenu open={actionsOpen} onOpenChange={setActionsOpen}>
                <DropdownMenuTrigger
                  ref={dropdownTriggerRef}
                  className={styles.trigger}
                  data-variant="secondary"
                >
                  Actions
                  <span className={styles.hotkeys}>
                    <kbd>⌘</kbd>
                    <kbd>K</kbd>
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onSelect={(event) => {
                      setInstructionsOpen(true);
                    }}
                  >
                    <DownloadIcon /> Download
                    <span className={styles.hotkeys}>
                      <kbd>⌘</kbd>
                      <kbd>D</kbd>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => handleCopyData()}>
                    <ClipboardIcon /> Copy JSON{" "}
                    <span className={styles.hotkeys}>
                      <kbd>⌘</kbd>
                      <kbd>C</kbd>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => handleCopyUrl()}>
                    <LinkIcon /> Share URL{" "}
                    <span className={styles.hotkeys}>
                      <kbd>⌘</kbd>
                      <kbd>⇧</kbd>
                      <kbd>C</kbd>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    <RaycastLogo /> Add to Raycast
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DialogTrigger asChild>
                    <DropdownMenuItem>
                      <CogIcon /> Configure Modifiers
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>⇧</kbd>
                        <kbd>,</kbd>
                      </span>
                    </DropdownMenuItem>
                  </DialogTrigger>
                </DropdownMenuContent>
              </DropdownMenu>
              <DialogContent
                showCloseButton
                onCloseAutoFocus={(event) => {
                  // focus dropdown trigger for accessibility so user doesn't lose their place in the document
                  dropdownTriggerRef.current.focus();
                  event.preventDefault();
                }}
              >
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
          </div>
        </div>
      )}
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
