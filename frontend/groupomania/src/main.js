import { createApp } from "vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { faUserSecret } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import App from "./App.vue"

import router from "./router"

library.add(fas, faUserSecret)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount("#app")


