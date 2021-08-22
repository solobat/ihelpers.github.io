<template>
  <footer class="footer">
    <div class="content">
      <div class="groups">
        <div class="links">
          <a href="https://www.ihelpers.io" class="logo">
            <span></span>
          </a>
        </div>
        <div class="links">
          <router-link to="/privacy">{{$t("Privacy")}}</router-link>
          <a href="https://opensource.org/licenses/MIT" target="_blank">MIT Licenses</a>
        </div>
        <div class="links">
          <a href="https://about.me/tomasy" target="_blank">
            {{$t("About")}}
          </a>
          <a href="https://twitter.com/fmlycls" target="_blank">Twitter</a>
          <a v-if="$i18n.locale === 'zh_CN'" href="https://weibo.com/soloooo" target="_blank">{{$t("Weibo")}}</a>
        </div>
        <div class="links">
          <a href="https://oksteward.com/" target="_blank">Steward</a>
          <a href="https://wordcard.app/" target="_blank">{{$t("Paodin")}}</a>
        </div>
      </div>
      <div class="copywrite">
        <span>Steward - {{$t("A command launcher for browser")}}</span>
        <span>
          &nbsp;©&nbsp;2020
          <a href="https://www.ihelpers.io">ihelpers.io</a> by
          <a href="https://github.com/solobat" target="_blank">Tomas Yang</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/theme.scss";

.footer {
  background: #000;
  padding: 24px 0;
}

.logo span {
  display: block;
  margin-top: 15px;
  width: 50px;
  height: 50px;
  background: url('../assets/img/logo.png')
    no-repeat center center;
  background-size: 50px 50px;
}

.groups {
  display: flex;
  justify-content: space-around;
}
.groups .links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.groups .links a {
  color: #ccc;
  text-decoration: none;
  line-height: 30px;
  width: 130px;
}
.groups .links a:hover {
  color: #eee;
}

.copywrite {
  color: #888;
  margin-top: 12px;
  text-align: center;
}
.copywrite a {
  color: #888;
  text-decoration: none;
}
.copywrite a:hover {
  color: #666;
  text-decoration: underline;
}
</style>