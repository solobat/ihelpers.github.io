<template>
  <div class="page-create">
    <div class="container">
      <div class="form-panel">
        <a-form-model
          :model="form"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 10 }"
          @submit="handleSubmit"
          ref="form"
          :rules="rules"
        >
          <a-form-model-item :label="$t('Name')" prop="name">
            <a-input
              v-model="form.name"
              :placeholder="$t('enter.automation.name')"
            >
            </a-input>
          </a-form-model-item>
          <a-form-model-item label="Instructions" :wrapper-col="{ span: 19 }">
            <action-editor
              v-for="(item, index) in instructions"
              :instruction="item"
              :index="index"
              :key="index"
              @change="onActionChange"
              @add="onAddAction"
              @delete="onDeleteAction"
            />
          </a-form-model-item>
          <a-form-model-item
            :label="$t('Instructions')"
            :wrapper-col="{ span: 18 }"
          >
            <code class="code">{{ instructions }}</code>
          </a-form-model-item>
          <a-form-model-item :label="$t('Pattern')" prop="pattern">
            <a-input
              v-model="form.pattern"
              :placeholder="$t('enter.automation.url.pattern')"
            >
            </a-input>
          </a-form-model-item>
          <a-form-model-item :label="$t('RunAt')" prop="runAt">
            <a-select
              :dropdownMatchSelectWidth="false"
              :placeholder="$t('choose.automation.runat')"
              v-model="form.runAt"
            >
              <a-select-option
                v-for="item in options.runAt"
                :key="item.value"
                :value="item.value"
              >
                {{ $t(item.label) }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item :label="$t('Video')" prop="video">
            <a-textarea
              v-model="form.video"
              :placeholder="$t('enter.automation.video')"
              :autoSize="{ minRows: 2 }"
            >
            </a-textarea>
          </a-form-model-item>
          <a-form-model-item
            :label="$t('Intro')"
            prop="intro"
            :wrapper-col="{ span: 18 }"
          >
            <a-icon
              type="read"
              :class="{ 'is-active': inpreview }"
              @click="onPreviewClick"
            />
            <a-textarea
              v-model="form.intro"
              v-show="!inpreview"
              :placeholder="$t('enter.automation.intro')"
              :autoSize="{ minRows: 2 }"
            >
            </a-textarea>
            <div
              class="intro-preview"
              v-if="inpreview"
              v-html="introPreview"
            ></div>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 10, offset: 5 }">
            <a-button
              type="primary"
              html-type="submit"
              :disabled="submitting"
              >{{ submitBtnText }}</a-button
            >
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
import { BUILDIN_ACTION_CONFIGS, RUN_AT_OPTIONS } from "../constant";
import {
  getActionConfigs,
  getDefaultForm,
  getFormRules,
} from "./config/create.config";
import { addOne, automationService } from "../services/automation.service";
import { getUser } from "../services/user.service";
import { parseMarkdown } from "../helpers/marked.helper";
import ActionEditor from "../components/ActionEditor.vue";

export default {
  name: "AutomationCreate",

  components: {
    ActionEditor,
  },

  data() {
    const id = this.$route.params.id;

    return {
      id,
      mode: id ? "update" : "create",
      options: {
        actions: BUILDIN_ACTION_CONFIGS,
        runAt: RUN_AT_OPTIONS,
      },
      actionConfigs: getActionConfigs(),
      form: getDefaultForm(),
      rules: getFormRules(this),
      inpreview: false,
      submitting: false,
      introPreview: "",
    };
  },

  computed: {
    instructions() {
      return this.form.instructions.split(";");
    },
    submitBtnText() {
      return this.mode === "create" ? this.$t("create") : this.$t("update");
    },
  },

  methods: {
    isAuthor(author) {
      const user = getUser();

      return user.id === author.objectId;
    },

    loadData() {
      automationService.item(this.id).then((resp) => {
        const automation = resp.toJSON();
        if (this.isAuthor(automation.author)) {
          this.handleData(automation);
        } else {
          this.$message.warn(this.$t("permission.denied"), () => {
            this.$router.replace("/");
          });
        }
      });
    },

    handleData(automation) {
      const {
        name,
        intro,
        pattern,
        type,
        video,
        instructions,
        runAt,
      } = automation;

      Object.assign(this.form, {
        name,
        intro,
        pattern,
        type,
        video,
        runAt,
        instructions,
      });
    },

    onActionChange(instruction, index) {
      const arr = [...this.instructions];

      arr.splice(index, 1, instruction);
      this.form.instructions = arr.join(";");
    },

    onAddAction(index) {
      const arr = [...this.instructions];

      arr.splice(index + 1, 0, "");
      this.form.instructions = arr.join(";");
    },

    onDeleteAction(index) {
      const arr = [...this.instructions];

      arr.splice(index, 1);
      this.form.instructions = arr.join(";");
    },

    loadFromQuery() {
      const {
        query: { instructions, pattern, runAt },
      } = this.$route;

      if (instructions && pattern && runAt) {
        Object.assign(this.form, {
          pattern,
          runAt: Number(runAt),
          instructions,
        });
      }
    },

    reset() {
      this.form = getDefaultForm();
      this.actionConfigs = getActionConfigs();
    },

    create(formData) {
      return addOne(formData)
        .then(() => {
          this.submitting = false;
          this.$message.success(this.$t("create.ok"));
          this.reset();
        })
        .catch(() => {
          this.$message.error(this.$t("create.error"));
        });
    },

    update(formData) {
      return automationService
        .updateOne(this.id, formData)
        .then(() => {
          this.submitting = false;
          this.$message.success(this.$t("update.ok"));
        })
        .catch(() => {
          this.$message.error(this.$t("update.error"));
        });
    },

    submit() {
      const params = Object.assign({}, this.form);
      delete params.target;
      const formData = {
        ...params,
        instructions: this.instructions,
      };
      this.submitting = true;

      if (this.mode === "create") {
        this.create(formData);
      } else {
        this.update(formData);
      }
    },

    handleSubmit(e) {
      e.preventDefault();
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.submit();
        }
      });
    },

    onPreviewClick() {
      this.inpreview = !this.inpreview;
      if (this.inpreview) {
        this.introPreview = parseMarkdown(this.form.intro);
      }
    },
  },

  mounted() {
    if (this.mode === "update") {
      this.loadData();
    } else {
      this.loadFromQuery();
    }
  },
};
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
  background: rgba(27, 31, 35, 0.05);
  line-height: 1.45 !important;
}

.anticon {
  &.is-active {
    color: $color-primary;
  }
}
</style>
<style lang="scss">
.intro-preview {
  img {
    max-width: 70%;
  }
}
</style>
