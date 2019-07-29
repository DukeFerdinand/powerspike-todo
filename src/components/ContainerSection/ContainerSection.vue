<template>
  <div class="container-section">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class ContainerSection extends Vue {}
</script>

<style lang="scss">
@import "../../styles/_theme.scss";
.container-section {
  width: 100%;

  @media (min-width: $medium) {
    max-width: 350px;
  }
}
</style>


