<template>
  <div class="page-home">
    <div class="container">
      <h1>Steward Helper</h1>
      <div class="subtit">{{$t("desc")}}</div>
      <div class="install">
        <a href="https://chrome.google.com/webstore/detail/hcnekoladldejmeindnhpjkfhjadcick"
        class="ins-btn ins-webstore" target="_blank">{{$t("webstore")}}</a>or,
        <a href class="ins-btn ins-offline">{{$t("download")}}</a>
      </div>
      <div class="social-btns">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scoped>
@import "../styles/scss/theme.scss";

.page-home {
  .container {
    margin: 0 auto;
    padding-top: 100px;
    width: 960px;
  }
}

h1 {
  text-align: center;
  font-weight: 500;
  font-size: 30px;
}

.subtit {
  margin-top: 24px;
  text-align: center;
  font-size: 24px;
}

.install {
  margin-top: 24px;
  text-align: center;
}

.ins-webstore {
  margin-right: 5px;
  font-size: 24px;
}

.ins-offline {
  margin-left: 10px;
  font-size: 16px;
}

.social-btns {
  display: flex;
  margin-top: 15px;
  justify-content: space-evenly;
}
</style>
