<script setup>
import {onMounted, ref} from "vue";
import {Icon} from "@iconify/vue";
import axios from "axios";

const list = ref([]);
onMounted(() => {
  axios
      .get("http://localhost:8081/cook", {
        params: {
          pages: 1,
          nrOfItems: 4
        }
      })
      .then((response) => {
        list.value = response.data;
      });
})
</script>
<template>
  <section class="home">
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&display=swap"
        rel="stylesheet"
    />

    <h1 class="description">Mancarea buneilor tai la tine acasa!</h1>
    <div class="h">
      <div class="cookers" v-for="item in list">
        <div class="img">
          <img class="img-cook" :src="item.cookPhoto"/>
        </div>
        <router-link class="hovv" :to="{ name: 'Menu', params: { cookId: item.cookId}}">
          <div class="hov">
            <h2 class="name">Doamna {{ item.cookName }}</h2>
            <div class="menu">
              <h2 class="menu-menu">Vezi Meniul</h2>
              <Icon class="btn-icon" icon="ion:arrow-forward-outline"/>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
  background-color: #ffffff;
  //opacity: 0.2;
  background: repeating-linear-gradient(
          -45deg,
          hsla(5, 82%, 55%, 0.1),
          hsla(5, 82%, 55%, 0.1) 4.5px,
          #ffffff 4.5px,
          #ffffff 22.5px
  );

  .description {
    font-family: "Dancing Script", cursive;
    font-size: 44px;
    text-align: center;
    padding-bottom: 32px;
  }

  .h {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 96px;
  }

  .cookers {


    .img {
      position: relative;

      .img-cook {
        height: 350px;
        border-radius: 24px;


      }
    }
  }

  .hovv {
    position: absolute;
    height: 350px;
    width: 350px;
    border-radius: 24px;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity 0.3s;
    text-decoration: none;
    color: white;
    top: 270px;

    &:hover {
      opacity: 1;
    }

    .name {
      margin: 0;
      text-align: center;
      padding-top: 180px;
    }

    .menu {
      display: flex;
      gap: 18px;
      padding-top: 24px;
      justify-content: center;

      .menu-menu {
        margin: 0;
        font-size: 18px;
      }

      .btn-icon {
        height: 18px;
        width: 18px;
      }
    }
  }
}
</style>
