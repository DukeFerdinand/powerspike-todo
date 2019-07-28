<template>
  <div class="task-body">
    <p class="task-content">
      <slot />
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Task } from "../../types/Task";

@Component
export default class TaskBody extends Vue {}
</script>

<style lang="scss">
@import "../../styles/_theme.scss";
.task-body {
  background: $background-secondary;
  padding: $padding-task;
  padding-bottom: 20px;
}
</style>

