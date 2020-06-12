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
        <nav class="right-nav">
          <ul class="right-nav-list">
            <li style="position: relative; top: 3px;">
              <a class="github-button" href="https://github.com/solobat/steward-helper"
                data-icon="octicon-star" data-size="large" data-show-count="true"
                aria-label="Star solobat/steward-helper on GitHub">Star</a>
            </li>
            <li v-if="!loggedIn">
              <router-link to="/register" class="link-btn">Sign up</router-link>
              <router-link to="/login" class="link-btn">Login</router-link>
            </li>
            <li v-else>
              <a-dropdown :trigger="['click']" overlayClassName="user-layer">
                <span>{{user.username}}</span>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <div @click="onLogoutClick">登出</div>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "TopBar",

  computed: {
    ...mapGetters('account', ['loggedIn', 'user', 'uid'])
  },

  methods: {
    ...mapActions('account', ['logout']),

    onLogoutClick() {
      this.logout().then(() => {
        this.$message.success('登出成功');
      })
    }
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
    height: 40px;
    align-items: center;
    margin-left: 20px;

    .nav-item {
      padding: 0 18px;
    }
  }

  .right-nav-list {
    display: flex;
    align-items: center;
    height: 40px;

    li {
      margin-left: 20px;
    }

    .link-btn {
      margin-left: 10px;
    }
  }

  .github-btn-wrap {
    display: flex;
    align-items: center;
  }
}
</style>
<style lang="scss">
.user-layer {
  width: 120px;
}
</style>