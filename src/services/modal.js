/**************
 * 
 * 模态框
 * 
 * ***********/
                           
import React from 'react';
import ReactDOM from 'react-dom';

import { forbidScroll } from './util';

class Modal extends React.Component{
    
    render(){
        if(!this.props.showModal){
            return ('');
        }

        return (
            <div className="modal animate fade-in" draggable="false" onTouchMove={ forbidScroll }>
                {
                    this.props.children
                }
            </div>
        )
    }
}

export class ModalService{
    modalRoot = document.getElementById('modal');
    el = document.createElement('div');
    // 打开 Modal
    open(modalComponent){
        this.modalRoot.appendChild(this.el);
        const modal = (
            <Modal>
                { modalComponent }
            </Modal>
        );
        const portal = ReactDOM.createPortal( modal,  this.el);
        console.log(portal);
    }
    
    // 关闭 Modal
    dismiss(){
        this.modalRoot.removeChild(this.el);
    }
}