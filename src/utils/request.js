import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 5000 // request timeout
})

// response interceptor
service.interceptors.response.use(
    response => response,
    /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
     * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
     */
    // response => {
    //   const res = response.data
    //   if (res.code !== 0) {
    //     return Promise.reject('error')
    //   } else {
    //     return response.data
    //   }
    // },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service
