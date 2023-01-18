import { createApp } from 'vue'
import { library } from '/node_modules/@fortawesome/fontawesome-svg-core'
import { fas } from '/node_modules/@fortawesome/free-solid-svg-icons'
import { far } from '/node_modules/@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '/node_modules/@fortawesome/vue-fontawesome'
library.add(fas)
library.add(far)
import App from './App.vue'
createApp(App)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
