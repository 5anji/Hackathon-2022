<script setup>
import OrderComponent from "./OrderComponent.vue";
import {ref} from "vue";
defineProps({
  "title":{
    type: String,
    required: true,
  },
  "price":{
    type: String,
    required: true,
  },
  "photo":{
    type: String,
    required: true,
  }

});
const isopen = ref(false)

</script>

<template>
  <div class="menu-menu" :style="{backgroundImage: `url(${photo})`}">
    <!--    <img class="img" src="../img/mamaliga-preparata-corect%20(1).jpg"/>-->
    <h2 class="meal">{{title}}</h2>
    <div class="info">
      <p class="price">{{price}} Lei</p>
    <div class="chart">
      <button @click="isopen = true" class="add"> Cumpara</button>
    </div>
      <order-component v-if="isopen"  @close = 'isopen =false'/>

    </div>

  </div>
</template>



<style scoped lang="scss">
.menu-menu{

  display: flex;
  flex-direction: column;
  width: 370px;
  height: 400px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  border-radius: 24px;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 370px;
  background-color: white;

//.img {
  //  height: 200px;
  //  width: auto;
  //  border-radius: 24px;
  //}
  .meal{
    padding: 270px 32px 18px 32px;

    color: var(--black);
    font-size: 30px;
    margin: 0;
  }
.info{
  padding: 0px 32px 18px 32px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.price{
  font-weight: 400;
  font-size: 24px;
  margin: 0;
  align-self: center;
  letter-spacing: 0.75px;
}
.chart{
  align-self: end;

.add {
  margin: 0;
  color: white;
  background-color: var(--red);
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 18px;
  justify-self: end;
  cursor: pointer;
  opacity: 0.85;

  &:hover{
    background-color: var(--dark-red);
  }


}

}
}
</style>