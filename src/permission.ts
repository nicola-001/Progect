import router from "@/router";
import {useNProgress} from "@/hooks/web/useNprogress";
import {getAccessToken, removeToken} from "@/utils/auth";
import {useUserStore} from "@/stores/modules/user";

// 路由重定向白名单
const whiteList = [
    '/login',
]
// 引入滚动条加载效果
const {start, done} = useNProgress()
//前置路由守卫
router.beforeEach(async (to, from, next) => {

    const userStore = useUserStore(); // 引入仓库中的信息
    start()     // 滚动条加载效果
    const token = getAccessToken() // 获取token信息
    const userInfo = userStore.name // 获取个人信息
    if (token) {
        console.log('有token')
        // 有token
        if (userInfo) {
            console.log('有token，有个人信息，放行')
            //有个人信息
            next()
        } else {
            try {
                console.log('有token,没有个人信息,获取个人信息，放行')
                //     没有个人信息
                await userStore.getUserInfo()
                next()
            } catch (e) {
                console.log('cache')
                //     退出登录
                removeToken()
                next({path: '/login'})
                // next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
            }
        }

    } else {
        console.log('没有token')
        if (whiteList.indexOf(to.path) !== -1) {
            console.log('没有tokne,进入白名单')
            next()
        } else {
            console.log('没有token,没进入白名单，直接返回登录页')
            next({path: '/login'})
        }
    }
})
//路由后置守卫
router.afterEach((to) => {
    // 可以在这里设置页签标题...
    done() // 结束Progress
})
