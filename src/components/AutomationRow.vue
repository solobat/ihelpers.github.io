<template>
  <div class="automation-row">
    <div class="am-main">
      <div class="am-name">{{ automation.attributes.name }}</div>
      <div class="am-intro">{{ automation.attributes.intro }}</div>
    </div>
    <div class="am-right">
      <div class="am-ins">
        <a-popconfirm
          :title="`确定要安装 「${automation.attributes.name}」?`"
          @confirm="installAutomation(automation)"
        >
          <a-icon type="vertical-align-bottom" />
        </a-popconfirm>
        
        <span class="count">{{ automation.attributes.installations }}</span>
      </div>
      <div class="am-created">
        <div class="author">by
          <a :href="`https://github.com/${automation.attributes.author}`"
            target="_blank">{{ automation.attributes.author }}</a>
        </div>
        <div class="time">{{ automation.createdAt | timeago }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { timeago } from '../filter/time'

export default {
  props: ['automation'],
  name: 'AutomationRow',

  filters: {
    timeago
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
    },

    onInstallClick(automation) {
      this.$confirm({
        title: `确定要安装「${automation.attributes.name}」到 Steward Helper 吗?`,
        onOk() {
          this.installAutomation(automation);
        },
        onCancel() {},
      });
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