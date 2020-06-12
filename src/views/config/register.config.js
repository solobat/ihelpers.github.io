
export function getDefaultForm() {
  return {
    username: '',
    password: "",
    repassword: "",
    email: '',
  }
}

export function getFormRules(vm) {
  return {
    username: [{ required: true, message: 'Please enter your username' }],
    email: [{ type: 'email', message: 'Not a valid email' }],
    password: [{ required: true, message: 'Please enter your password' }],
    repassword: [
      { required: true, message: 'Please enter your password again' },
      {
        validator: (rule, value, callback) => {
          if (value && value === vm.form.password) {
            callback();
          } else {
            callback(new Error('Different from password'));
          }
        }
      }
    ],
  }
}