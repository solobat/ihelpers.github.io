(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{2571:function(e,t,r){"use strict";r("ca34")},a55b:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-login"},[r("div",{staticClass:"container"},[r("div",{staticClass:"form-panel"},[r("a-form-model",{ref:"form",attrs:{model:e.form,"label-col":{span:5},"wrapper-col":{span:10},rules:e.rules},on:{submit:e.handleSubmit}},[r("a-form-model-item",{attrs:{label:e.$t("username"),prop:"username"}},[r("a-input",{attrs:{placeholder:e.$t("enter.username")},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("a-form-model-item",{attrs:{label:e.$t("password"),prop:"password"}},[r("a-input-password",{attrs:{placeholder:e.$t("enter.password")},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("a-form-model-item",{attrs:{"wrapper-col":{span:10,offset:5}}},[r("a-button",{attrs:{type:"primary","html-type":"submit",disabled:e.submitting}},[e._v(e._s(e.$t("login")))])],1)],1)],1)])])},a=[],n=r("5530");function o(){return{username:"",password:""}}function i(e){return{username:[{required:!0,message:e.$t("enter.username")}],password:[{required:!0,message:e.$t("enter.password")}]}}var u=r("2f62"),m={name:"Login",data:function(){return{submitting:!1,form:o(),rules:i(this)}},methods:Object(n["a"])(Object(n["a"])({},Object(u["b"])("account",{login:"login"})),{},{submit:function(){var e=this,t=this.form,r=t.username,s=t.password;this.submitting=!0,this.login({username:r,password:s}).then((function(){e.submitting=!1,e.$message.success(e.$t("login.ok"),1,(function(){var t=e.$route.query.redirect||"/";e.$router.push(t)}))})).catch((function(t){console.log("submit -> error",t),e.$message.error(e.$t("login.error"))}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.$refs.form.validate((function(e){e&&t.submit()}))}})},l=m,c=(r("2571"),r("2877")),p=Object(c["a"])(l,s,a,!1,null,"3d9e9397",null);t["default"]=p.exports},ca34:function(e,t,r){}}]);
//# sourceMappingURL=login.2d9fa7d8.js.map