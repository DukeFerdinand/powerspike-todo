<template>
  <div class="container-header" :class="{'add-task-header': isAddTask}">
    <h2 class="title">{{title}}</h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class ContainerHeader extends Vue {
  @Prop() title!: string;
  @Prop({ default: false }) isAddTask!: boolean;
}
</script>

<style lang="scss">
@import "../../styles/_theme.scss";
.container-header {
  background-color: $background-secondary;
  margin-bottom: 20px;

  &.add-task-header {
    background-color: #42886d;
    margin-bottom: 0;
  }

  .title {
    color: $text-main;
    font-size: 20pt;
    padding: 5px;

    @media (min-width: $medium) {
      padding: 10px;
      font-size: 25pt;
    }
  }
}
</style>


