import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

declare module 'vue-router' {
    interface RouteMeta {
      title?: string;
    }
}

router.afterEach((to) => {
    const defaultTitle = 'Justin Tian';
    document.title = to.meta?.title || defaultTitle;
});

app.use(router);
app.mount('#app');