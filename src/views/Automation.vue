<template>
  <div class="page-automation">
    <div class="container">
      <div class="am-wrap" v-if="automation">
        <div class="am-head">
          <div class="am-name">{{automation.name}}</div>
          <div class="am-data">
            <div class="am-ins">
              <a-popconfirm
                :title="$t('confirm.install', { name: automation.name})"
                @confirm="installAutomation(automation)"
              >
                <my-icon type="icon-anzhuang" />
              </a-popconfirm>

              <span
                class="count"
                v-if="automation.installations"
              >{{ automation.installations.count }}</span>
            </div>
            <div class="author">
              by
              <router-link
                :to="`/user/${automation.author.objectId}`"
              >{{ automation.author.username }}</router-link>
            </div>
          </div>
        </div>
        <div class="am-main">
          <ul class="am-fields">
            <li class="am-field">
              <span class="label">Instructions:</span>
              <code>{{ automation.instructions }}</code>
            </li>
            <li class="am-field">
              <span class="label">Pattern:</span>
              <code>{{ automation.pattern }} </code>
            </li>
            <li class="am-field">
              <span class="label">Install:</span>
              <a-popconfirm
                :title="$t('confirm.install', { name: automation.name})"
                @confirm="installAutomation(automation)"
              >
                <span class="btn-install">{{$t("click.install")}}</span>
              </a-popconfirm>
            </li>
          </ul>
          <div class="am-video" v-if="automation.video">
            <h3>{{$t("Video")}}</h3>
            <div v-html="automation.video" class="video-wrap"></div>
          </div>
          <div class="am-intro">
            <h3>{{$t("Intro")}}</h3>
            <div class="intro-view" v-if="introHtml" v-html="introHtml"></div>
            <a-empty :description="$t('No.Intro')" v-else/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { automationService } from "../services/automation.service";
import { MyIcon } from "../helpers/icon.helper";
import InstallMixin from "../mixins/install.mixin";
import InstallokMixin from '../mixins/installok.mixin'
import { parseMarkdown } from '../helpers/marked.helper'

export default {
  name: "Automation",

  components: {
    MyIcon
  },

  mixins: [InstallMixin, InstallokMixin],

  data() {
    return {
      id: this.$route.params.id,
      automation: null,
      introHtml: ''
    };
  },

  methods: {
    loadData() {
      automationService.item(this.id).then(automation => {
        this.automation = automation.toJSON();

        if (this.automation && this.automation.intro) {
          this.introHtml = parseMarkdown(this.automation.intro)
        }
      });
    },

    getAutomation() {
      return this.automation
    }
  },

  mounted() {
    this.loadData();
  }
};
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

.am-name {
  font-size: 20px;
  font-weight: 500;
}

.am-data {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  font-size: 14px;
}

.anticon {
  cursor: pointer;
}

.am-head {
  padding-bottom: 5px;
  border-bottom: 1px solid #ededed;
}

.am-fields {
  margin-top: 10px;
  list-style: none;
}

.count {
  margin-left: 5px;
}

.label {
  display: inline-block;
  margin-top: 10px;
  margin-right: 10px;
  font-size: 16px;
  color: $color-deep;
}

.am-intro {
  margin-top: 20px;
}

.intro-view {
  padding: 10px 25px;
  background: rgba(27,31,35,.05);
  line-height: 1.45!important;
}

code {
  background: rgba(27,31,35,.05);
  border-radius: 3px;
  padding: 3px 5px;
}

.am-video {
  margin-top: 20px;
}

.btn-install {
  color: $color-primary;
  cursor: pointer;
}
</style>
<style lang="scss">
.am-video {
  iframe {
    width: 600px;
    height: 337px;
  }
}
</style>