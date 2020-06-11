<template>
  <div class="page-automations">
    <div class="container">
      <loading :visible="loading"/>
      <div class="automations" v-if="list.length">
        <automation v-for="item in list" :key="item.id" :automation="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { automationService, installOk } from '../services/automation.service'
import Automation from '../components/AutomationRow'
import Loading from '../components/Loading'
import { WEB_ACTIONS } from '../constant'

export default {
  name: 'Automations',

  components: {
    Automation,
    Loading
  },

  data() {
    return {
      loading: true,
      list: []
    }
  },

  methods: {
    init() {
      this.bindEvents();
    },

    onInstallOk(data) {
      installOk(data.id).then(result => {
        this.updateInstallations(data.id, result.attributes)
        console.log("onInstallOk -> result", result)
      })
    },

    bindEvents() {
      document.addEventListener('stewardHelper', (event) => {
        const { action, data } = event.detail

        switch (action) {
          case WEB_ACTIONS.INSTALL_DONE:
            this.onInstallOk(data);
            break;
          default:
            break;
        }
      })
    },

    updateInstallations(id, attributes = {}) {
      const item = this.list.find(item => item.id === id)
      if (item) {
        item.attributes.installations = attributes.installations || 0
      }
    },
    
    loadData() {
      automationService.list().then(results => {
        this.loading = false
        this.list = results
      })
    }
  },

  mounted() {
    this.init()
    this.loadData()
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/scss/theme.scss";

.container {
  padding-top: 30px;
  margin: 0 auto;
  width: 960px;
}

.automations {
  background: #fff;
}
</style>