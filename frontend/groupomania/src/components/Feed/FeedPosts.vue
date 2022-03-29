<script setup lang="ts">
import FeedComments from './FeedComments.vue';
</script>

<template>
  <div class="grid p-20">
    <FeedComments />
    <FeedComments />
    <FeedComments />
    <FeedComments />
    <FeedComments />
    <FeedComments />
    <FeedComments />
    <FeedComments />
    <FeedComments />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 300px;
  gap: 20px;
}
</style>