<template>
  <div class="task-container">
    <template v-if="tasks[0]">
      <template v-for="task in tasks">
        <div :key="task.id" class="task">
          <p>{{task.title}}</p>
          <p>{{task.content}}</p>
        </div>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Task from "../../types/Task";

export default Vue.extend({
  computed: {
    tasks(): Task[] {
      console.log(this.$store);
      return this.$store.getters.allTasks;
    }
  }
});
</script>

<style lang="scss">
.task-container {
  background: #445566;
  height: calc(100vh - 85px);
}
</style>


