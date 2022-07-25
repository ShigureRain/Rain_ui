import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHashHistory} from "vue-router";
import Rain from "./components/Rain.vue";

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/', component: Rain
        }
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
