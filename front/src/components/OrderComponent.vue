
<script setup>
import {ref} from "vue";
const selected = ref('')
import { Icon } from "@iconify/vue";

defineEmits(['close'])

</script>
<template>
  <div class="or">
<section class="order">

    <Icon @click="$emit('close')" class="btn-icon" icon="ion:close-round" />

  <div class="ord">
  <h2 class="description">Livrare</h2>
  <input class="input" v-model="name" placeholder="Nume">
  <input class="input" v-model="adress" placeholder="Adresa">
  <input class="input" v-model="number" placeholder="Numarul de telefon">
  <input class="input" v-model="email" placeholder="Email">
  <select class="input" v-model="selected">
    <option disabled value="">Modul de Achitare</option>
    <option>Plata in numerar</option>
    <option>Plata cu card </option>
  </select>
  <button @click="$emit('close')"  class="add">Comanda</button>
  </div>
</section>
  </div>
</template>
<style scoped lang="scss">
.or{

  position: absolute;
  padding: 150px 300px;
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(5px);
  right: 0px;
  top:0px;

}
.order{
  
  padding: 64px 150px;
  position: relative;
  background-color: #f7b2ac;
  border-radius: 24px;
  backdrop-filter: blur(10px);

  //right: 350px;
  //top:140px;
  .btn-icon {
    position: absolute;
    height: 24px;
    width: 24px;
    right: 44px;
    top: 44px;
    color: var(--dark-red);
    cursor: pointer;

  }
  .ord{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 96px;
    row-gap: 64px;

  }
  .description{
    font-size: 44px;
    letter-spacing: 0.75px;
    color: var(--black);
    margin: 0;
  grid-column: 1 /  span 2;
    text-align: center    ;
  }
  .input{
    padding: 18px;
    border-radius: 18px ;
  }
  .add {
    margin: 0;
    background-color: var(--red);
    opacity: 0.85;

    font-weight: 700;
    color: white;
    padding: 12px 60px;
    border-radius: 24px;
    font-size: 24px;
    justify-self: end;
    cursor: pointer;

    &:hover {
      background-color: var(--dark-red);
      color: white;
    }
  }
}
</style>