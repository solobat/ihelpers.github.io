
export const WEB_ACTIONS = {
  INSTALL_AUTOMATION: 'installAutomation',
  INSTALL_DONE: 'installDone'
}

export const BUILDIN_ACTIONS = {
  HIGHLIGHT_ENGLISH_SYNTAX: 'highlightEnglishSyntax',
  KILL_ELEMENT: 'killElement',
  READ_MODE: 'readMode',
  HASH_ELEMENT: 'hashElement',
  CODE_COPY: 'codeCopy',
  GOTO_ELEMENT: 'gotoElement',
  DOWNLOAD: 'download',
  FULL_SCREEN: 'fullScreen',
  TIME_UPDATE: 'timeupdate',
  CLICK: 'click'
}

export const BUILDIN_ACTION_OPTIONS = [
  {
    value: '',
    label: 'All'
  },
  {
    value: BUILDIN_ACTIONS.READ_MODE,
    label: 'Read Mode',
  },
  {
    value: BUILDIN_ACTIONS.KILL_ELEMENT,
    label: 'Kill Element',
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
  },
  {
    value: BUILDIN_ACTIONS.FULL_SCREEN,
    label: 'FullScreen element',
  },
  {
    value: BUILDIN_ACTIONS.CODE_COPY,
    label: 'Code copy',
  },
  {
    value: BUILDIN_ACTIONS.CLICK,
    label: 'Click',
  },
  {
    value: BUILDIN_ACTIONS.GOTO_ELEMENT,
    label: 'Goto element',
  }
]