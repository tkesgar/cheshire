<template>
  <div>
    <NuxtLoadingIndicator
      color="var(--bs-primary)"
      error-color="var(--bs-danger)"
    />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import "@fontsource-variable/figtree";
import "@fontsource-variable/kode-mono";
import "~/assets/styles/main.scss";
import "~/assets/styles/tailwind.css";
</script>
