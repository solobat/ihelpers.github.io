<template>
  <div class="page-automations">
    <div class="container">
      <div class="top-tools">
        <a-input-search placeholder="Search automations" enter-button
          size="large" @search="onSearch" v-model="filter.searchText">
          <a-select size="large" default-value="" style="width: 120px;"
            :dropdownMatchSelectWidth="false" @change="onActionChange"
            slot="addonBefore" v-model="filter.action">
            <a-select-option v-for="item in options.actions" :key="item.value" :value="item.value">
              {{ item.label }}
            </a-select-option>
          </a-select>
        </a-input-search>
        <a-button type="primary" size="large" class="btn-add" @click="onAddClick">
          <a-icon type="plus"/>
        </a-button>
      </div>
      <loading :visible="loading"/>
      <div class="automations" v-if="list.length">
        <automation v-for="item in list" :key="item.objectId" :automation="item" :id="item.objectId" />
      </div>
      <a-empty v-if="!loading && !list.length"/>
    </div>
  </div>
</template>

<script>
import { automationService } from '../services/automation.service'
import Automation from '../components/AutomationRow'
import Loading from '../components/Loading'
import InstallokMixin from '../mixins/installok.mixin'
import { BUILDIN_ACTION_OPTIONS } from '../constant'

export default {
  name: 'Automations',

  components: {
    Automation,
    Loading
  },

  mixins: [InstallokMixin],

  data() {
    return {
      loading: true,
      list: [],
      filter: {
        action: '',
        searchText: ''
      },
      options: {
        actions: BUILDIN_ACTION_OPTIONS
      }
    }
  },

  methods: {
    getAutomation(aid) {
      return this.list.find(item => item.objectId === aid)
    },

    loadData() {
      const { action, searchText } = this.filter

      this.loading = true
      automationService.list(action, searchText.trim()).then(results => {
        this.loading = false
        this.list = results.map(item => item.toJSON())
      })
    },

    onSearch() {
      this.loadData()
    },

    onAddClick() {
      this.$router.push({ name: 'AutomationCreate' });
    },

    onActionChange() {
      this.loadData()
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
  padding-top: 30px;
  margin: 0 auto;
  width: 960px;
}

.top-tools {
  margin-bottom: 20px;
  display: flex;
}

.automations {
  background: #fff;
  margin-bottom: 20px;
}

.btn-add {
  margin-left: 100px;
}
</style>