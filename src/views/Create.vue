<template>
  <div class="page-create">
    <div class="container">
      <div class="form-panel">
        <a-form-model :model="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 10 }"
          @submit="handleSubmit" ref="form" :rules="rules">
          <a-form-model-item label="Name" prop="name">
            <a-input v-model="form.name" placeholder="Please enter the name of automation">
            </a-input>
          </a-form-model-item>
          <a-form-model-item label="Action" prop="type">
            <a-select :dropdownMatchSelectWidth="false"
              placeholder="Please choose an action!"
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
              placeholder="Please enter the selector of target elements">
              <div slot="addonBefore">@</div>
            </a-input>
          </a-form-model-item>
          <a-form-model-item label="Instructions" :wrapper-col="{ span: 18 }">
            <code class="code">{{instructions}}</code>
          </a-form-model-item>
          <a-form-model-item label="Pattern" prop="pattern">
            <a-input v-model="form.pattern" placeholder="Please enter the URL pattern">
            </a-input>
          </a-form-model-item>
          <a-form-model-item label="Intro" prop="intro">
            <a-textarea v-model="form.intro"
              placeholder="Please enter the intro of automation" :autoSize="{minRows: 2}">
            </a-textarea>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 10, offset: 5 }">
            <a-button type="primary" html-type="submit"
              :disabled="submitting">Create</a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
import { BUILDIN_ACTION_CONFIGS } from '../constant'
import { getActionConfigs, getDefaultForm } from './config/create.config'
import { addOne } from '../services/automation.service'

export default {
  name: 'AutomationCreate',

  data() {
    return {
      options: {
        actions: BUILDIN_ACTION_CONFIGS
      },
      actionConfigs: getActionConfigs(),
      form: getDefaultForm(),
      rules: {
        name: [{ required: true, message: 'Please enter the name of automation' }],
        type: [{ required: true, message: 'Please choose an action!' }],
        target: [{ required: true, message: 'Please enter the selector of target elements' }],
        pattern: [{ required: true, message: 'Please enter the URL pattern' }],
      },
      args: [],
      submitting: false
    }
  },

  computed: {
    instructions() {
      const action = this.getFullAction()
      const target = this.form.target

      return [action, '@', target].join('')
    }
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
        this.$message.success('Create successfully!')
        this.reset()
      }).catch((msg = 'Something error') => {
        this.$message.error(msg)
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
</style>