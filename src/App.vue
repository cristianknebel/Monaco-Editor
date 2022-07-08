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
  <div id="nav">
    <div id="nav-left">
      <ul>
        <li @click="save">Save</li>
        <li @click="copy">Copy</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
function save() {
  console.log("Text saved.");
}
function copy() {
  console.log("Coppied.");
}
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorSelection } from "@codemirror/state";

export default {
  components: {
    Codemirror,
  },
  setup() {
    const code = `console.log('Hello, world!')`;
    const extensions = [javascript(), oneDark];
    return {
      code,
      extensions,
      log: console.log,
      save,
      copy,
    };
  },
};
</script>
<style>
#nav {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  background-color: #1c1c1c;
}
#nav-left {
  text-align: left;
}
#nav li {
  color: #dadada;
  text-decoration: none;
  display: inline-block;
  list-style: none;
  height: 60px;
  line-height: 60px;
  padding: 0 25px;
}
#nav li:hover {
  background: #262626;
  transition: background 0.3s;
}
</style>
