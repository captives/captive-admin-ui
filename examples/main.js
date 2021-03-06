import Vue from 'vue'
import Main from './Main.vue'


//编译后(项目使用)
// import "../packages/theme/lib/index.css";

//源码(开发时使用)
import "../packages/theme/src/index.scss";

import AdminUI from '../src';

//全体注册
Vue.use(AdminUI, { size: 'small' });


//按需引用
// const { Button, Fullscreen } = AdminUI;
// import { Button, Fullscreen, Menu } from '../src';

// Vue.component(Button.name, Button);
// Vue.component(Fullscreen.name, Fullscreen);
// Vue.component(Menu.name, Menu);

Vue.config.productionTip = false;
new Vue({ render: h => h(Main) }).$mount('#app')