<template>
  <div class="pt-10">
        <div class="flex flex-col h-screen pt-10">
            <main class="flex-grow">
                <div class="grid grid-cols-12 pt-10">
                    <div class="col-start-2 col-span-10">
                        <img src="/images/heros/pyramid.png" />
                        <!-- <img id="test" src="./images/heros/test_1.png" /> -->
                        <section class="py-3">
                            <img class="slides slides-hidden" src="/images/heros/test_2.png">
                            <img class="slides slides-hidden" src="/images/heros/test_3.png">
                            <img class="slides slides-hidden" src="/images/heros/test_1.png">
                        </section>
                        <div>
                          <!-- container that will display test results -->
                          <div id="mocha" class="bg-pyramid_dark_brown"></div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
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
      title: `sajjad.nyc | test`,
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
        { rel: 'stylesheet', href: 'https://use.typekit.net/xgz8yqg.css', undo: false },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/mocha/3.1.0/mocha.min.css', undo: false },
      ],
      script: [
        { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/mocha/3.1.0/mocha.min.js' },
        { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.min.js' },
        { type: 'text/javascript', src: '/scripts/test.js' },
        { type: 'text/javascript', src: '/scripts/developer.js' },
      ],
    })
  },
})
</script>