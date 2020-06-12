<template>
  <div class="page-register">
    <div class="container">
      <div class="form-panel">
        <a-form-model
          :model="form"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 10 }"
          @submit="handleSubmit"
          ref="form"
          :rules="rules"
        >
          <a-form-model-item label="Username" prop="username">
            <a-input v-model="form.username" placeholder="Please enter your username"></a-input>
          </a-form-model-item>
          <a-form-model-item label="Email" prop="email">
            <a-input v-model="form.email" placeholder="Please enter your email"></a-input>
          </a-form-model-item>
          <a-form-model-item label="Password" prop="password">
            <a-input-password v-model="form.password" placeholder="Please enter your password"></a-input-password>
          </a-form-model-item>
          <a-form-model-item label="Repassword" prop="repassword">
            <a-input-password
              v-model="form.repassword"
              placeholder="Please enter your password again"
            ></a-input-password>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 10, offset: 5 }">
            <a-button type="primary" html-type="submit" :disabled="submitting">Sign up</a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
import { getDefaultForm, getFormRules } from "./config/register.config";
import { userService } from '../services/user.service';

export default {
  name: "Register",

  data() {
    return {
      submitting: false,
      form: getDefaultForm(),
      rules: getFormRules(this)
    };
  },

  methods: {
    afterRegister() {
      this.$nextTick(() => {
        this.$router.push('/')
      })
    },

    submit() {
      const { username, password, email } = this.form;

      this.submitting = true;
      userService.register({ username, password, email }).then((user) => {
        this.submitting = false;
        this.$message.success('Register successfully', 1, () => {
          this.$store.dispatch('account/updateUser', user)
          this.afterRegister()
        });
      }).catch((error) => {
        console.log("submit -> error", error)
      })
    },
  
    handleSubmit(e) {
      e.preventDefault();
      this.$refs.form.validate(valid => {
        if (valid) {
          this.submit();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/theme.scss";

.container {
  width: 960px;
  margin: 40px auto;
  padding: 40px;
  background: #fff;
  border: 1px solid #ededed;
}
</style>