<template>
  <div>
    <BNavbar v-b-color-mode="'light'" variant="light">
      <NuxtLink v-slot="{ navigate, href }" to="/" custom>
        <BNavbarBrand :href="href" @click="navigate">Ted Kesgar</BNavbarBrand>
      </NuxtLink>
      <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav class="tw:ml-auto">
          <NuxtLink v-slot="{ navigate, href, isActive }" to="/works" custom>
            <BNavItem :href="href" :active="isActive" @click="navigate">
              Works
            </BNavItem>
          </NuxtLink>
          <NuxtLink v-slot="{ navigate, href, isActive }" to="/resume" custom>
            <BNavItem :href="href" :active="isActive" @click="navigate">
              Resume
            </BNavItem>
          </NuxtLink>
        </BNavbarNav>
      </BCollapse>
    </BNavbar>

    <BContainer class="tw:my-8">
      <slot />
    </BContainer>

    <footer
      class="tw:border-t tw:border-t-secondary-border-subtle tw:px-4 tw:py-8 tw:text-sm tw:text-secondary tw:text-center"
    >
      The source code for this website is available here:
      <NuxtLink to="https://github.com/tkesgar/cheshire" external>
        gh:tkesgar/cheshire</NuxtLink
      >.
    </footer>
  </div>
</template>
