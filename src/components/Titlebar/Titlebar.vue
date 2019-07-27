<template>
  <div class="titlebar">
    <h1 class="title">Task-ify</h1>
    <p class="subtitle">by Doug Flynn</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss">
@import "../../styles/_theme.scss";
.titlebar {
  background: $background-secondary;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  height: 85px;
  .title {
    color: $text-main;
    font-size: 35pt;
  }
  .subtitle {
    color: $text-main;
    text-align: right;
    margin-top: auto;
  }
}
</style>


