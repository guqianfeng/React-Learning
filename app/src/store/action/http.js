import axios from 'axios'

import qs from 'qs' 

const HTTP = axios.create({
    baseURL: "/miaov", //以miaov开始的就做代理转发
    withCredentials: true,
    transformRequest: (data) => {
        return qs.stringify(data)
    }
})

export default HTTP;