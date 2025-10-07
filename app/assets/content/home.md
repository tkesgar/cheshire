# Hi, I'm Ted Kesgar.

I am a software engineer currently living in Jakarta.

When I am not working on computer code, I play video games, write stories, and
draw comics.

## Resume

Check my resume <NuxtLink to="/resume">here</NuxtLink>.

<ClientOnly>
  <Contact />
</ClientOnly>

## Works

All open source projects are available in [my GitHub][github-tkesgar].

[github-tkesgar]: https://github.com/tkesgar

Currently active projects (actively maintained/developed):

- [strformat]: minimal string templating engine inspired by Webpack template
  strings
- [nuxt-elysia]: mount Elysia app in Nuxt

[strformat]: https://github.com/tkesgar/strformat
[nuxt-elysia]: https://github.com/tkesgar/nuxt-elysia

See a full list of my works <NuxtLink to="/works">here</NuxtLink>.

## Personal tech stack

Below are some of the technologies I prefer to use, either for work or personal
projects.

- **OS:** [Ubuntu], [Debian]
- **JavaScript runtime:** [Node.js], [Bun]
  - **Node.js version manager:** [nvm]
  - **Package manager:** [Bun]
- **Process manager:** [PM2]
- **TypeScript SQL library:** [Drizzle]
- **Git repository service:** [Gitea]
- **SQL database:** [PostgreSQL], [SQLite]
- **Reverse proxy:** [Nginx]
- **Web framework:** [Nuxt], [Elysia]
- **CSS/UI framework:** [Bootstrap], [Tailwind]
- **Game engine:** [Godot]
- **Dashboard:** [Grafana]
- **Metrics engine:** [Prometheus]
- **SaaS**
  - [DigitalOcean]
  - [Cloudflare]
  - [GitHub]
  - [Gitlab]
  - [Tailscale]

[Ubuntu]: https://ubuntu.com/download
[Debian]: https://www.debian.org/distrib/
[Node.js]: https://nodejs.org/en/download
[Bun]: https://bun.com/
[nvm]: https://github.com/nvm-sh/nvm
[PM2]: https://pm2.keymetrics.io/
[Drizzle]: https://orm.drizzle.team/
[Gitea]: https://docs.gitea.com/
[PostgreSQL]: https://www.postgresql.org/docs/current/index.html
[SQLite]: https://sqlite.org/
[Nginx]: https://nginx.org/en/docs/
[Nuxt]: https://nuxt.com/
[Elysia]: https://elysiajs.com/
[Bootstrap]: https://getbootstrap.com/
[Tailwind]: https://tailwindcss.com/
[Godot]: https://godotengine.org/
[Grafana]: https://grafana.com/docs/grafana/latest/
[Prometheus]: https://prometheus.io/docs/introduction/overview/
[DigitalOcean]: https://www.digitalocean.com/
[Cloudflare]: https://www.cloudflare.com/
[GitHub]: https://github.com
[Gitlab]: https://about.gitlab.com/
[Tailscale]: https://tailscale.com/kb/1017/install

## Web/social media accounts

Any accounts not listed below is either my private accounts (not intended for
public communications) or is not mine (fake accounts, bots, or impersonators).

<ul>
  <li>
    <NuxtLink href="https://x.com/tkesgar" external>
      <Icon name="simple-icons:twitter" /> Twitter: @tkesgar
    </NuxtLink>
  </li>
  <li>
    <NuxtLink href="https://www.instagram.com/t.kesgar/" external>
      <Icon name="simple-icons:instagram" /> Instagram: t.kesgar
    </NuxtLink>
  </li>
  <li>
    <NuxtLink href="https://www.linkedin.com/in/tkesgar/" external>
      <Icon name="simple-icons:linkedin" /> LinkedIn: tkesgar
    </NuxtLink>
  </li>
  <li>
    <NuxtLink href="https://github.com/tkesgar" external>
      <Icon name="simple-icons:github" /> GitHub: tkesgar
    </NuxtLink>
  </li>
  <li>
    <NuxtLink href="https://gitlab.com/tkesgar" external>
      <Icon name="simple-icons:gitlab" /> GitLab: tkesgar
    </NuxtLink>
  </li>
  <li>
    <NuxtLink href="https://www.youtube.com/@ggtynonan" external>
      <Icon name="simple-icons:youtube" /> YouTube: @ggtynonan
    </NuxtLink>
  </li>
  <li>
    <NuxtLink href="https://www.twitch.tv/nonan99" external>
      <Icon name="simple-icons:twitch" /> Twitch: nonan99
    </NuxtLink>
  </li>
  <li>
    <NuxtLink href="https://steamcommunity.com/id/nonann" external>
      <Icon name="simple-icons:steam" /> Steam: nonann
    </NuxtLink>
  </li>
</ul>

## Gaming

Actively playing these live service games:

- Apex Legends
- Genshin Impact
- Zenless Zone Zero
- Blue Archive

Check out my Steam profile [here][steam-tkesgar]. I also occasionally stream on
[YouTube][youtube-tkesgar].

[steam-tkesgar]: https://steamcommunity.com/id/nonann
[youtube-tkesgar]: https://www.youtube.com/@ggtynonan

<script setup lang="ts">
import { ClientOnly, NuxtLink } from '#components'
import Contact from './contact.md'
</script>

<style scoped>
:deep(a) {
  text-decoration-line: none;
}
</style>
