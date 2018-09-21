
import React from 'react';
import ReactDOM from 'react-dom';

import { Loading } from "@components/Loading/Loading"

export class LoadingService {

    static count = 0;

    // 打开 Modal
    static open() {
        console.log('open begin : ' + LoadingService.loadingWrapper);

        if (!LoadingService.loadingWrapper) {
            LoadingService.loadingWrapper = document.createElement('div');
            ReactDOM.render(Loading(), LoadingService.loadingWrapper);

            const rootEle = document.getElementById('root')
            rootEle.appendChild(LoadingService.loadingWrapper);
        }

        LoadingService.count++;
        console.log('open end : ' + LoadingService.count);

    }

    // 关闭 Modal
    static dismiss() {
        if (LoadingService.count > 0) {
            --LoadingService.count;
        }
        console.log('dismiss begin: ' + LoadingService.count);
        console.log('dismiss: ' + LoadingService.loadingWrapper);
        if (LoadingService.count == 0) {
            console.log(LoadingService.loadingWrapper);
            if (!!LoadingService.loadingWrapper) {
                LoadingService.loadingWrapper.remove();
                LoadingService.loadingWrapper = void(0);
            }
        }
    }

    static forceDismiss() {
        LoadingService.count = 0;
        if (!!LoadingService.loadingWrapper) {
            LoadingService.loadingWrapper.remove();
            LoadingService.loadingWrapper = void(0);
        }
    }
}