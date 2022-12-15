<template>
  <div style="border: 1px solid #ccc;padding: 3px;margin-bottom: 5px;">
    <a-form-model
      layout="inline"
      :model="form"
      @submit="handleSubmit"
      ref="form"
      :rules="rules"
    >
      <a-form-model-item prop="action">
        <a-select
          :dropdownMatchSelectWidth="false"
          :placeholder="$t('choose.automation.action')"
          @change="onActionChange"
          v-model="form.action"
        >
          <a-select-option
            v-for="item in options.actions"
            :key="item.value"
            :value="item.value"
          >
            {{ $t(item.label) }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <div style="border: 1px dashed #cccc" v-if="args.length">
        <a-form-model-item
          :label="arg.name"
          v-for="arg in args"
          :key="arg.name"
        >
          <a-tooltip>
            <template slot="title">
              {{ arg.tips }}
            </template>
            <a-input
              v-model="arg.value"
              :placeholder="arg.placeholder"
              v-if="arg.type === 'string'"
            />
            <a-switch v-model="arg.value" v-if="arg.type === 'boolean'" />
          </a-tooltip>
        </a-form-model-item>
      </div>
      <a-form-model-item prop="target">
        <a-input
          v-model="form.target"
          :placeholder="$t('enter.automation.target.selector')"
        >
          <div slot="addonBefore">@</div>
        </a-input>
      </a-form-model-item>
    </a-form-model>
    <div style="text-align: right;">
      <a-icon type="plus-square" style="font-size: 20px;" @click="onAddClick" />
      <a-icon
        type="minus-square"
        style="font-size: 20px;margin-left: 5px;"
        @click="onDeleteClick"
      />
    </div>
  </div>
</template>
<script>
import { BUILDIN_ACTION_CONFIGS, RUN_AT_OPTIONS } from "../constant";

function getActionConfigs() {
  return JSON.parse(JSON.stringify(BUILDIN_ACTION_CONFIGS));
}

export default {
  name: "ActionEditor",

  props: {
    instruction: String,
    index: Number,
  },

  data() {
    const data = this.parseInstructions(this.instruction);
    const actionConfigs = getActionConfigs();
    this.updateArgs(data.action, actionConfigs);
    this.setArgs(data.args);

    return {
      options: {
        actions: BUILDIN_ACTION_CONFIGS,
        runAt: RUN_AT_OPTIONS,
      },
      actionConfigs,
      form: {
        action: "",
        target: "body",
      },
      args: [],
      rules: {},
    };
  },

  computed: {
    str() {
      const action = this.getFullAction();

      return `${action}@${this.form.target}`;
    },
  },

  watch: {
    instruction() {
      const data = this.parseInstructions(this.instruction);
      const actionConfigs = getActionConfigs();

      this.updateArgs(data.action, actionConfigs);
      this.setArgs(data.args);
      this.form = data;
    },
    str() {
      if (this.str !== this.instruction) {
        this.$emit("change", this.str, this.index);
      }
    }
  },

  methods: {
    getFullAction() {
      const action = this.form.action;
      const args = this.args;

      if (this.args.length) {
        const argPairs = args
          .filter((arg) => arg.value !== arg.defaultValue)
          .map((arg) => [arg.name, arg.value].join("!"));

        return [action, ...argPairs].join("^");
      } else {
        return action;
      }
    },
    onActionChange(type) {
      this.updateArgs(type, getActionConfigs());
    },
    handleSubmit() {},
    parseInstructions(str) {
      const [actionStr, target] = str.split("@");
      const [action, ...modifiers] = actionStr.split("^");

      return {
        action,
        args: this.getExecOptions(modifiers),
        target,
      };
    },
    setArgs(argsObj) {
      this.args.forEach((arg) => {
        if (Object.prototype.hasOwnProperty.call(argsObj, arg.name)) {
          arg.value = argsObj[arg.name];
        }
      });
    },
    updateArgs(type, actionConfigs) {
      const config = actionConfigs.find((item) => item.value === type);

      if (config) {
        this.args = config.args || [];
      } else {
        this.args = [];
      }
    },
    getExecOptions(modifiers = []) {
      const options = {};

      modifiers.forEach((item) => {
        const [key, ...value] = item.split("!");
        if (value.length) {
          if (value.length === 1) {
            if (value === "true" || value === "false") {
              options[key] = value === "true" ? true : false;
            } else {
              options[key] = value[0];
            }
          } else {
            options[key] = value;
          }
        } else {
          options[key] = true;
        }
      });

      return options;
    },

    onAddClick() {
      this.$emit("add", this.index);
    },
    onDeleteClick() {
      this.$emit("delete", this.index);
    },
  },
};
</script>
