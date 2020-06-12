<template>
  <div class="automation-row">
    <div class="am-main">
      <div class="am-name">{{ automation.attributes.name }}</div>
      <div class="am-intro">{{ automation.attributes.pattern }}</div>
    </div>
    <div class="am-right">
      <div class="am-ins">
        <a-popconfirm
          :title="$t('confirm.install', { name: automation.attributes.name})"
          @confirm="installAutomation(automation)"
        >
          <my-icon type="icon-anzhuang" />
        </a-popconfirm>
        
        <span class="count">{{ automation.attributes.installations.attributes.count }}</span>
      </div>
      <div class="am-created">
        <div class="author">by
          <router-link :to="`/user/${automation.attributes.author.id}`">
            {{ automation.attributes.author.attributes.username }}
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

export default {
  props: ['automation'],
  name: 'AutomationRow',

  filters: {
    timeago
  },

  components: {
    MyIcon
  },

  methods: {
    installAutomation(automation) {
      const attrs = {
        ...automation.attributes,
        id: automation.id
      }
      const event = new CustomEvent('ihelpers', {
        detail: {
          action: 'installAutomation',
          data: attrs
        }
      });

      document.dispatchEvent(event);
    }
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