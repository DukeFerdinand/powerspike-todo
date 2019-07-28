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

