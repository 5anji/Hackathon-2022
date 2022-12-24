<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet">

  <div class="footer">
    <div class="footer1">
      <router-link class="loggo" to="/">
        <h1 class="logo">Ca Acasă</h1>

      </router-link>

      <p class="copyright">
        Copyright &copy; 2022 by CaAcasa, Inc. All rights reserved.
      </p>
    </div>
    <div class="footer2">
      <p class="contact-us">
        Contacteaza-ne
      </p>
      <a
        class="email"
        href="mailto: abc@example.com"
      >ca.acasa@gmail.com</a>
      <a
        class="tel"
        href="tel: +373 788 699 18"
      >(+373) 788 699 18</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  bottom: 0;
  display: grid;
  grid-template-columns: auto auto;
  gap: 100px;
  justify-content: center;
  justify-items: center;
  padding: 64px 96px;
  color: #888;
  text-align: center;
  border-top: 1px solid #ddd;

.loggo{
  text-decoration: none;

  .logo{
    font-family: 'Dancing Script', cursive;
    font-size: 44px;
    margin: 0;
    letter-spacing: 0.75px;
    color: var(--black);
  }
}


  .footer1 {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;

    .logo {
      width: auto;
      height: 52px;
      max-height: 100%;
      margin: 0;

    }


    .copyright {
      grid-row: 3;
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
      color: #767676;


    }
  }

  .footer2 {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }

  p {
    padding: 0;
    margin: 0;
  }

  .contact-us {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 700;
  }

  .email {
    font-size: 16px;
    line-height: 1.6;
    color: #767676;
    text-decoration: none;
  }

  .tel {
    font-size: 16px;
    line-height: 1.6;
    color: #767676;
    text-decoration: none;
  }
}
</style>
