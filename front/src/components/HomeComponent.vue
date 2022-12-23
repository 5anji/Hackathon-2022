<script setup>
import {ref, onMounted, watch} from "vue";
import {Icon} from "@iconify/vue";
import {getRestaurantAll} from "../api";


</script>
<template>
  <section class="home">
    <div class="cookers">


        <div class="img">
          <img class="img-cook" src="../img/Zina.png"/>
        </div>

      <div class="img">
        <img class="img-cook" src="../img/Vasea.jpg"/>
      </div>
      <router-link class="hovv" to="/Menu">
      <div class="hov">
      <h1 class="name">Doamna Zina</h1>
        <div class="menu">
        <h1 class="menu-menu">Vezi Meniul</h1>
          <Icon
              class="btn-icon"
              icon="ion:arrow-forward-outline"
          />
        </div>
      </div>
      </router-link>


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

  .cookers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 96px;

    .img {
      position: relative;
      .img-cook {
        height: 350px;
        border-radius: 24px;

        &:hover {
          background-color: var(--red);
        }
      }
    }


  }
  .hovv{
    position: absolute;
    height: 350px;
    width: 350px;
    border-radius: 24px;
    background-color: rgba(0,0,0,0.6);
    opacity: 0;
    transition: opacity 0.3s;
    text-decoration: none;
    color: white;
    &:hover{
      opacity: 1;
    }
    .name {
      margin: 0;
      text-align: center;
      padding-top: 180px;
    }
    .menu{
      display: flex;
      gap: 18px;
      padding-top: 24px;
justify-content: center;
      .menu-menu{
        margin: 0;
        font-size: 18px;


      }
      .btn-icon{
        height: 18px;
        width: 18px;
      }
    }

  }

}
</style>
