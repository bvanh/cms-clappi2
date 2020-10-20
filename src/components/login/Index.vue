<template>
  <div id="form-container">
    <a-form id="form" :form="form" class="login-form" @submit="handleSubmit">
      <img :src="importImg('logo.png')" id="logo" />
      <h2>SIGN IN</h2>
      <a-form-item>
        <a-input
          v-decorator="[
            'username',
            {
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            },
          ]"
          placeholder="Username"
          class="log-input"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            },
          ]"
          type="password"
          placeholder="Password"
          class="log-input"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        Remember me
      </a-checkbox>
      <a-button type="primary" html-type="submit" class="login-form-button">
        Log In
      </a-button>
      <a-row type="flex" justify="space-between" class="form-footer">
        <a class="login-form-forgot" href=""> Forgot password </a>
        <span>
          Or
          <a href=""> register now! </a></span
        >
      </a-row>
    </a-form>
  </div>
</template>
<script>
import { importImg } from "../../ultils/importImg";
import { login } from "../../ultils/requests/login";
import { checkToken } from "../../ultils/checkToken";
export default {
  name: "login",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          login(this, values);
        }
      });
    },
    importImg(img) {
      return importImg[img];
    },
  },
  created() {
    if (!checkToken()) {
      this.$router.push("/users");
    }
  },
};
</script>

<style src='./style.scss' lang ='scss'>
</style>