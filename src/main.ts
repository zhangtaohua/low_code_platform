import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/assets/style/font.scss";
import "@/assets/style/normalize.css";
import "@/assets/style/base.scss";
import "@/assets/style/flex.scss";
import "@/assets/style/general.scss";
import "@/assets/style/size.scss";
import "@/assets/style/mpgap.scss";
import "@/assets/style/reset.scss";
import "@/assets/style/olCustomStyle.scss";
import App from "./App.vue";
import router from "@/router/index";

createApp(App).use(ElementPlus).use(router).mount("#app");
