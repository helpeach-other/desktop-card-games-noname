import 'virtual:uno.css'
import { createApp, nextTick } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import './samples/node-api'
import './styles/global.css'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  app.mount('#app')

  await nextTick()
  postMessage({ payload: 'removeLoading' }, '*')
}

bootstrap()
