<script setup>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import Log from "./Log.vue";
const isopen = ref(false)
const selected = ref('')


</script>

<template>
  <section class="nav-bar">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet">
    <router-link class="link-logo" to="/">
      <h1 class="logo">Ca Acasă</h1>
    </router-link>
    <div class="right">

      <a class="tel" href="tel:078869918">0 788-699-18</a>
      <button @click="isopen = true"  class="log">
        <Log v-if="isopen"  @close = 'isopen =false'/>
        <h2 class="login">Login</h2>
        <Icon
            class="btn-icon"
            icon="ion:arrow-forward-outline"
        />
      </button>
    </div>
  </section>
</template>
<style scoped lang="scss">
.nav-bar{
  opacity: 1;
  display: flex;
  z-index: 1;
  position: fixed;
  width: 100%;
  align-content: center;
  justify-content: space-between;
  padding: 24px 96px 24px 96px;
  background-color: white;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  .link-logo{
    text-decoration: none;
  }
  .logo{
    font-family: 'Dancing Script', cursive;
    font-size: 44px;
    margin: 0;
    letter-spacing: 0.75px;
    color: var(--black);

  }
  .right{
    display: flex;
    align-content: center;
    gap: 112px;
    .tel{
      align-self: center;
      font-size: 24px;
      text-decoration: none;
      color: #9d9d9d;
      color: var(--red);

      font-style: italic;
      font-weight: 700;
      letter-spacing: 0.75px;


    }

    .log {
      //margin: 0;
      display: flex;
      align-items: center;
      gap: 12px;
      color: white;
      background-color: #ed5c50;
      padding: 12px 24px;
      border-radius: 24px;
      cursor: pointer;
      .login{
        margin: 0;
        letter-spacing: 0.75px;
        font-size: 18px;
      }
      .btn-icon{
        height: 24px;
        width: 24px;
      }
      &:hover{
        background-color: var(--dark-red);
      }
    }
  }
}
</style>
