<script setup lang="ts">
import ComPosts from './ComPosts.vue';
</script>

<template>
  <div class="grid p-20">
    <FeedPosts />
    <FeedPosts />
    <FeedPosts />
    <FeedPosts />
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
  grid-template-columns: 1fr;
  grid-auto-rows: 150px;
  gap: 20px;
}
</style>