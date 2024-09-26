/*
 * 配置浏览器本地存储的方式，可直接存储对象数组。
 */
import WebStorageCache from 'web-storage-cache'
// 类型设置
type CacheType = 'localStorage' | 'sessionStorage'

export const CACHE_KEY = {
    // 用户相关
    ROLE_ROUTERS: 'roleRouters',
    USER: 'user',
    // 系统设置
    IS_DARK: 'isDark',
    LANG: 'lang',
    THEME: 'theme',
    LAYOUT: 'layout',
    DICT_CACHE: 'dictCache',
    // 登录表单
    LoginForm: 'loginForm',
    TenantId: 'tenantId'
}

// 这个函数通过 WebStorageCache创建了一个缓存实例 wsCache，它基于传入的 storage 类型来确定使用哪种浏览器存储机制。
export const useCache = (type: CacheType = 'localStorage') => {
    const wsCache: WebStorageCache = new WebStorageCache({
        storage: type
    })

    return {
        wsCache
    }
}

// 删除与用户相关的缓存数据，保留表单数据
export const deleteUserCache = () => {
    const { wsCache } = useCache()
    wsCache.delete(CACHE_KEY.USER)
    wsCache.delete(CACHE_KEY.ROLE_ROUTERS)
    // 注意，不要清理 LoginForm 登录表单
}