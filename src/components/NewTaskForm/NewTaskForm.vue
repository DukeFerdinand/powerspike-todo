<template>
  <div class="new-task-form">
    <input type="text" v-model="title" @input="$emit('input', $event.target.value)" />
    <textarea v-model="content" @input="$emit('input', $event.target.value)" />
    <button :disabled="buttonDisabled" @click="submitTask()">Add</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Model } from "vue-property-decorator";

@Component
export default class NewTaskForm extends Vue {
  title: string = "";
  content: string = "";

  get buttonDisabled(): boolean {
    if (this.title && this.content) return false;
    return true;
  }

  submitTask(): void {
    console.log(this.title, this.content);
  }

  mounted() {
    console.log(this.title);
  }
}
</script>

<style lang="scss">
@import "../../styles/_theme.scss";
.new-task-form {
  background: $background-secondary;
}
</style>


