<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="footer">
    <div class="footer1">
      <router-link to="/">
        <img
          class="logo"
          src="../img/Logo.png"
          alt="menu-hub logo"
        >
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
      <p class="copyright">
        Copyright &copy; 2022 by MenuHub, Inc. All rights reserved.
      </p>
    </div>
    <div class="footer2">
      <p class="contact-us">
        Contact us
      </p>
      <a
        class="email"
        href="mailto: abc@example.com"
      >menuHub@gmail.com</a>
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
  padding: 100px 400px;
  color: #888;
  text-align: center;
  border-top: 1px solid #ddd;

  @media screen and (max-width: 544px) {
    display: flex;
    gap: 0;
    padding: 96px 32px;
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

      @media screen and (max-width: 544px) {
        height: 48px;
      }
    }

    .social-links {
      display: flex;
      gap: 24px;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    .social-icon {
      width: 24px;
      height: 24px;
      color: #767676;
    }

    .copyright {
      grid-row: 3;
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
      color: #767676;

      @media screen and (max-width: 544px) {
        text-align: start;
      }
    }
  }

  .footer2 {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  p {
    padding: 0;
    margin: 0;
  }

  .contact-us {
    margin-bottom: 32px;
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
