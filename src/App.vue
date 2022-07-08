<template>
  <codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '400px' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="log('ready', $event)"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
  />
</template>

<script>
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

export default {
  components: {
    Codemirror,
  },
  setup() {
    // eslint-disable-next-line no-undef
    const code = ref(`console.log('Hello, world!')`);
    const extensions = [javascript(), oneDark];

    return {
      code,
      extensions,
      log: console.log,
    };
  },
};
import { EditorState } from "@codemirror/state";
import { createApp } from "vue";
import { basicSetup } from "codemirror";
import VueCodemirror from "vue-codemirror";

const app = createApp();

app.use(VueCodemirror, {
  // optional default global options
  autofocus: true,
  disabled: false,
  indentWithTab: true,
  tabSize: 2,
  placeholder: "Code goes here...",
  extensions: [basicSetup],
  // ...
});
</script>
