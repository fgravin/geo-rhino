import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18next from 'i18next'
import i18nextBackend from 'i18next-http-backend'
import I18NextVue from 'i18next-vue'

import { initProjections } from '@/services/projection.utils'

import App from './App.vue'

initProjections()

i18next.use(i18nextBackend)
i18next.init({
  lng: 'fr',
  debug: false,
  defaultNS: 'client',
  supportedLngs: ['en', 'fr'],
  ns: ['client'],
  fallbackLng: 'fr',
  backend: {
    loadPath: `${import.meta.env.BASE_URL}assets/locales/{{ns}}.{{lng}}.json`,
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(I18NextVue, { i18next })

app.mount('#app')
