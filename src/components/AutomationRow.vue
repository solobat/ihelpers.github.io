<template>
  <div class="automation-row">
    <div class="am-main">
      <div class="am-name">
        <router-link :to="`/automation/${automation.objectId}`">
          {{ automation.name }}
        </router-link>
      </div>
      <div class="am-intro">{{ automation.pattern }}</div>
    </div>
    <div class="am-right">
      <div class="am-btns">
        <div class="am-ins">
          <a-popconfirm
            :title="$t('confirm.install', { name: automation.name})"
            @confirm="installAutomation(automation)"
          >
            <my-icon type="icon-anzhuang" />
          </a-popconfirm>
          
          <span class="count" v-if="automation.installations">
            {{ automation.installations.count }}
          </span>
        </div>
        <div class="am-edit" v-if="editable">
          <router-link class="am-edit" :to="`/automation/update/${id}`">
            <a-icon style="margin-left: 10px;" type="edit" theme="filled" v-if="editable" />
            Edit
          </router-link>
        </div>
      </div>
      <div class="am-created">
        <div class="author">by
          <router-link :to="`/user/${automation.author.objectId}`">
            {{ automation.author.username }}
          </router-link>
        </div>
        <div class="time">{{ automation.createdAt | timeago }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { MyIcon } from '../helpers/icon.helper'
import { timeago } from '../filter/time'
import InstallMixin from '../mixins/install.mixin'
import { mapGetters } from 'vuex';

export default {
  props: ['automation', 'id'],
  name: 'AutomationRow',

  filters: {
    timeago
  },

  mixins: [InstallMixin],

  components: {
    MyIcon
  },

  computed: {
    ...mapGetters('account', ['loggedIn', 'user', 'uid']),
    editable() {
      return this.uid === this.automation.author.objectId
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/scss/theme.scss";

.automation-row {
  display: flex;
  padding: 8px 12px;
  border-bottom: 1px solid #ededed;

  &:last-child {
    border-bottom: 0;
  }
}

.am-main {
  flex: 1;
}

.am-name {
  font-size: 16px;
  color: $color-deep;
}

.am-intro {
  margin-top: 8px;
  font-size: 14px;
  color: $color-light;
}

.am-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.am-btns {
  display: flex;
}

.am-created {
  display: flex;
}

.count {
  margin-left: 5px;
}

.time {
  margin-left: 10px;
}

.anticon {
  cursor: pointer;
}

</style>