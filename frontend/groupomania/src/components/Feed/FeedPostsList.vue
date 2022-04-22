<template>
  <div class="grid p-20">
    <NewFeedVue />
    <FeedPosts />
  </div>
</template>

<script setup lang="ts">
import FeedPosts from './FeedPosts.vue';
import NewFeedVue from './NewPost.vue';
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  justify-content: end;
  grid-template-columns: 1fr;
  gap: 20px;
  border-radius: 30px;
}
</style>