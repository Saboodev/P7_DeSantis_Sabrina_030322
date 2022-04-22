<template>
  <div>
    <div class="listMember">
      <label for="toggle"><font-awesome-icon class="icon" icon="user-group" /></label>
      <input type="checkbox" id="toggle">
      <div class="main_pages">
          <AsideMembersList />
      </div>
    </div>
    <div class="p-20">
      <AsideMembersList />
    </div>
  </div>
</template>

<script setup lang="ts">
import AsideMembersList from './AsideMembersList.vue';
</script>

<style lang="scss" scoped>
.p-20 {
  border-radius: 20px;
  background-color: var(--dark-blue-1);
  @media screen and(max-width: 1130px) {
    display: none;
  }
}

label, #toggle, .main_pages {
    display: none;
}
 
@media all and (max-width: 1130px) {
  .listMember .main_pages 
  {
      display: none;
      flex-direction: column;
  }

  label 
  {
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      font-size: 30px;
      color: var(--dark-blue-1);
      cursor: pointer;
  }

  #toggle:checked + .main_pages {
      display: flex;
  }
}
</style>