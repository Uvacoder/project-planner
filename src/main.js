import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import 'material-icons/iconfont/filled.css';

// import 'material-icons/iconfont/material-icons.css';

createApp(App).use(router).use(autoAnimatePlugin).mount('#app')
