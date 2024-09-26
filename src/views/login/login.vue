<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {reqCaptcha, reqFeeList, reqLogin} from "@/api/login/login";
import {setToken} from "@/utils/auth";
import {useUserStore} from "@/stores/modules/user";

defineOptions({
  name: "MyLogin"
})
// 获取仓库中的数据
const userStore = useUserStore();

// 收集表单数据
const formData = reactive({
  username: 'user',
  password: '123456',
  captchaCode: '',//验证码
  captchaKey: ''//验证码key
})
// 存储验证码信息
const code = ref()

// 获取验证码
const getCaptcha = async () => {
  const data = await reqCaptcha()
  code.value = data.image
  formData.captchaKey = data.key
}
// 登录
const Login = async () => {
  const data = await reqLogin(formData)
  setToken(data)
}
// 获取杂费信息
const getFeeList = async () => {
  const result = await reqFeeList()
  console.log(result)
}
// 获取杂费信息
const Fee = async () => {
  //获取杂费信息
  await getFeeList()
}
// 获取用户信息
const userInfo = () => {
  userStore.getUserInfo()
}
onMounted(() => {
//   获取验证码
  getCaptcha()

})
</script>

<template>
  <div class="container">
    <el-form :model="formData" label-width="120">
      <el-form-item label="账号" style="width: 300px">
        <el-input v-model="formData.username"/>
      </el-form-item>
      <el-form-item label="密码" style="width: 300px">
        <el-input
            type="password"
            v-model="formData.password"
            show-password
        />
      </el-form-item>
      <el-form-item label="验证码" style="width: 300px">
        <el-input
            v-model="formData.captchaCode"
            style="width: 200px"
        />
        <img :src="code" alt="" @click="getCaptcha">
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Login">登录</el-button>
      </el-form-item>
    </el-form>
    <el-button @click="Fee">获取杂费</el-button>
    <el-button @click="userInfo">获取用户信息</el-button>
  </div>

</template>

<style scoped>
.container {
  margin: 100px 35%;
}
</style>