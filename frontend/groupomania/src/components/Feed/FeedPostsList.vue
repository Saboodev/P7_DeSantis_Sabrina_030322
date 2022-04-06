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
  grid-auto-rows: 300px;
  gap: 20px;
  border-radius: 20px;
}

</style>