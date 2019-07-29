<template>
  <div class="task">
    <task-header :showDelete="showDelete" :id="task.id">
      <template v-slot:title>{{task.title}}</template>
    </task-header>
    <task-body>{{task.content}}</task-body>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import TaskHeader from "../TaskHeader/TaskHeader.vue";
import TaskBody from "../TaskBody/TaskBody.vue";

import { Task as TaskType } from "../../types/Task";

@Component({
  components: {
    TaskHeader,
    TaskBody
  }
})
export default class Task extends Vue {
  @Prop() task!: TaskType;
  @Prop({ default: true }) showBody!: boolean;
  @Prop({ default: true }) showDelete!: boolean;
  @Prop({ default: true }) deletable!: boolean;

  deleteTask() {
    this.$store.dispatch("deleteTask", this.task.id);
  }
}
</script>

<style lang="scss">
.task {
  padding-bottom: 10px;
}
</style>


