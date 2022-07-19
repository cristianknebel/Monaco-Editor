<notifications />

<template>
  <div id="nav" v-if="$store.state.user">
    <div id="nav-left">
      <ul>
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/about"><li>About</li></router-link>
        <router-link to="/editor"><li>Editor</li></router-link>
      </ul>
    </div>
    <div id="nav-right">
      <ul>
        <li @click="$store.dispatch('logout')">Logout</li>
      </ul>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>
<style>
@import "./MainCSS.css";
</style>