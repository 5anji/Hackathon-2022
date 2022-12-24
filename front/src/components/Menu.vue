<script setup>
import {onMounted, ref} from "vue";
import MenuComponent from "./MenuComponent.vue";
import axios from "axios";

const cookers = ref([]);
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
        cookers.value = response.data;
      });

  axios
      .get(`http://localhost:8081/food/42624c94-fb1e-4c26-9814-09d874d54602/`, {
        params: {
          pages: 1,
          nrOfItems: 3
        }
      })
      .then((response) => {
        list.value = response.data;
        console.log(response.data);
      })
});

function getCookerId() {
  cookers.value.map(cooker => cookersId.value = cooker.cookId);
}
</script>
<template>
  <div class="menu">
    <h1 class="description">Ca acasa la Doamna Zina</h1>
    <div class="m">
      <div class="menuu" v-for="item in list">
        <menu-component :title="item.foodName"
                        :price="item.foodPrice"
                        :photo="item.foodPhoto"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  padding: 96px 96px 0px 96px;
  margin: 0;
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
    margin: 0;
    font-size: 44px;
    padding-top: 96px;
    text-align: center;
  }

  .m {
    padding: 48px 0 96px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 96px;
    justify-content: space-between;
  }

}
</style>