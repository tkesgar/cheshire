<template>
  <BContainer>
    <div class="tw:my-4">
      <HomeContent />
    </div>

    <footer
      class="tw:border-t tw:border-t-secondary-border-subtle tw:px-4 tw:py-8 tw:text-sm tw:text-secondary tw:text-center"
    >
      The source code for this website is available here:
      <NuxtLink to="https://github.com/tkesgar/cheshire" external>
        gh:tkesgar/cheshire</NuxtLink
      >.
    </footer>
  </BContainer>
</template>

<script setup>
import HomeContent from "~/assets/content/home.md";
</script>
