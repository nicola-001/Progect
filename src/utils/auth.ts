import {CACHE_KEY, useCache} from "@/hooks/web/useCache";

const {wsCache} = useCache()

const AccessTokenKey = 'ACCESS_TOKEN'
const RefreshTokenKey = 'REFRESH_TOKEN'

// 获取token
export const getAccessToken = () => {
    // 此处与TokenKey相同，此写法解决初始化时Cookies中不存在TokenKey报错
    return wsCache.get(AccessTokenKey) ? wsCache.get(AccessTokenKey) : wsCache.get('ACCESS_TOKEN')
}

// 刷新token
export const getRefreshToken = () => {
    return wsCache.get(RefreshTokenKey)
}

// 设置token
export const setToken = (token: any) => {
    wsCache.set(AccessTokenKey, token)
}
// 删除token
export const removeToken = () => {
    wsCache.delete(AccessTokenKey)
    wsCache.delete(RefreshTokenKey)
}

/** 格式化token（jwt格式） */
export const formatToken = (token: string): string => {
    return 'Bearer ' + token
}
// ========== 租户相关 ==========

export const getTenantId = () => {
    return wsCache.get(CACHE_KEY.TenantId)
}
