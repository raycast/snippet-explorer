import { nanoid } from "nanoid";
import {
  CalendarIcon,
  CodeBlockIcon,
  CoinsIcon,
  CommandIcon,
  GitHubIcon,
  LowercaseIcon,
  ShuffleIcon,
  SnippetsIcon,
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
    keyword: "upleft",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↗︎",
    name: "Arrow Up Right",
    keyword: "upright",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↙",
    name: "Arrow Down Left",
    keyword: "downleft",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↘",
    name: "Arrow Down Right",
    keyword: "downright",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⟶",
    name: "Arrow Long Right",
    keyword: "longright",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⟵",
    name: "Arrow Long Left",
    keyword: "longleft",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↩",
    name: "Arrow Left Hook",
    keyword: "lefthook",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "↪",
    name: "Arrow Right Hook",
    keyword: "righthook",
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
    text: "⎋",
    name: "Escape",
    keyword: "esc",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⇥",
    name: "Tab",
    keyword: "tab",
    type: "symbol",
  },
  {
    id: nanoid(),
    text: "⏎",
    name: "Return",
    keyword: "return",
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
    name: "Console Log Object",
    id: nanoid(),
    text: `console.log({{cursor}})`,
    keyword: "vlog",
    type: "template",
  },
  {
    name: "Console Assert",
    id: nanoid(),
    text: `console.assert({cursor})`,
    keyword: "assert",
    type: "template",
  },
  {
    name: "Console Info",
    id: nanoid(),
    text: `console.info({cursor})`,
    keyword: "info",
    type: "template",
  },
  {
    name: "Console Error",
    id: nanoid(),
    text: `console.error({cursor})`,
    keyword: "error",
    type: "template",
  },
  {
    name: "Try Catch",
    id: nanoid(),
    text: `try {
  {cursor}
} catch (error) {

} finally {

}`,
    keyword: "try",
    type: "template",
  },
  {
    name: "Switch Statement",
    id: nanoid(),
    text: `switch ({cursor}) {
  case 'value': {
    break
  }
  default: {
    break
  }
}`,
    keyword: "switch",
    type: "template",
  },
  {
    name: "Sleep Promise",
    id: nanoid(),
    text: `const sleep = (time = 3000) => new Promise (resolve => setTimeout (resolve, time));`,
    keyword: "sleep",
    type: "template",
  },
  {
    name: "React: useEffect",
    id: nanoid(),
    text: `React.useEffect(() => {
  {cursor}
}, [])`,
    keyword: "rue",
    type: "template",
  },
  {
    name: "React: useReducer",
    id: nanoid(),
    text: `const [state, dispatch] = React.useReducer(someReducer, {
  {cursor}
})`,
    keyword: "rur",
    type: "template",
  },
  {
    name: "React: componentWillMount",
    id: nanoid(),
    text: `componentWillMount() {
  {cursor}
}`,
    keyword: "rcwm",
    type: "template",
  },
  {
    name: "React: componentDidMount",
    id: nanoid(),
    text: `componentDidMount() {
  {cursor}
}`,
    keyword: "rcdm",
    type: "template",
  },
  {
    name: "React: componentWillReceiveProps",
    id: nanoid(),
    text: `componentWillReceiveProps(nextProps) {
  {cursor}
}`,
    keyword: "rcwrp",
    type: "template",
  },
  {
    name: "React: componentWillUpdate",
    id: nanoid(),
    text: `componentWillUpdate(nextProps, nextState) {
  {cursor}
}`,
    keyword: "rcwu",
    type: "template",
  },
  {
    name: "React: componentDidUpdate",
    id: nanoid(),
    text: `componentDidUpdate(prevProps, prevState) {
  {cursor}
}`,
    keyword: "rcdu",
    type: "template",
  },
  {
    name: "React: componentWillUnmount",
    id: nanoid(),
    text: `componentWillUnmount() {
  {cursor}
}`,
    keyword: "rcwum",
    type: "template",
  },
  {
    name: "Vue3 Composition API: Base TypeScript",
    id: nanoid(),
    text: `<script lang="ts" setup>
  {cursor}
</script>

<template>
  <div>
    <h1>Vue Component</h1>
  </div>
</template>

<style lang="scss" scoped>

</style>`,
    keyword: "vbase",
    type: "template",
  },
  {
    name: "Vue3 Composition API: Define props TypeScript",
    id: nanoid(),
    text: `const props = defineProps<{
  {cursor}
}>();`,
    keyword: "vprops",
    type: "template",
  },
  {
    name: "Vue3 Composition API: Emits TypeScript",
    id: nanoid(),
    text: `const emits = defineEmits<{
  (event: "{cursor}"): void,
}>();`,
    keyword: "vemits",
    type: "template",
  },
  {
    name: "Vue3 Composition API: Props with Defaults",
    id: nanoid(),
    text: `const props = withDefaults(
  defineProps<{
    {cursor}
  }>(),
  {

  }
);`,
    keyword: "vdefprops",
    type: "template",
  },
  {
    name: "CSS: Flex Center",
    id: nanoid(),
    text: `display: flex;
justify-content: center;
align-items: center;`,
    keyword: "flexcenter",
    type: "template",
  },
  {
    name: "CSS: Grid Center",
    id: nanoid(),
    text: `display: grid;
place-items: center;`,
    keyword: "gridcenter",
    type: "template",
  },
  {
    name: "CSS: Absolute Center",
    id: nanoid(),
    text: `position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);`,
    keyword: "absolutecenter",
    type: "template",
  },
  {
    name: "Svelte: If Block",
    id: nanoid(),
    text: `{#if {cursor}}

{/if}`,
    keyword: "sif",
    type: "template",
  },
  {
    name: "Svelte: If Else Block",
    id: nanoid(),
    text: `{#if {cursor}}

{:else}

{/if}`,
    keyword: "selse",
    type: "template",
  },
  {
    name: "Svelte: Each Block",
    id: nanoid(),
    text: `{#each {cursor} as item}

{/each}`,
    keyword: "seach",
    type: "template",
  },
  {
    name: "Svelte: Await Block",
    id: nanoid(),
    text: `{#await {cursor}}
  {#then thing}

  {/then}
  {#catch error}

  {/catch}
{/await}`,
    keyword: "sawait",
    type: "template",
  },
  {
    name: "Svelte: Key Block",
    id: nanoid(),
    text: `{#key {cursor}}

{/key}`,
    keyword: "skey",
    type: "template",
  },
  {
    name: "Svelte: Debug Block",
    id: nanoid(),
    text: `{@debug {cursor}}`,
    keyword: "sdebug",
    type: "template",
  },
  {
    name: "Svelte: HTML Block",
    id: nanoid(),
    text: `{@html {cursor}}`,
    keyword: "shtml",
    type: "template",
  },
  {
    name: "Svelte: Component",
    id: nanoid(),
    text: `<svelte:component this={{cursor}} />`,
    keyword: "scomponent",
    type: "template",
  },
  {
    name: "Svelte: Window",
    id: nanoid(),
    text: `<svelte:window on:resize={{cursor}} />`,
    keyword: "swindow",
    type: "template",
  },
  {
    name: "Svelte: Head",
    id: nanoid(),
    text: `<svelte:head>
  {cursor}
</svelte:head>`,
    keyword: "shead",
    type: "template",
  },
  {
    name: "Svelte: Body",
    id: nanoid(),
    text: `<svelte:body on:mouseenter={{cursor}} />`,
    keyword: "sbody",
    type: "template",
  },
  {
    name: "Svelte: Options",
    id: nanoid(),
    text: `<svelte:options immutable={{cursor}} />`,
    keyword: "soptions",
    type: "template",
  },
  {
    name: "Svelte: Fragment",
    id: nanoid(),
    text: `<svelte:fragment> slot="header"
  {cursor}
</svelte:fragment>`,
    keyword: "sfragment",
    type: "template",
  },
  {
    name: "Svelte: Slot",
    id: nanoid(),
    text: `<slot name="header">
  {cursor}
</slot>`,
    keyword: "sslot",
    type: "template",
  },
  {
    name: "Svelte: Ref",
    id: nanoid(),
    text: `bind:this={{cursor}}`,
    keyword: "sref",
    type: "template",
  },
  {
    name: "Svelte: Transition Fade",
    id: nanoid(),
    text: `transition:fade={{ duration: {cursor} }}`,
    keyword: "sfade",
    type: "template",
  },
  {
    name: "Svelte: Transition Fly",
    id: nanoid(),
    text: `transition:fly={{ x: 100, y: 100, duration: {cursor} }}`,
    keyword: "sfly",
    type: "template",
  },
  {
    name: "Svelte: Transition Slide",
    id: nanoid(),
    text: `transition:slide={{ duration: {cursor} }}`,
    keyword: "sslide",
    type: "template",
  },
  {
    name: "Svelte: Transition Scale",
    id: nanoid(),
    text: `transition:scale={{ duration: {cursor} }}`,
    keyword: "sscale",
    type: "template",
  },
  {
    name: "Svelte: Transition Draw",
    id: nanoid(),
    text: `transition:draw={{ duration: {cursor} }}`,
    keyword: "sdraw",
    type: "template",
  },
  {
    name: "Svelte: Transition CrossFade",
    id: nanoid(),
    text: `transition:crossfade={{ duration: {cursor} }}`,
    keyword: "scrossfade",
    type: "template",
  },
  {
    name: "Svelte: Transition Blur",
    id: nanoid(),
    text: `transition:blur={{ duration: 500 }}`,
    keyword: "sblur",
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
  {
    name: "SQL Select",
    id: nanoid(),
    text: `SELECT * FROM {cursor} where id = `,
    keyword: "sql-select",
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
    name: "GitHub Issue Template",
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
    name: "GitHub Pull Request Template",
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
  {
    id: nanoid(),
    name: "GitHub Table",
    text: `| Title1 | Title2 |
| ------- | ------- |
| Content1 | Content2 |
  `,
    keyword: "gh-table",
    type: "template",
  },
  {
    id: nanoid(),
    name: "GitHub Details",
    text: `<details>
<summary>Title</summary>
{cursor}
</details>`,
    keyword: "gh-details",
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
    keyword: "wink",
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
    keyword: "putting-table",
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

const date = [
  {
    id: nanoid(),
    name: "Current Date",
    text: "The date is {date}.",
    keyword: "date",
    type: "template",
  },
  {
    id: nanoid(),
    name: "Current Time",
    text: "The current time is {time}.",
    keyword: "time",
    type: "template",
  },
  {
    id: nanoid(),
    name: "Current Date and Time",
    text: "The current date and time is {datetime}.",
    keyword: "datetime",
    type: "template",
  },
  {
    id: nanoid(),
    name: "Weekday",
    text: "Today is {weekday}.",
    keyword: "day",
    type: "template",
  },
  {
    id: nanoid(),
    name: "1 Year from Today",
    text: "1 year from today will be {weekday +1y}.",
    keyword: "nextyear",
    type: "template",
  },
  {
    id: nanoid(),
    name: "4 Days from Today",
    text: "4 days from today will be {day +4d}.",
    keyword: "day+4",
    type: "template",
  },
  {
    id: nanoid(),
    name: "Week Number",
    text: 'This week number is {date "w"}.',
    keyword: "wn",
    type: "template",
  },
  {
    id: nanoid(),
    name: "Next Week Number",
    text: 'Next week number is {date +7d "w"}.',
    keyword: "nwk",
    type: "template",
  },
];

const misc = [
  {
    id: nanoid(),
    name: "Email Address",
    text: "your@email.com",
    keyword: "email",
    type: "template",
  },
  {
    id: nanoid(),
    name: "Address",
    text: "123 Quebec Road, Montreal, QC, H3A 2B2",
    keyword: "address",
    type: "template",
  },
  {
    id: nanoid(),
    name: "IBAN",
    text: "NL88INGB7356737620",
    keyword: "iban",
    type: "template",
  },
  {
    id: nanoid(),
    name: "VAT Number",
    text: "GB 943182327",
    keyword: "vat",
    type: "template",
  },
  {
    id: nanoid(),
    name: "Crypto Wallet Address",
    text: "0x0000000000000000000000000000000000000000",
    keyword: "wa",
    type: "template",
  },
  {
    id: nanoid(),
    name: "Cal.com Invite Link",
    text: "https://cal.com/username/30min",
    keyword: "cal",
    type: "template",
  },
];

export const snippetGroups = [
  {
    name: "Symbols",
    slug: "/symbols",
    gridCols: 4,
    snippets: [...technical, ...bulletsAndStars, ...maths, ...symbols],
    icon: CommandIcon,
  },
  {
    name: "Arrows",
    slug: "/arrows",
    gridCols: 6,
    snippets: arrows,
    icon: ShuffleIcon,
  },
  {
    name: "Unicode",
    slug: "/unicode",
    gridCols: 4,
    snippets: unicodes,
    icon: UnicodeIcon,
  },
  {
    name: "Date & Time",
    slug: "/dates",
    gridCols: 3,
    snippets: date,
    icon: CalendarIcon,
  },
  {
    name: "Misceallenous",
    slug: "/misc",
    gridCols: 2,
    snippets: misc,
    icon: SnippetsIcon,
  },
  {
    name: "Spelling",
    slug: "/spelling",
    gridCols: 4,
    snippets: spelling,
    icon: LowercaseIcon,
  },
  {
    name: "Currency",
    slug: "/currency",
    gridCols: 4,
    snippets: currency,
    icon: CoinsIcon,
  },
  {
    name: "Coding",
    slug: "/coding",
    gridCols: 3,
    snippets: coding,
    icon: CodeBlockIcon,
  },
  {
    name: "Feedback",
    slug: "/feedback",
    gridCols: 3,
    snippets: feedback,
    icon: SpeechBubbleIcon,
  },
  {
    name: "GitHub",
    slug: "/github",
    gridCols: 2,
    snippets: github,
    icon: GitHubIcon,
  },
];
