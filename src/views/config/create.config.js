import { BUILDIN_ACTION_CONFIGS } from "../../constant";

export function getActionConfigs() {
  return JSON.parse(JSON.stringify(BUILDIN_ACTION_CONFIGS))
}

export function getDefaultForm() {
  return {
    name: '',
    author: "",
    intro: "",
    pattern: '',
    target: 'body',
    type: ''
  }
}