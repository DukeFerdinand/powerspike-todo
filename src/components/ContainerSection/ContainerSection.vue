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
  margin-bottom: 20px;

  @media (min-width: $medium) {
    max-width: 350px;
  }
  @media (min-width: $large) {
    max-width: 500px;
  }
}
</style>


