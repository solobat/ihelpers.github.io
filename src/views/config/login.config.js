
export function getDefaultForm() {
  return {
    username: '',
    password: ""
  }
}

export function getFormRules() {
  return {
    username: [{ required: true, message: 'Please enter your username' }],
    password: [{ required: true, message: 'Please enter your password' }],
  }
}