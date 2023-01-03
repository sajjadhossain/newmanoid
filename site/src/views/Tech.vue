<template>
  <div class="flex flex-col h-screen">
    <div id="loading"></div>
    <main id="blog" class="flex-grow px-5">
        <div>
          <header class="p-20">
            <h1 class="news_paper_title">
              Tech.
            </h1>
          </header>
          <div class="grid grid-cols-12 news_paper_location ">
            <div class="py-3 col-span-6 md:col-start-1 md:col-span-4">
              $ > <a class="link" href="/">home</a> > <a class="link" href="/desktop">desktop</a>
            </div>
            <div class="py-3 col-span-6 md:col-start-9 md:col-span-4">
              <div class="dark_mode_container">
                <label class="dark_mode_switch" for="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div class="slider round"></div>
                </label>
              </div>
            </div>
          </div>
          <div id="jsonContent" class="grid grid-cols-12 py-3 gap-3"></div>
        </div>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import { defineComponent, computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'
export default defineComponent({
  setup() {
    const siteData = reactive({
      title: `sajjad.nyc | tech`,
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
      ],
      script: [
        { type: 'text/javascript', src: '/scripts/tech.js' },
        { type: 'text/javascript', src: '/scripts/developer.js' },
      ],
    })
  },
})
$(function () {
  var todayUnix = Date.now();
  var mediumPromise = new Promise(function (resolve) {
  var $content = $('#jsonContent');
  var data = {
    rss: 'https://medium.com/feed/@sajjad-hossain'
  };
  $.get(' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sajjad-hossain?t=' + todayUnix, data, function (response) {
    if (response.status == 'ok') {
      var display = '';
      $.each(response.items, function (k, item) {
        display += `<article class="col-span-12 md:col-span-4">`;
        var src = item["thumbnail"]; // use thumbnail url
        display += `<a href="${item.link}" target="_blank"><img src="${src}" class="" alt="${item.title}">`;
        display += `<div class="py-1">`;
        display += `<h1 class="post-title">${item.title}</h1></a>`;
        var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
        yourString = yourString.replace('h4', 'p');
        yourString = yourString.replace('h3', 'p');
        var maxLength = 120; // maximum number of characters to extract
        //trim the string to the maximum length
        var trimmedString = yourString.substr(0, maxLength);
        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        display += `<p class="">${trimmedString}...</p>`;
        display += `<div class="text-right"><a class="link" href="${item.link}" target="_blank" class="" >Read More</a></div>`;
        display += '</div></article>';
        return k < 10;
      });
      resolve($content.html(display));
    }
  })
})
// mediumPromise.then(function(){})
})
</script>