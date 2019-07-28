<template>
  <div class="container-header">
    <h2 class="title">{{title}}</h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class ContainerHeader extends Vue {
  @Prop() title!: string;
}
</script>

<style lang="scss">
@import "../../styles/_theme.scss";
.container-header {
  background-color: $background-secondary;
  margin-bottom: 20px;
  .title {
    color: $text-main;
    font-size: 25pt;
    padding: 5px;
  }
}
</style>


