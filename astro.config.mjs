import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://aystream.onrender.com',
  vite: {
    preview: {
      host: true,
      port: parseInt(process.env.PORT) || 4321,
      allowedHosts: ['aystream.onrender.com']
    }
  }
})
