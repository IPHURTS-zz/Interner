import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import Header from './Base/Header.vue'
import Footer from './Base/Footer.vue'

const app = createApp(App)

app.component('Header', Header)
app.component('Footer', Footer)

app.mount('#app')
