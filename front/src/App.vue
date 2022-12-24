<script setup>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/FooterComponent.vue";

const x = ref(true);
</script>

<template>
  <NavBar  />

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component
        :is="Component"
        @show-tipa="($event) => (x = $event)"
      />
    </transition>
  </router-view>
  <Footer />
</template>

<style lang="scss">
@import "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Open+Sans:wght@400;500;700&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&display=swap";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
