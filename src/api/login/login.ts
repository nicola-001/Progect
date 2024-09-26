import request from '@/config/axios'
// 获取验证码
export const reqCaptcha = () => {
    return request.get({ url: '/admin/login/captcha' })
}
// 登录
export const reqLogin = (data:any) => {
    return request.post({ url: '/admin/login', data:data })
}
// 获取用户信息
export const reqUserInfo = () => {
    return request.get({url: '/admin/info'})
}
//查询全部杂费名称和杂费值列表
export const reqFeeList = () => {
    return request.get({ url: '/admin/fee/list' })
}