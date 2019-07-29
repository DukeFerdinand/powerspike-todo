<template>
  <div class="container">
    <titlebar />
    <task-container />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import { retrieveTasks } from "./utils/API";
import Titlebar from "./components/Titlebar/Titlebar.vue";
import TaskContainer from "./components/TaskContainer/TaskContainer.vue";

@Component({
  components: {
    Titlebar,
    TaskContainer
  }
})
export default class App extends Vue {
  async created() {
    const res = await retrieveTasks();
    this.$store.dispatch("populateTasks", res.data.tasks);
  }

  async testAPI() {
    console.log(this.$store.getters);
  }
}
</script>
<style lang="scss">
@import "./styles/_reset.scss";
@import "./styles/_theme.scss";
.container {
  height: 100vh;
  width: 100vw;
  background: #444;

  font-family: $app-font;

  @media (min-width: $medium) {
    padding: 15px;
  }
}
</style>


