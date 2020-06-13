import { BUILDIN_ACTION_CONFIGS } from "../../constant";

export function getActionConfigs() {
  return JSON.parse(JSON.stringify(BUILDIN_ACTION_CONFIGS))
}

export function getDefaultForm() {
  return {
    name: '',
    intro: "",
    pattern: '',
    target: 'body',
    type: '',
    video: ''
  }
}

export function getFormRules(vm) {
  return {
    name: [{ required: true, message: vm.$t('enter.automation.name') }],
    type: [{ required: true, message: vm.$t('choose.automation.action') }],
    target: [{ required: true, message: vm.$t('enter.automation.target.selector') }],
    pattern: [{ required: true, message: vm.$t('enter.automation.url.pattern') }],
    video: [
      {
        validator: (rule, value, callback) => {
          if (!value) {
            callback()
          } else if (value.startsWith('<iframe')) {
            callback();
          } else {
            callback(new Error(vm.$t('invalid.video')));
          }
        }
      }
    ],
  }
}