<template>
  <div class="bg-beige">
    <div id="loading"></div>
    <div class="flex flex-col h-screen">
      <div id="floppy" class="modal">
          <div class="grid grid-cols-12">
              <div class="col-start-2 col-span-10 md:col-start-5 md:col-end-9">
                <img class="pt-10 pl-2 fadeIn" src="/images/desktop/floppy.png">
              </div>
          </div>
      </div>
      <header class="h-28 bg-light_beige">
          <div class="flex items-center justify-center">
              <img src="/images/branding/logo.png">
          </div>
      </header>
      <main id="home" class="flex-grow">
          <div class="grid grid-cols-12 terminal">
            <div class="h-full col-span-2 bg-light_beige"></div>
            <div class="h-full col-span-8 bg-dark_brown rounded-xl screen-case">
                <div class="pt-3"></div>
                <div class="screen">
                  <div class="text-center">
                    <div class="grid grid-cols-12">
                      <div class="py-5 col-start-2 col-span-10 md:col-start-4 md:col-span-6 bg-terminal">
                        <div class="flex items-center justify-center">
                          <img class="w-1/4" src="/images/heros/s3d.png">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-12 terminal-font">
                    <div class="md:p-3 col-start-2 col-span-10 md:col-start-4 md:col-span-6 bg-terminal text-center">
                      <p class="pl-2">Sajjad.NYC</p>
                    </div>
                    <div class="py-3 lg:p-8 col-start-2 col-span-10 md:col-start-4 md:col-span-6 border-4 border-terminal">
                      <ul class="options md:text-center pr-3">
                        <li class="transparent-li" tabindex="1" href="/pdfs/Resume_2023_vKISS.pdf">
                          <p class="pl-3">Resumé</p>
                        </li>
                        <li class="transparent-li" tabindex="2" href="mailto:hello@sajjad.nyc?subject=Stumbled on to your site!">
                          <p class="pl-3">E-mail</p>
                        </li>
                        <!-- <li class="transparent-li" tabindex="3" href="http://127.0.0.1/desktop">
                          <p class="pl-3">Desktop</p>
                        </li> -->
                      </ul>
                    </div>
                  </div>
                  <div class="overlay"></div>
                  <div class="shadow"></div>                            
                </div>
                <div class="pb-4"></div>
            </div>
            <div class="h-full flex-grow col-span-2 bg-light_beige"></div>
          </div>
      </main>
      <div class="h-14 bg-light_beige"></div>
      <footer class="h-52 bg-beige">
        <div class="pt-6 grid grid-cols-12 h-52 bg-dark_brown md:justify-items-end">
          <div class="h-40 col-start-2 col-span-10 md:col-start-1 md:col-span-10 bg-dark_beige rounded-lg keyboard">
            <span class="pl-4"></span>
            <audio id="stgs" src="/audio/stgs.001.mp3" preload="auto"></audio>
            <img id="play" class="pl-4 object-cover w-72" src="/images/buttons/unclicked/floppy_disk_drive.png">
            <div class="pt-4"></div>
            <div class="pl-4 grid grid-cols-12">
              <div id="prev" class="pt-1 pl-2 pr-2 h-16 w-16 col-start-1 col-span-2 bg-dark_grey rounded-lg">
                <a>
                  <div class="h-12 w-12 bg-light_grey rounded-lg key">
                    <div class="pt-5 pl-3">
                      <span class="arrow up"></span>
                    </div>
                  </div>
                </a>
              </div>
              <div id="next" class="pt-1 pl-2 pr-2 h-16 w-16 col-start-4 col-span-2 bg-dark_grey rounded-lg">
                <a>
                  <div class="h-12 w-12 bg-light_grey rounded-lg key">
                    <div class="pt-3 pl-3">
                      <span class="arrow down"></span>
                    </div>
                  </div>
                </a>
              </div>
              <div id="return" class="pt-1 pl-4 pr-2 h-16 w-32 col-start-7 col-span-4 bg-dark_grey rounded-lg">
                <a>
                  <div class="h-12 w-24 bg-light_grey rounded-lg key">
                    <div class="pt-4 pr-1 text-right">
                      <span class="key-text"> return</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="h-20 pt-8 bg-light_brown">
          <div class="grid grid-cols-12">
            <div class="col-start-2 md:col-start-3 col-span-1 led-green"></div>
            <div class="col-start-4 md:col-start-8 col-span-8 md:col-span-3 text-right">
              <p class="machine-text">Made <a class="underline underline-offset-4" href="http://withpulp.com" target="_blank">WITHPULP</a> in <a class="underline underline-offset-4" href="https://www.builtinnyc.com/" target="_blank">NYC</a>.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'
export default defineComponent({
  setup() {
    const siteData = reactive({
      title: `sajjad.nyc | home`,
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
        { type: 'text/javascript', src: '/scripts/main.js' },
        { type: 'text/javascript', src: '/scripts/developer.js' },
      ],
    })
  },
})
</script>