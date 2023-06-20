import axiosPackage, { AxiosInstance } from 'axios'

interface Axios extends AxiosInstance {
    CancelToken?: any
    isCancel?: any
}

const axios: Axios = axiosPackage.create({
    withCredentials: false,
    baseURL: "http://localhost:5000"
})

axios.defaults.headers.common.Accept = 'application/json'
axios.CancelToken = axiosPackage.CancelToken
axios.isCancel = axiosPackage.isCancel

export default axios
