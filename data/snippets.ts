import { nanoid } from "nanoid";
import {
  CodeBlockIcon,
  CoinsIcon,
  CommandIcon,
  GitHubIcon,
  LowercaseIcon,
  ShuffleIcon,
  SpeechBubbleIcon,
  UnicodeIcon,
} from "../components/Icons";

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
    name: "Arrow Long Right",
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
    keyword: "gbp",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "€",
    name: "Euro",
    keyword: "eur",
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
    keyword: "usd",
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
    keyword: "feedback-thanks",
    type: "template",
  },
  {
    name: "Feedback Resolved",
    id: nanoid(),
    text: `Glad to know it is resolved. Feel free to reach out for any further clarifications.`,
    keyword: "feedback-resolved",
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
    keyword: "ray-vc",
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
    keyword: "css-ac",
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
    name: "Apparantly → Apparently",
    text: "Apparently",
    keyword: "Apparantly",
    type: "spelling",
  },
  {
    id: nanoid(),
    name: "Calender → Calendar",
    text: "Calendar",
    keyword: "Calender",
    type: "spelling",
  },
  {
    id: nanoid(),
    name: "Definately → Definitely",
    text: "Definitely",
    keyword: "Definately",
    type: "spelling",
  },
  {
    id: nanoid(),
    name: "Enviroment → Environment",
    text: "Environment",
    keyword: "Enviroment",
    type: "spelling",
  },
  {
    id: nanoid(),
    name: "Florescent → Fluorescent",
    text: "Fluorescent",
    keyword: "Florescent",
    type: "spelling",
  },
  {
    id: nanoid(),
    name: "Goverment → Government",
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

export const snippets = [
  {
    name: "Arrows",
    slug: "arrows",
    gridCols: 6,
    snippets: arrows,
    icon: ShuffleIcon,
  },
  // { name: "Technical", slug: "technical", gridCols: 4, snippets: technical },
  // {
  //   name: "Bullets & Stars",
  //   slug: "bullets-stars",
  //   gridCols: 4,
  //   snippets: bulletsAndStars,
  // },
  // { name: "Maths", slug: "maths", gridCols: 4, snippets: maths },
  {
    name: "Currency",
    slug: "currency",
    gridCols: 4,
    snippets: currency,
    icon: CoinsIcon,
  },
  {
    name: "Symbols",
    slug: "symbols",
    gridCols: 4,
    snippets: [...technical, bulletsAndStars, ...maths, ...symbols],
    icon: CommandIcon,
  },
  {
    name: "Coding",
    slug: "coding",
    gridCols: 4,
    snippets: coding,
    icon: CodeBlockIcon,
  },
  {
    name: "Feedback",
    slug: "feedback",
    gridCols: 4,
    snippets: feedback,
    icon: SpeechBubbleIcon,
  },
  {
    name: "GitHub",
    slug: "github",
    gridCols: 2,
    snippets: github,
    icon: GitHubIcon,
  },
  {
    name: "Spelling",
    slug: "spelling",
    gridCols: 4,
    snippets: spelling,
    icon: LowercaseIcon,
  },

  {
    name: "Unicode",
    slug: "unicode",
    gridCols: 4,
    snippets: unicodes,
    icon: UnicodeIcon,
  },
];
