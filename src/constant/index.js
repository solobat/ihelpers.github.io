function t(str) {
  return str;
}

export const WEB_ACTIONS = {
  INSTALL_AUTOMATION: "installAutomation",
  INSTALL_DONE: "installDone",
};

export const BUILDIN_ACTIONS = {
  HIGHLIGHT_ENGLISH_SYNTAX: "highlightEnglishSyntax",
  KILL_ELEMENT: "killElement",
  READ_MODE: "readMode",
  ZEN_MODE: "zenMode",
  HASH_ELEMENT: "hashElement",
  CODE_COPY: "codeCopy",
  GOTO_ELEMENT: "gotoElement",
  DOWNLOAD: "download",
  FULL_SCREEN: "fullScreen",
  TIME_UPDATE: "timeupdate",
  CLICK: "click",
  OPEN_PAGE: "openPage",
  SCROLLBAR: "scrollbar",
  ALLOW_COPYING: "allowCopying",
  ACTIVE: "active",
  SET_VALUE: "setValue",
  EVENT: "event",
  REDIRECT: "redirect",
  SCROLL: "scroll",
  FOCUS: "focus",
  PROTECT: "protect",
  PICTURE_IN_PICTURE: "pictureInPicture",
  DARK_MODE: "darkMode",
  OUTLINE: "outline",
  BUTTON: "button",
  BOOKMARK: "bookmark",
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
    value: BUILDIN_ACTIONS.DARK_MODE,
    label: t("dark_mode"),
    args: [
      {
        tips: "Longitude",
        name: "long",
        type: "string",
        value: 0,
        defaultValue: 0
      },
      {
        tips: "Latitude",
        name: "lat",
        type: "string",
        value: 0,
        defaultValue: 0
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.BOOKMARK,
    label: t("bookmark"),
    args: [
      {
        tips: "CSS-Selector of the target items",
        name: "item",
        type: "string",
        value: "",
        defaultValue: ""
      },
      {
        tips: "Refersh type: auto | manual",
        name: "refresh",
        type: "string",
        defaultValue: "manual",
        value: "manual",
      },
      {
        tips: "should notify on the title?",
        name: "nofity",
        type: "boolean",
        defaultValue: true,
        value: true,
      },
    ],
  },

  {
    value: BUILDIN_ACTIONS.CODE_COPY,
    label: t("code_copy"),
    args: [
      {
        tips: "child of <pre> tag",
        name: "inpre",
        type: "boolean",
        value: false,
        defaultValue: false,
      },
      {
        tips: "<pre> tag",
        name: "pre",
        type: "boolean",
        value: false,
        defaultValue: false,
      },
      {
        tips: "Remove some elements",
        name: "rm",
        type: "string",
        value: "",
        defaultValue: "",
        placeholder: "css selector",
      },
      {
        tips: "Position of btn",
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
    label: t("click_target"),
  },
  {
    value: BUILDIN_ACTIONS.SCROLLBAR,
    label: t("scrollbar"),
    args: [
      {
        tips: "Delay to scrolling",
        name: "delay",
        type: "string",
        value: 0,
        defaultValue: 0
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.OPEN_PAGE,
    label: t("open_page"),
    args: [
      {
        tips: "url to be opened(optional)",
        name: "url",
        type: "string",
        value: '',
        defaultValue: ''
      },
      {
        tips: "type of page,such as baike / wiki(optional)",
        name: "type",
        type: "string",
        value: '',
        defaultValue: ''
      },
      {
        tips: "args of page type(optional)",
        name: "args",
        type: "string",
        value: '',
        defaultValue: ''
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.EVENT,
    label: t("event"),
    args: [
      {
        tips: "Name of event",
        name: "events",
        type: "string",
        value: '',
        defaultValue: ''
      },
      {
        tips: "css selector of target",
        name: "selector",
        type: "string",
        value: '',
        defaultValue: ''
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.SET_VALUE,
    label: t("set_value"),
    args: [
      {
        tips: "Value",
        name: "value",
        type: "string",
        value: "",
        defaultValue: "",
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.ACTIVE,
    label: t("active"),
  },
  {
    value: BUILDIN_ACTIONS.SCROLL,
    label: t("scroll"),
    args: [
      {
        tips: "Speed of scrolling with unit px/s",
        name: "speed",
        type: "string",
        value: 20,
        defaultValue: 20,
      },
    ],
  },

  {
    value: BUILDIN_ACTIONS.BUTTON,
    label: t("button"),
    args: [
      {
        tips: "Button Type, available types are: {top|toggle|shortcut|translate}",
        name: "type",
        type: "string",
        value: "",
        defaultValue: "",
      },
      {
        tips: "CSS selector of the items",
        name: "item",
        type: "string",
        value: "",
        defaultValue: "",
        placeholder: "css selector",
      },
      {
        tips: "Position of btn",
        name: "pos",
        type: "string",
        value: "",
        defaultValue: "",
        placeholder: "tl|tr|bl|br",
      },
      {
        tips: "Min-height of btn",
        name: "mh",
        type: "string",
        value: 35,
        defaultValue: 35,
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.OUTLINE,
    label: t("outline"),
  },
  {
    value: BUILDIN_ACTIONS.REDIRECT,
    label: t("redirect"),
    args: [
      {
        tips: "path pattern of from page",
        name: "from",
        type: "string",
        value: '',
        defaultValue: ''
      },
      {
        tips: "path pattern of to page",
        name: "to",
        type: "string",
        value: '',
        defaultValue: ''
      },
      {
        tips: "hostname of to page",
        name: "host",
        type: "string",
        value: '',
        defaultValue: ''
      },
      {
        tips: "new query(pieces) of url",
        name: "query",
        type: "string",
        value: '',
        defaultValue: ''
      },
      {
        tips: "format of query: arr | default",
        name: "qformat",
        type: "string",
        value: '',
        defaultValue: ''
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.ALLOW_COPYING,
    label: t("allow_copying"),
    args: [],
  },
  {
    value: BUILDIN_ACTIONS.ZEN_MODE,
    label: t("zen_mode"),
    args: [
      {
        tips: "Text to be displayed",
        name: "word",
        type: "string",
        value: "Zen",
        defaultValue: "Zen",
      },
      {
        tips: "How long to delay displaying the page",
        name: "delay",
        type: "string",
        value: 0,
        defaultValue: 0,
        placeholder: "0 means never display",
      },
      {
        tips: "Background Color",
        name: "bgcolor",
        type: "string",
        value: "#35363a",
        defaultValue: "#35363a",
      },
      {
        tips: "Font Color",
        name: "color",
        type: "string",
        value: "#ffffff",
        defaultValue: "#ffffff",
      },
    ],
  },
  {
    value: BUILDIN_ACTIONS.PICTURE_IN_PICTURE,
    label: t("start_pip_mode"),
    args: [],
  },
  {
    value: BUILDIN_ACTIONS.HASH_ELEMENT,
    label: t("add_anchor_for_elements"),
  },
  {
    value: BUILDIN_ACTIONS.TIME_UPDATE,
    label: t("add_time_tag_for_video"),
  },

  {
    value: BUILDIN_ACTIONS.GOTO_ELEMENT,
    label: t("goto_element"),
    args: [
      {
        tips: "Auto Goto",
        name: "auto",
        type: "boolean",
        value: false,
        defaultValue: false,
      },
      {
        tips: "Target",
        name: "to",
        type: "string",
        value: "",
        defaultValue: "",
        placeholder: "css selector",
      },
      {
        tips: "Order",
        name: "order",
        type: "string",
        value: "asc",
        defaultValue: "asc",
        placeholder: "desc/asc",
      },
      {
        tips: "Handle, The available functions are: {text|trim|number|siblingText}",
        name: "handle",
        type: "string",
        value: "",
        defaultValue: "",
        placeholder: "[.selector,fn]",
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
    label: t("Immediately"),
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
