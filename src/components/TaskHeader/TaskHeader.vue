<template>
  <div class="task-header">
    <h2 class="title">
      <slot name="title" />
    </h2>
    <template v-if="showDelete">
      <button class="close-button" @click="deleteTask()">Delete</button>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class TaskHeader extends Vue {
  @Prop() id!: string;
  @Prop({ default: true }) showDelete!: boolean;

  deleteTask(): void {
    this.$store.dispatch("deleteTask", this.id);
  }
}
</script>

<style lang="scss">
@import "../../styles/_theme.scss";
.task-header {
  background-color: $background-secondary;
  display: flex;
  justify-content: space-between;

  padding: $padding-task;
  .title {
    color: $text-main;
    font-size: 18pt;
  }
  .close-button {
    background: #aa3333;
    border: none;
    color: #efefef;
  }
}
</style>
