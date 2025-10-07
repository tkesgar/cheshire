<template>
  <HomeContent>
    <!--
      There is an issue so that we cannot use <script setup> for now:
      https://github.com/unplugin/unplugin-vue-markdown/issues/53

      As a workaround, we use slot to inject the components.
    -->
    <template #resume-contact>
      <h2>Resume</h2>
      <p>Check my resume <NuxtLink to="/resume">here</NuxtLink>.</p>

      <h2>Contact</h2>
      <p>
        Send me an email here: <a :href="`mailto:${email}`">{{ email }}</a>
      </p>
    </template>
  </HomeContent>
</template>

<script setup lang="ts">
import HomeContent from "~/assets/content/home.md";

const email = atob("dC5rZXNnYXJAb3V0bG9vay5jb20=");
</script>
