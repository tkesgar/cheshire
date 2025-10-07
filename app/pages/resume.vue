<template>
  <BContainer class="tw:my-4">
    <h1 class="tw:text-center">Tito D. Kesumo Siregar</h1>

    <ul class="tw:!pl-0 tw:grid tw:grid-cols-2 tw:gap-1">
      <li class="tw:flex tw:items-center tw:gap-2">
        <Icon name="bi:pin-map" />
        Jakarta, Indonesia
      </li>
      <li class="tw:flex tw:items-center tw:gap-2">
        <Icon name="bi:envelope" />
        <ClientOnly>
          <a :href="`mailto:${email}`" class="tw:!no-underline">
            {{ email }}
          </a>
        </ClientOnly>
      </li>
      <li class="tw:flex tw:items-center tw:gap-2">
        <Icon name="bi:globe" />
        <NuxtLink external href="https://tkesgar.com" class="tw:!no-underline">
          tkesgar.com
        </NuxtLink>
      </li>
      <li class="tw:flex tw:items-center tw:gap-2">
        <Icon name="simple-icons:linkedin" />
        <NuxtLink
          external
          href="https://www.linkedin.com/in/tkesgar/"
          class="tw:!no-underline"
        >
          tkesgar
        </NuxtLink>
      </li>
    </ul>

    <p>
      Passionate software engineer with 6+ years working on various web platform
      projects and tools, with experience working on large-scale end-user web
      services and tools. Deep understanding on core web technologies and design
      patterns from years of experience in working with and maintaining
      Bukalapak front-end technology stack. Actively write code on personal
      projects and occasionally contributed to open-source projects on GitHub
      via pull requests and reporting issues.
    </p>

    <h2>Work Experience</h2>

    <h3 class="tw:flex tw:items-end tw:gap-4">
      Staff, Nusaimoe
      <small class="tw:text-secondary tw:ml-auto tw:flex-none">2017-2020</small>
    </h3>

    <WorkNusaimoe />

    <h3 class="tw:flex tw:items-end tw:gap-4">
      Intern at HR Information System (HRIS), PT Pertamina (Persero)
      <small class="tw:text-secondary tw:ml-auto tw:flex-none">2018-2019</small>
    </h3>

    <WorkInternHris />

    <h3 class="tw:flex tw:items-end tw:gap-4">
      Software Engineer, Bukalapak
      <small class="tw:text-secondary tw:ml-auto tw:flex-none">2019-2025</small>
    </h3>

    <WorkBukalapak />

    <h2>Education</h2>
    <h3 class="tw:flex tw:items-end tw:gap-4">
      SMAN Plus Provinsi Riau
      <small class="tw:text-secondary tw:ml-auto tw:flex-none">
        2008-2011
      </small>
    </h3>
    <ul>
      <li>
        Honors:
        <ul>
          <li>Medali Perunggu OSN Informatika 2009</li>
          <li>Medali Emas OSN Informatika 2010</li>
        </ul>
      </li>
    </ul>
    <h3 class="tw:flex tw:items-end tw:gap-4">
      S1 Teknik Informatika, Institut Teknologi Bandung
      <small class="tw:text-secondary tw:ml-auto tw:flex-none">2011-2018</small>
    </h3>
    <ul>
      <li>IP: 3.36/4.00</li>
      <li>
        Honors:
        <ul>
          <li>Compfest 2013 - Finalis Edugames Challenge</li>
        </ul>
      </li>
    </ul>
  </BContainer>
</template>

<script setup lang="ts">
import WorkBukalapak from "~/assets/content/resume/work-bukalapak.md";
import WorkInternHris from "~/assets/content/resume/work-intern-hris.md";
import WorkNusaimoe from "~/assets/content/resume/work-nusaimoe.md";

const email = atob("dC5rZXNnYXJAb3V0bG9vay5jb20=");
</script>
