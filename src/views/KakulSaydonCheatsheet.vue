<template>
  <div class="cheatsheet-page" id="kakulsaydon-cheatsheet">
    <div class="cheatsheet-page__header">
      <h1 class="cheatsheet-page__title">Kakul Saydon Cheatsheet</h1>
    </div>
    <div class="cheatsheet-page__content">
      <div class="cheatsheet-page__content__section">
        <h2 class="cheatsheet-page__content__section__title">Mechanics</h2>
        <div class="cheatsheet-page__content__section__content">
          <DieComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DieComponent from "@/components/cheatsheets/kakulsaydon/DieComponent.vue";
</script>
