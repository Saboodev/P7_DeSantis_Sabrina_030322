<script setup lang="ts">
import FeedPosts from './FeedPosts.vue';
</script>

<template>
  <div class="grid p-20">
    <FeedPosts />
    <FeedPosts />
    <FeedPosts />
    <FeedPosts />
    <FeedPosts />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-auto-rows: 100px;
  gap: 20px;
  border-radius: 30px;
}
</style>