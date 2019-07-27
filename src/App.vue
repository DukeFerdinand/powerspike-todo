<template>
  <div class="container">
    <titlebar />
    <task-container />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { retrieveTasks } from "./utils/API";

import Titlebar from "./components/Titlebar/Titlebar.vue";
import TaskContainer from "./components/TaskContainer/TaskContainer.vue";

export default Vue.extend({
  async created() {
    const res = await retrieveTasks();
    this.$store.dispatch("populateTasks", res.data.tasks);
  },
  methods: {
    async testAPI() {
      console.log(this.$store.getters);
    }
  },
  components: {
    Titlebar,
    TaskContainer
  }
});
</script>
<style lang="scss">
@import "./styles/_reset.scss";
.container {
  height: 100vh;
  width: 100vw;
}
</style>


