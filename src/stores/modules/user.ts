import {defineStore} from "pinia";
import {reqUserInfo} from "@/api/login/login";

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
        avatarUrl: ''
    }),
    actions: {
        async getUserInfo() {
            try {
                const data = await reqUserInfo()
                // 存储用户名称
                this.name = data.name
                // 存储用户头像
                this.avatarUrl = data.avatarUrl
                // promise成功的回调
                return 'ok'
            } catch (e) {
                // 作为promiss失败的回调的值返回
                return Promise.reject(new Error(e as string))
            }
        }
    }
})
