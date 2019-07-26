<template>
  <div class="container">
    hello, vue!
    <button @click="testAPI">Test API</button>
  </div>
</template>
<script>
export default {
  methods: {
    testAPI() {
      console.log("Add API here");
    }
  }
};
</script>

