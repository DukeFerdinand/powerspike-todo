<template>
  <div class="task-header">
    <h2 class="title">
      <slot name="title" />
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class TaskHeader extends Vue {}
</script>

<style lang="scss">
@import "../../styles/_theme.scss";
.task-header {
  background-color: $background-secondary;
  .title {
    color: $text-main;
    font-size: 18pt;
    padding: $padding-task;
  }
}
</style>
