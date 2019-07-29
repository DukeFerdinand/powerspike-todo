<template>
  <div class="container-section" :class="{ 'scrollable': isScrollable }">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class ContainerSection extends Vue {
  @Prop({ default: false }) isScrollable!: boolean;
}
</script>

<style lang="scss">
@import "../../styles/_theme.scss";
.container-section {
  width: 100%;
  margin-bottom: 20px;

  &.scrollable {
    overflow-y: scroll;
  }

  @media (min-width: $medium) {
    max-width: 350px;
    height: 100%;
  }
  @media (min-width: $large) {
    max-width: 500px;
  }
}
</style>


