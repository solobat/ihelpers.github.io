<template>
  <div class="topbar">
    <header class="main-header">
      <div class="container">
        <a href="/" class="logo"></a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/automations">Automations</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  name: "TopBar",

  methods: {

  }
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/theme.scss";

.topbar {
  height: 60px;
  background: $background-color-light;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.main-header {
  position: relative;
  height: 60px;

  .container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 960px;
    height: 60px;
  }

  .logo {
    background: url("../assets/img/logo.png") no-repeat center center;
    background-size: 50px 50px;
    width: 50px;
    height: 50px;
  }

  a {
    text-decoration: none;
    color: $color;

    &:hover {
      color: $color-primary;
    }
  }

  .router-link-exact-active {
    color: $color-primary;
  }

  ul {
    list-style: none;
  }

  .main-nav {
    flex: 1;
  }

  .nav-list {
    display: flex;
    margin-left: 20px;

    .nav-item {
      padding: 0 18px;
    }
  }
}
</style>
<style lang="scss">
.user-layer {
  width: 120px;
}
</style>