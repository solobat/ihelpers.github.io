<template>
  <div class="page-automation">
    <div class="container">
      <div class="am-wrap" v-if="automation">
        <div class="am-head">
          <div class="am-name">{{automation.name}}</div>
          <div class="am-data">
            <div class="am-btns">
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
              <router-link class="am-edit" :to="`/automation/update/${id}`">
                <a-icon style="margin-left: 10px;" type="edit" theme="filled" v-if="editable" />
                Edit
              </router-link>
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
          <div id="gitalk-container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { automationService } from "../services/automation.service";
import { getUser } from '../services/user.service'
import { MyIcon } from "../helpers/icon.helper";
import InstallMixin from "../mixins/install.mixin";
import InstallokMixin from '../mixins/installok.mixin'
import { parseMarkdown } from '../helpers/marked.helper'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

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
      introHtml: '',
      editable: false,
    };
  },

  methods: {
    isAuthor(author) {
      const user = getUser()

      if (user && user.id === author.objectId) {
        return true
      } else {
        return false
      }
    },

    loadData() {
      automationService.item(this.id).then(automation => {
        this.automation = automation.toJSON();
        this.editable = this.isAuthor(this.automation.author)

        if (this.automation && this.automation.intro) {
          this.introHtml = parseMarkdown(this.automation.intro)
        }
        this.$nextTick(() => {
          this.initGitalk();
        })
      });
    },

    getAutomation() {
      return this.automation
    },

    initGitalk() {
      const gitalk = new Gitalk({
        clientID: '0ea5391841ae4237d88c',
        clientSecret: 'e3bbe39fcf94c97b5a5e023cafc06bc23ddc43b0',
        repo: 'Steward-Helper-Comments',
        owner: 'solobat',
        admin: ['solobat'],
        id: this.$route.path,      // Ensure uniqueness and length less than 50
        distractionFreeMode: false
      })

      gitalk.render('gitalk-container')
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

.am-btns {
  display: flex;
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