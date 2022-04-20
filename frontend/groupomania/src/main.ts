import { createApp } from "vue"
import { createPinia } from "pinia"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { faUserSecret } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import App from "./App.vue"
import store from './store'
import router from "./router"

library.add(fas, faUserSecret)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(createPinia())
.use(router)
.use(store)
.mount("#app")


