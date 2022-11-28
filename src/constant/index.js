function t(str) {
  return str;
}

export const WEB_ACTIONS = {
  INSTALL_AUTOMATION: "installAutomation",
  INSTALL_DONE: "installDone",
};

export const BUILDIN_ACTIONS = {
  HIGHLIGHT_ENGLISH_SYNTAX: "highlightEnglishSyntax",
  READ_MODE: "readMode",
  SCROLL: "scroll",
  BOOKMARK: "bookmark",
  OUTLINE: "outline",
  CODE_COPY: "codeCopy",
  ZEN_MODE: "zenMode",
  KILL_ELEMENT: "killElement",
  PICTURE_IN_PICTURE: "pictureInPicture",
  HASH_ELEMENT: "hashElement",
  GOTO_ELEMENT: "gotoElement",
  DOWNLOAD: "download",
  FULL_SCREEN: "fullScreen",
  TIME_UPDATE: "timeupdate",
  CLICK: "click",
  BUTTON: "button",
};

export const BUILDIN_ACTION_CONFIGS = [
  {
    value: BUILDIN_ACTIONS.READ_MODE,
    label: t("read_mode"),
    args: [
      {
        tips: "metaKey",
        name: "metaKey",
        type: "boolean",
        value: false,
        defaultValue: false,
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.SCROLL,
    label: t("scroll"),
    args: [
      {
        tips: t("Speed of scrolling with unit px/s"),
        name: "speed",
        type: "number",
        value: 20,
        defaultValue: 20,
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.OUTLINE,
    label: t("outline"),
  },
  {
    value: BUILDIN_ACTIONS.ZEN_MODE,
    label: t("zen_mode"),
    args: [
      {
        tips: t("Text to be displayed"),
        name: "word",
        type: "string",
        value: "Zen",
        defaultValue: "Zen",
      },
      {
        tips: t("How long to delay displaying the page"),
        name: "delay",
        type: "string",
        value: 0,
        defaultValue: 0,
        placeholder: "0 means never display",
      },
      {
        tips: t("Background Color"),
        name: "bgcolor",
        type: "string",
        value: "#35363a",
        defaultValue: "#35363a",
      },
      {
        tips: t("Font Color"),
        name: "color",
        type: "string",
        value: "#ffffff",
        defaultValue: "#ffffff",
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.BOOKMARK,
    label: t("bookmark"),
    args: [
      {
        tips: t("CSS-Selector of the target items"),
        name: "item",
        type: "string",
      },
      {
        tips: t("Refersh type: auto / manual"),
        name: "refresh",
        type: "string",
        defaultValue: "manual",
        value: "manual",
      },
      {
        tips: t("should notify on the title"),
        name: "nofity",
        type: "boolean",
        defaultValue: true,
        value: true,
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.KILL_ELEMENT,
    label: t("kill_element"),
    args: [
      {
        tips: "metaKey",
        name: "metaKey",
        type: "boolean",
        value: false,
        defaultValue: false,
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.PICTURE_IN_PICTURE,
    label: t("pip_mode"),
    args: [],
  },
  {
    value: BUILDIN_ACTIONS.HIGHLIGHT_ENGLISH_SYNTAX,
    label: t("English Syntax highlighting"),
  },
  {
    value: BUILDIN_ACTIONS.HASH_ELEMENT,
    label: t("Add anchor for elements"),
  },
  {
    value: BUILDIN_ACTIONS.TIME_UPDATE,
    label: t("Add time tag for video"),
  },
  {
    value: BUILDIN_ACTIONS.DOWNLOAD,
    label: t("Download element"),
    args: [
      {
        tips: t("auto close the new tab opened by automation"),
        name: "autoclose",
        type: "boolean",
        value: false,
        defaultValue: false,
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.FULL_SCREEN,
    label: t("fullScreen_element"),
  },
  {
    value: BUILDIN_ACTIONS.CODE_COPY,
    label: t("code_copy"),
    args: [
      {
        tips: t("child of pre tag"),
        name: "inpre",
        type: "boolean",
        value: false,
        defaultValue: false,
      },
      {
        tips: t("pre tag"),
        name: "pre",
        type: "boolean",
        value: false,
        defaultValue: false,
      },
      {
        tips: t("Remove some elements"),
        name: "rm",
        type: "string",
        value: "",
        defaultValue: "",
        placeholder: "css selector",
      },
      {
        tips: t("Position of btn"),
        name: "pos",
        type: "string",
        value: "tl",
        defaultValue: "tl",
        placeholder: "tl|tr",
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.CLICK,
    label: t("Click"),
  },
  {
    value: BUILDIN_ACTIONS.GOTO_ELEMENT,
    label: t("Goto element"),
    args: [
      {
        tips: t("Auto Goto"),
        name: "auto",
        type: "boolean",
        value: false,
        defaultValue: false,
      },
      {
        tips: t("Target"),
        name: "to",
        type: "string",
        value: "",
        defaultValue: "",
        placeholder: "css selector",
      },
      {
        tips: t("Order"),
        name: "order",
        type: "string",
        value: "asc",
        defaultValue: "asc",
        placeholder: "desc/asc",
      },
      {
        tips: t(
          "Handle The available functions are text/trim/number/siblingText"
        ),
        name: "handle",
        type: "string",
        value: "",
        defaultValue: "",
        placeholder: "[.selector,fn]",
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.BUTTON,
    label: t("add_button"),
    args: [
      {
        tips: t(
          "Button Type available types are top/toggle/shortcut/translate"
        ),
        name: "type",
        type: "string",
        value: "top",
        defaultValue: "top",
      },
      {
        tips: t("Position of btn"),
        name: "pos",
        type: "string",
        value: "",
        defaultValue: "",
        placeholder: "tl|tr|bl|br",
      },
      {
        tips: t("CSS selector of the items"),
        name: "item",
        type: "string",
        value: "",
        defaultValue: "",
        placeholder: "css selector",
      },
      {
        tips: t("Min-height of btn"),
        name: "mh",
        type: "string",
        value: 35,
        defaultValue: 35,
      },
    ],
  },
];

export const BUILDIN_ACTION_OPTIONS = [
  {
    value: "",
    label: "All",
  },
  ...BUILDIN_ACTION_CONFIGS,
];

export const RUN_AT_OPTIONS = [
  {
    value: 0,
    label: t('Immediately'),
  },
  {
    value: 1,
    label: t("DomReady"),
  },
  {
    value: 2,
    label: t("Delayed"),
  },
];
