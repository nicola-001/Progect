import {useCssVar} from '@vueuse/core'
import type {NProgressOptions} from 'nprogress'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {nextTick, unref} from "vue";

// 获取的是文档根元素中定义的css变量的颜色
const primaryColor = useCssVar('--el-color-primary', document.documentElement)

export const useNProgress = () => {
    // 使用进度条库，进行优化配置
    NProgress.configure({showSpinner: false} as NProgressOptions)
    // 定义异步函数，在vue的DOM更新完成后修改进度条颜色
    const initColor = async () => {
        await nextTick()
        // 获取进度条DOM的颜色
        const bar = document.getElementById('nprogress')?.getElementsByClassName('bar')[0] as ElRef
        if (bar) {
            // 如果获取到进度条的颜色，修改背景颜色为primaryColor.value
            bar.style.background = unref(primaryColor.value)
        }
    }
    // 调用函数，初始化进度条颜色
    initColor()

    //封装进度条的启动
    const start = () => {
        NProgress.start()
    }
    // 进度条的完成
    const done = () => {
        NProgress.done()
    }

    return {
        start,
        done
    }
}
