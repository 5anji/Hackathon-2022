<script setup>
import { Icon } from "@iconify/vue";
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
const isShow = ref(false);
const props = defineProps({
  "forceShow":{
    type: Boolean,
    required: true
  }
}, {
  msg: String,
});
const route = useRoute();
const visible = ref(route.name === "Home");
watch(route, (x) => {
  visible.value = x.name === "Home";
});

const doEdit = (e) =>{
  isShow.value =e
}
</script>

<template>
  <div
    v-show="!visible || props.forceShow"
    :class="{ hide: !isShow }"
    class="nav-mob-wr"
  >
    <div
      class="nav-icon"
    >
      <Icon
        v-if="isShow"
        class="icon"
        icon="ph:x-bold"
        @click="doEdit(false)"
      />

      <Icon
        v-else
        class="icon"
        icon="ph:list-bold"

        @click="doEdit(true)"
      />
    </div>

    <router-link to="/">
      <img
        class="logo"
        src="../img/Logo.png"
        alt="menu-hub logo"
      >
    </router-link>
    <div class="nav-mob">
      <router-link
        class="right-bar"
        to="/restaurants"
        @click="isShow = !isShow"
      >
        Restaurants
      </router-link>
      <router-link
        class="right-bar"
        :to="{ path: '/', hash: '#about-us' }"
        @click="isShow = !isShow"
      >
        About Us
      </router-link>
      <ul class="social-links">
        <li>
          <a
            class="footer-link"
            href="#"
          ><Icon
            class="social-icon"
            icon="uil:instagram"
          />
          </a>
        </li>
        <li>
          <a
            class="footer-link"
            href="#"
          ><Icon
            class="social-icon"
            icon="uil:facebook-f"
          /></a>
        </li>
        <li>
          <a
            class="footer-link"
            href="#"
          ><Icon
            class="social-icon"
            icon="uil:twitter-alt"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
.nav-mob-wr {
  // position: relative;
  position: fixed;
  z-index: 100;

  &.hide {
    z-index: 100;

    .nav-mob {
      visibility: hidden !important;
    }
  }

  .nav-icon {
    position: absolute;
    z-index: 1000;
    width: 100%;
    padding: 24px 32px;
    margin: 0;
    background-color: rgb(255 255 255 / 90%);
    backdrop-filter: blur(3px);

    // box-shadow: rgb(245, 245, 245) 0px 0px 20px 10px;
    // top: 60px;
    // right: calc(100% - 100px);
    .icon {
      width: 32px;
      height: 32px;
      color: var(--green);
    }
  }

  .logo {
    position: absolute;
    top: 22px;
    right: 32px;
    z-index: 1000;
    height: 40px;
  }

  .nav-mob {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: 52px 32px 32px;
    margin: 84px 0 0;
    background-color: rgb(255 255 255 / 90%);
    border-bottom: 1px solid hsl(0deg 0% 95% / 60%);
    backdrop-filter: blur(3px);

    .social-links {
      display: flex;
      gap: 24px;
      padding: 24px 0 0;
      margin: 0;
      list-style: none;
    }

    .social-icon {
      width: 24px;
      height: 24px;
      color: var(--dark-purple);
    }

    .right-bar {
      margin: 0;
      font-size: 30px;
      color: var(--green);
      text-decoration: none;
      transition-property: box-shadow, transform;

      &:nth-of-type(2) {
        grid-column: 1;
      }
    }
  }

  @media screen and (min-width: 544px) {
    display: none;
  }
}
</style>