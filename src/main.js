import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import styles from './styles/scss/main.scss'

const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
