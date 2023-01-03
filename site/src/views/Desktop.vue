<template>
  <main id="desktop" class="bg-desktop">
    <div id="loading"></div>
    <div class="desktop">
      <main class="flex-grow pb-9">
        <div class="px-9 pt-9 grid grid-cols-12 gap-3">
          <div class="col-start-0 col-span-5 md:col-span-1 xl:col-span-1 text-center">
            <a class="icon" href="/">
              <img src="/images/desktop/icons/home.png" style="width:100%"/>
              <p class="icon-name pt-3">
                Home
              </p>
            </a>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="px-9 grid grid-cols-12 gap-3">
          <div class="col-start-0 col-span-5 md:col-start-10 xl:col-start-10 md:col-span-1 xl:col-span-1 text-center">
            <a class="icon" target="_blank" href="https://www.youtube.com/watch?v=87PJHC0ArO8">
              <img src="/images/desktop/icons/stargirl.png" style="width:100%"/>
              <p class="icon-name pt-3">
                Stargirl
              </p>
            </a>
          </div>
          <div class="col-start-8 col-span-5 md:col-start-12 xl:col-start-12 md:col-span-1 xl:col-span-1 text-center">
            <a class="icon" target="_blank" href="https://open.spotify.com/artist/02wJaQRVJnvVgCBdhZhIwL?si=rjr1sU4JQzSjsqdCWX34Hw">
              <img src="/images/desktop/icons/pyrmd.png" style="width:100%"/>
              <p class="icon-name pt-3">
                PYRMD
              </p>
            </a>
          </div>
        </div>
      </main>
    </div>
    <a id="start">
      <div class="startbar">
        <div id="startbutton" class="startbutton-off">
          <b>Start</b>
        </div>
        <div class="time">
        </div>
      </div>
    </a>
    <div id="menu">
      <div class="sidebar"></div>
      <div class="headline">Sajjad Hossain</div>
      <ul class="menu-content">
        <a href="/tech"><li class="item" data-icon="/images/desktop/icons/tech.png">Tech.</li></a>
        <a href="https://github.com/sajjadhossain" target="_blank"><li class="item" data-icon="/images/desktop/icons/github.png">Github</li></a>
        <a href="https://www.linkedin.com/in/sajjad-hossain-nyc/" target="_blank"><li class="item" data-icon="images/desktop/icons/linkedin.png">LinkedIn</li></a>
        <li class="item more" data-icon="images/desktop/icons/resume.png">Resumé
          <ul class="dropdown-content">
            <a href="/pdfs/Resume_2022_vBasic.pdf" target="_blank"><li class="dropdown-item" data-icon="images/desktop/icons/resume_each.png" data-url="/pdfs/Resume_2022_vBasic.pdf">vBasic</li></a>
            <a href="/pdfs/Resume_2022_vKISS.pdf" target="_blank"><li class="dropdown-item" data-icon="images/desktop/icons/resume_each.png" data-url="/pdfs/Resume_2022_vKISS.pdf">vKISS</li></a>
          </ul>
        </li>
        <li class="item more" data-icon="/images/desktop/icons/music.png">Music
          <ul class="dropdown-content">
            <li class="dropdown-item launch" data-launch="ColdHearted" data-title="Cold Hearted.mp3" data-icon="/images/desktop/icons/song.png" data-url="https://www.youtube.com/embed/87PJHC0ArO8">Cold Hearted</li>
          </ul>
        </li>
        <a href="mailto:hello@sajjad.nyc?subject=Stumbled on to your site!" target="_blank"><li class="item" data-icon="/images/desktop/icons/email.png">E-mail</li></a>
      </ul>
    </div>
  </main>
</template>
<script>
import { defineComponent, computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  setup() {
    const siteData = reactive({
      title: `sajjad.nyc | desktop`,
      description: `Contact, contract or employ Sajjad Hossain for your testing and automation needs today!`,
    })
    useHead({
      title: computed(() => siteData.title),
      meta: [
        { name: `description`, content: computed(() => siteData.description) },
        { name: 'name', content: 'Sajjad M. Hossain' }
      ],
      link: [
        { rel: 'canonical', href: 'http://sajjad.nyc', id: 'canonical' },
        { rel: 'author', href: 'http://sajjad.nyc', undo: false },
        { rel: 'icon', href: '/images/icons/favicon.ico', type: 'image/x-icon' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com', undo: false },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', undo: false },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Press+Start+2P&display=swap', undo: false },
      ],
      script: [
        { type: 'text/javascript', src: '/scripts/desktop.js' },
        { type: 'text/javascript', src: '/scripts/developer.js' },
      ],
    })
  },
})
</script>