// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
   srcDir: '.',
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  app: {
    //TODO: update meta tags
    head: {
      title: "IGUALES - KIT ECO.SOCIAL",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Kit de herramientas para el desarrollo sostenible de las entidades de economía social",
        },
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "og-title",
          property: "og:title",
          content: "KIT ECONOMIA SOCIAL",
        },
        {
          hid: "og-desc",
          property: "og:description",
          content:
            "KIT ECONOMIA SOCIAL - Kit de herramientas para el desarrollo sostenible de las entidades de economía social",
        },
        {
          hid: "og-image",
          property: "og:image",
          content: "https://www.kit-eco.social/es/thumbnail.png",
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "https://www.kit-eco.social/es/",
        },
        { hid: "t-type", name: "twitter:card", content: "summary_large_image" },
        { hid: "whatsapp-image", name: "whatsapp:image", content: "https://www.kit-eco.social/es/thumbnail.png" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.kit-eco.social/es/'},
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ]
    },
  },
});