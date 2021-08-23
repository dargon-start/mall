import axios from 'axios'

export function request(config) {
    //1、创建axios实例
    const instance = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/m5',
            timeout: 5000
        })
        //2、axios拦截器
        //请求拦截
    instance.interceptors.request.use(config => {
        //返回的为请求信息

        // console.log(config);
        //拦截之后需要返回请求信息，否则无法发送网络请求
        return config
    }, err => {
        //使用较少，一般都会请求成功
        // console.log(err);
    })

    //响应拦截
    instance.interceptors.response.use(res => {
        //返回的是服务器发来的数据
        // console.log(res);
        //拦截数据后需要将数据在返回出去，否则其他组件无法获得数据
        return res
    }, err => {
        // console.log(err);
    })


    //3、返回的是一个promise
    return instance(config)
}

// export function request(config) {
//     return new Promise((resolve, reject) => {
//         const instance = axios.create({
//                 baseURL: 'http://123.207.32.32:8000',
//                 timeout: 5000
//             })
//             //返回的是一个promise
//         instance(config).then((res) => {
//             resolve(res);
//         }).catch((err) => {
//             reject(err)
//         })

//     })
// }