<script setup>
import {ref} from "vue";

const selected = ref('')
import {Icon} from "@iconify/vue";

defineEmits(['close', 'close'])

</script>
<template>
  <div class="or">
    <section class="order">
      <Icon @click="$emit('close')" class="btn-icon" icon="ion:close-round"/>

      <div class="ord">
        <h2 class="description">Log in</h2>
        <input class="input" placeholder="Email">
        <input type="password" class="input" placeholder="Password">
        <div>
          <button @click="$emit('close')" class="add">Log in</button>
        </div>
      </div>

    </section>
  </div>
</template>

<style scoped lang="scss">
.or {
  position: absolute;
  padding: 150px 300px;
  height: 100vh;
  width: 100%;
  right: 0;
  top: 50px;
}

.order {
  padding: 64px 150px;
  position: relative;
  background-color: #f7b2ac;
  border-radius: 24px;
  width: 500px;
  margin: 0 auto;

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

  .ord {
    display: grid;
  }

  .description {
    font-size: 44px;
    letter-spacing: 0.75px;
    color: var(--black);
    margin-bottom: 20px;
    text-align: center;
  }

  .input {
    margin: 10px 0;
    padding: 18px;
    border-radius: 18px;
  }

  .add {
    margin: 30px auto 0;
    background-color: var(--red);
    font-weight: 700;
    color: white;
    padding: 12px 60px;
    border-radius: 24px;
    font-size: 24px;
    cursor: pointer;

    &:hover {
      background-color: var(--dark-red);
      color: white;
    }
  }
}
</style>