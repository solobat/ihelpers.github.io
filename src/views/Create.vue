<template>
  <div class="page-create">
    <div class="container">
      <div class="form-panel">
        <a-form-model :model="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 10 }"
          @submit="handleSubmit" ref="form" :rules="rules">
          <a-form-model-item label="Name" prop="name">
            <a-input v-model="form.name" :placeholder="$t('enter.automation.name')">
            </a-input>
          </a-form-model-item>
          <a-form-model-item label="Action" prop="type">
            <a-select :dropdownMatchSelectWidth="false"
              :placeholder="$t('choose.automation.action')"
              @change="onActionChange"
              v-model="form.type">
              <a-select-option v-for="item in options.actions" :key="item.value" :value="item.value">
                {{ item.label }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <template v-if="args.length">
            <a-form-model-item :label="arg.name" v-for="arg in args" :key="arg.name">
              <a-tooltip>
                <template slot="title">
                  {{ arg.tips }}
                </template>
                <a-input v-model="arg.value" :placeholder="arg.placeholder" v-if="arg.type === 'string'"/>
                <a-switch v-model="arg.value" v-if="arg.type === 'boolean'" />
              </a-tooltip>
            </a-form-model-item>
          </template>
          <a-form-model-item label="Target" prop="target">
            <a-input v-model="form.target"
              :placeholder="$t('enter.automation.target.selector')">
              <div slot="addonBefore">@</div>
            </a-input>
          </a-form-model-item>
          <a-form-model-item label="Instructions" :wrapper-col="{ span: 18 }">
            <code class="code">{{instructions}}</code>
          </a-form-model-item>
          <a-form-model-item label="Pattern" prop="pattern">
            <a-input v-model="form.pattern" :placeholder="$t('enter.automation.url.pattern')">
            </a-input>
          </a-form-model-item>
          <a-form-model-item label="Video" prop="video">
            <a-textarea v-model="form.video"
              :placeholder="$t('enter.automation.video')" :autoSize="{minRows: 2}">
            </a-textarea>
          </a-form-model-item>
          <a-form-model-item label="Intro" prop="intro" :wrapper-col="{ span: 18 }">
            <a-icon type="read" :class="{'is-active': inpreview}" @click="onPreviewClick"/>
            <a-textarea v-model="form.intro" v-show="!inpreview"
              :placeholder="$t('enter.automation.intro')" :autoSize="{minRows: 2}">
            </a-textarea>
            <div class="intro-preview" v-if="inpreview" v-html="introPreview"></div>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 10, offset: 5 }">
            <a-button type="primary" html-type="submit"
              :disabled="submitting">{{$t("create")}}</a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
import { BUILDIN_ACTION_CONFIGS } from '../constant'
import { getActionConfigs, getDefaultForm, getFormRules } from './config/create.config'
import { addOne } from '../services/automation.service'
import { parseMarkdown } from '../helpers/marked.helper'

export default {
  name: 'AutomationCreate',

  data() {
    return {
      options: {
        actions: BUILDIN_ACTION_CONFIGS
      },
      actionConfigs: getActionConfigs(),
      form: getDefaultForm(),
      rules: getFormRules(this),
      args: [],
      inpreview: false,
      submitting: false,
      introPreview: ''
    }
  },

  computed: {
    instructions() {
      const action = this.getFullAction()
      const target = this.form.target

      return [action, '@', target].join('')
    },
  },

  methods: {
    getFullAction() {
      const action = this.form.type
      const args = this.args

      if (this.args.length) {
        const argPairs = args.filter(arg => arg.value !== arg.defaultValue).map(arg => [arg.name, arg.value].join('!'))

        return [action, ...argPairs].join('^')
      } else {
        return action
      }
    },

    reset() {
      this.form = getDefaultForm()
      this.actionConfigs = getActionConfigs()
      this.args = []
    },

    submit() {
      const params = Object.assign({}, this.form)
      delete params.target
      const formData = {
        ...params,
        instructions: this.instructions
      }
      this.submitting = true

      addOne(formData).then(() => {
        this.submitting = false
        this.$message.success(this.$t('create.ok'))
        this.reset()
      }).catch((msg = 'Something error') => {
        console.log("submit -> msg", msg)
        this.$message.error(this.$t('create.error'))
      })
    },

    handleSubmit(e) {
      e.preventDefault();
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.submit()
        }
      });
    },

    updateArgs(type) {
      const config = this.actionConfigs.find(item => item.value === type);

      if (config) {
        this.args = config.args || []
      } else {
        this.args = []
      }
    },

    onActionChange(type) {
      this.updateArgs(type);
    },

    onPreviewClick() {
      this.inpreview = !this.inpreview
      if (this.inpreview) {
        this.introPreview = parseMarkdown(this.form.intro)
      }
    }
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

.form-panel {
  padding: 40px;
  background: #fff;
  border: 1px solid #ededed;
}

.code {
  line-height: 1.2;
}

.intro-preview {
  padding: 10px 25px;
  background: rgba(27,31,35,.05);
  line-height: 1.45!important;
}

.anticon {
  &.is-active {
    color: $color-primary;
  }
}
</style>