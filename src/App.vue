<template>
  <div class="container">
    hello, vue!
    <button @click="testAPI">Test API</button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { retrieveTasks } from "./utils/API";
export default Vue.extend({
  async created() {
    const res = await retrieveTasks();
    this.$store.dispatch("populateTasks", res.data.tasks);
  },
  methods: {
    async testAPI() {
      console.log(this.$store.getters);
    }
  }
});
</script>

