<template>
  <div class="new-task-form">
    <input
      class="task-title"
      type="text"
      v-model="title"
      placeholder="Title"
      @input="$emit('input', $event.target.value)"
    />
    <textarea
      class="task-content"
      v-model="content"
      placeholder="Content (optional)"
      @input="$emit('input', $event.target.value)"
    />
    <button class="submit-button" :disabled="buttonDisabled" @click="submitTask()">Add</button>
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
    if (this.title) return false;
    return true;
  }

  submitTask(): void {
    if (this.title) {
      this.$store.dispatch("createTask", {
        title: this.title,
        content: this.content
      });
      this.title = "";
      this.content = "";
    }
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
  display: flex;
  flex-direction: column;

  padding: 10px;
  .task-title {
    @extend %app-text;

    border: none;
    padding: 5px;
    width: 85%;
    font-size: 15pt;
    margin-bottom: 15px;
  }
  .task-content {
    @extend .task-title;

    font-size: 12pt;
  }

  .submit-button {
    @extend %app-text;
    border: none;
    background: $bg-success;
    color: #efefef;
    width: 55px;
    padding: 5px;
  }
}
</style>


