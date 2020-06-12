<template>
  <div class="page-user">
    <div class="container">
      <div class="user-wrap" v-if="user">
        <div class="user-panel">
          <a-icon type="user" />
          <span class="user-name">{{user.username}}</span>
        </div>
        <div class="user-data">
          <div class="automations" v-if="list.length">
            <automation v-for="item in list" :key="item.id" :automation="item" />
          </div>
          <a-empty v-if="!loading && !list.length"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { automationService } from '../services/automation.service'
import Automation from '../components/AutomationRow'

export default {
  name: 'User',

  components: {
    Automation
  },

  data() {
    return {
      uid: this.$route.params.id,
      list: []
    }
  },

  computed: {
    user() {
      if (this.list.length) {
        return this.list[0].attributes.author.attributes
      } else {
        return null;
      }
    }
  },

  methods: {
    loadData() {
      automationService.listOfAuthor(this.uid).then(list => {
        this.list = list
      })
    }
  },

  mounted() {
    this.loadData()
  }
}
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

.user-data {
  border-top: 1px solid #ededed;
  margin-top: 20px;
}

.user-panel {
  font-size: 16px;
}

.user-name {
  margin-left: 10px;
}
</style>