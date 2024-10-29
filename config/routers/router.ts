import Page1 from "@/page1";
import Page2 from "@/page2";
import Page3 from "@/page3";

const routers = [
    {
        path: '/',
        name: 'page1',
        components: Page1   // 引入pages文件下的页面
    },
    {
        path: '/B',
        name: 'page2',
        components: Page2
    },
    {
        path: '/C',
        name: 'page3',
        components: Page3
    }
]
 
export default routers;