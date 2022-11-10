
export const WEB_ACTIONS = {
  INSTALL_AUTOMATION: 'installAutomation',
  INSTALL_DONE: 'installDone'
}

export const BUILDIN_ACTIONS = {
  HIGHLIGHT_ENGLISH_SYNTAX: 'highlightEnglishSyntax',
  KILL_ELEMENT: 'killElement',
  READ_MODE: 'readMode',
  ZEN_MODE: 'zenMode',
  PICTURE_IN_PICTURE: 'pictureInPicture',
  HASH_ELEMENT: 'hashElement',
  CODE_COPY: 'codeCopy',
  GOTO_ELEMENT: 'gotoElement',
  DOWNLOAD: 'download',
  FULL_SCREEN: 'fullScreen',
  TIME_UPDATE: 'timeupdate',
  CLICK: 'click',
  BUTTON: 'button'
}

export const BUILDIN_ACTION_CONFIGS = [
  {
    value: BUILDIN_ACTIONS.READ_MODE,
    label: 'Read Mode',
    args: [
      { tips: 'metaKey', name: 'metaKey', type: 'boolean', value: false, defaultValue: false }
    ],
  },
  {
    value: BUILDIN_ACTIONS.ZEN_MODE,
    label: 'Zen Mode',
    args: [
      { tips: 'Text to be displayed', name: 'word', type: 'string', value: 'Zen', defaultValue: 'Zen' },
      { tips: 'How long to delay displaying the page', name: 'delay',
        type: 'string', value: 0, defaultValue: 0, placeholder: '0 means never display' },
      { tips: 'Background Color', name: 'bgcolor', type: 'string', value: '#35363a', defaultValue: '#35363a' },
      { tips: 'Font Color', name: 'color', type: 'string', value: '#ffffff', defaultValue: '#ffffff' },
    ],
  },
  {
    value: BUILDIN_ACTIONS.KILL_ELEMENT,
    label: 'Kill Element',
    args: [
      { tips: 'metaKey', name: 'metaKey', type: 'boolean', value: false, defaultValue: false }
    ],
  },
  {
    value: BUILDIN_ACTIONS.PICTURE_IN_PICTURE,
    label: 'PIP Mode',
    args: [ ]
  },
  {
    value: BUILDIN_ACTIONS.HIGHLIGHT_ENGLISH_SYNTAX,
    label: 'English Syntax highlighting',
  },
  {
    value: BUILDIN_ACTIONS.HASH_ELEMENT,
    label: 'Add anchor for elements',
  },
  {
    value: BUILDIN_ACTIONS.TIME_UPDATE,
    label: 'Add time tag for video',
  },
  {
    value: BUILDIN_ACTIONS.DOWNLOAD,
    label: 'Download element',
    args: [
      { tips: 'auto close the new tab opened by automation',
        name: 'autoclose', type: 'boolean', value: false, defaultValue: false
      },
    ]
  },
  {
    value: BUILDIN_ACTIONS.FULL_SCREEN,
    label: 'FullScreen element',
  },
  {
    value: BUILDIN_ACTIONS.CODE_COPY,
    label: 'Code copy',
    args: [
      { tips: 'child of <pre> tag', name: 'inpre', type: 'boolean', value: false, defaultValue: false },
      { tips: '<pre> tag', name: 'pre', type: 'boolean', value: false, defaultValue: false },
      { tips: 'Remove some elements', name: 'rm', type: 'string',
        value: '', defaultValue: '', placeholder: 'css selector' },
      { tips: 'Position of btn', name: 'pos', type: 'string',
        value: 'tl', defaultValue: 'tl', placeholder: 'tl|tr' }
    ]
  },
  {
    value: BUILDIN_ACTIONS.CLICK,
    label: 'Click',
  },
  {
    value: BUILDIN_ACTIONS.GOTO_ELEMENT,
    label: 'Goto element',
    args: [
      { tips: 'Auto Goto', name: 'auto', type: 'boolean', value: false, defaultValue: false },
      { tips: 'Target', name: 'to', type: 'string', value: '',
        defaultValue: '', placeholder: 'css selector' },
      { tips: 'Order', name: 'order', type: 'string', value: 'asc',
        defaultValue: 'asc', placeholder: 'desc/asc' },
      { tips: 'Handle, The available functions are: {text|trim|number|siblingText}', 
        name: 'handle', type: 'string', value: '', defaultValue: '', placeholder: '[.selector,fn]' }
    ],
  },
  {
    value: BUILDIN_ACTIONS.BUTTON,
    label: 'Add button',
    args: [
      { tips: 'Button Type, available types are: {top|toggle|shortcut|translate}', name: 'type',
        type: 'string', value: 'top', defaultValue: 'top' },
      { tips: 'Position of btn', name: 'pos', type: 'string', value: '', defaultValue: '',
        placeholder: 'tl|tr|bl|br' },
      { tips: 'CSS selector of the items', name: 'item', type: 'string', value: '', defaultValue: '',
        placeholder: 'css selector'},
      { tips: 'Min-height of btn', name: 'mh', type: 'string', value: 35, defaultValue: 35 }
    ]
  }
]

export const BUILDIN_ACTION_OPTIONS = [
  {
    value: '',
    label: 'All'
  },
  ...BUILDIN_ACTION_CONFIGS
]

export const RUN_AT_OPTIONS = [
  {
    value: 0,
    label: 'Immediately'
  },
  {
    value: 1,
    label: 'DomReady'
  }
]