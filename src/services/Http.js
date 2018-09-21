import axios from 'axios';
import { LoadingService } from './shared/services/loading';

axios.interceptors.request.use((config) => {
    LoadingService.open();
    return config;
});
axios.interceptors.response.use((config) => {
    LoadingService.dismiss();
    return config;
});




export class HttpService {

    static BASE_URL = "/mp/v1";

    get(url, data) {
        return new Promise(async (resolve, reject) => {
            axios.get(HttpService.BASE_URL + url, { params: data })
                .then(res => {
                    HttpService.handleResponse(res.data, resolve, reject);
                })
                .catch(err => {
                    HttpService.handleErr(err, reject);
                });
        });
    };

    post(url, data) {
        return new Promise(async (resolve, reject) => {
            axios.post(HttpService.BASE_URL + url, data)
                .then(res => {
                    HttpService.handleResponse(res.data, resolve, reject);
                })
                .catch(err => {
                    HttpService.handleErr(err, reject);
                });
        });
    };




    static get(url, data) {
        return new Promise(async (resolve, reject) => {
            axios.get(HttpService.BASE_URL + url, { params: data })
                .then(res => {
                    HttpService.handleResponse(res.data, resolve, reject);
                })
                .catch(err => {
                    HttpService.handleErr(err, reject);
                });
        });
    };

    static post(url, data) {
        return new Promise(async (resolve, reject) => {
            axios.post(HttpService.BASE_URL + url, data)
                .then(res => {
                    HttpService.handleResponse(res.data, resolve, reject);
                })
                .catch(err => {
                    HttpService.handleErr(err, reject);
                });
        });
    };

    // http service 内部方法

    // 处理响应
    static handleResponse(res, resolve, reject) {
        let response = {
            success: false,
            err: {
                code: 400,
                msg: '未响应 code',
            },
            data: null
        };
        switch (res.code) {
            case 200:
                response = {
                    success: true,
                    data: res.data
                };
                break;
            case 30004:
            case 30005:
                response.err = {
                    code: 30000,
                    msg: res.msg || '密码错误'
                };
                break;
            case 400:
            case 500:
                response.err = {
                    code: 400,
                    msg: res.msg || '服务器响应错误'
                };
                break;
            case 203:
                response.err = {
                    code: 203,
                    msg: res.msg || 'token 过期'
                };
                break;
            default:
                response.err = res;
                break;
        }

        if (response.success) {
            resolve(response.data);
        } else {
            

            reject(response.err);
        }
    }

    // 处理错误
    static handleErr(err, reject) {
        reject(err);
    }
}
