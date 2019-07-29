<template>
  <div class="task-container">
    <!-- Add task column -->
    <container-section>
      <container-header title="Add a task" />
      <new-task-form />
    </container-section>

    <!-- Center task column -->
    <container-section>
      <container-header title="Tasks" />
      <template v-if="tasks[0]">
        <template v-for="task in tasks">
          <!-- Actual tasks being rendered -->
          <task :key="task.id" :task="task" />
        </template>
      </template>
      <template v-else>
        <task :task="defaultTask" :show-body="false" :showDelete="false" />
      </template>
    </container-section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import ContainerHeader from "../ContainerHeader/ContainerHeader.vue";
import ContainerSection from "../ContainerSection/ContainerSection.vue";
import NewTaskForm from "../NewTaskForm/NewTaskForm.vue";
import Task from "../Task/Task.vue";

import { Task as TaskType } from "../../types/Task";

@Component({
  components: {
    ContainerHeader,
    ContainerSection,
    Task,
    NewTaskForm
  }
})
export default class TaskContainer extends Vue {
  defaultTask: TaskType = {
    id: "none",
    title: "Please add a task",
    content: "",
    created: 0
  };
  get tasks(): TaskType[] {
    return this.$store.getters.allTasks;
  }
}
</script>

<style lang="scss">
.task-container {
  background: #445566;
  padding: 20px 10px;
  height: calc(100vh - 85px);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  overflow-y: scroll;
}
</style>


