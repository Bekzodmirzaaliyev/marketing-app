import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import HeaderComponent from "./components/HeaderComponent.vue"
import SidebarComponent from "./components/SidebarComponent.vue"
import AppComponent from "./views/dashboard/components/AppComponent.vue"
import LoginComponent from "./views/login/components/LoginComponent.vue"
import ProductsComponent from "./views/dashboard/components/ProductsComponent.vue"
import BotComponent from "./views/dashboard/components/BotComponent"
import NewsComponent from "./views/dashboard/components/NewsComponent"
import SocialMediaComponent from "./views/dashboard/components/SocialMediaComponent"
import BotDetailsComponent from "./views/dashboard/components/BotDetailsComponent"
import BotAddComponent from "./views/dashboard/components/BotAddComponent"
import EditProductComponent from "./views/dashboard/components/EditProductComponent"
import AddProductComponent from "./views/dashboard/components/AddProductComponent"
import './style.css'

const app = createApp(App);
app.component('header-component', HeaderComponent)
app.component('sidebar-component', SidebarComponent)
app.component('app-component', AppComponent)
app.component('login-component', LoginComponent)
app.component('products-component', ProductsComponent)
app.component('bot-component', BotComponent)
app.component('news-component', NewsComponent)
app.component('social-component', SocialMediaComponent)
app.component('botDetails-component', BotDetailsComponent)
app.component('bot-add-component', BotAddComponent)
app.component('edit-product-component', EditProductComponent)
app.component('add-product-component', AddProductComponent)
app.component('add-product-component', AddProductComponent)

app.use(router);
app.use(ElementPlus)
app.use(VCalendar)





app.mount("#app");
