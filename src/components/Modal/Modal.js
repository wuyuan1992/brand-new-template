import React from 'react';
import { Mask } from '../';
import './Modal.scss';

export default class Modal extends React.Component{
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        console.log(e.target.className);
        if(e.target.className === 'modal'){
            console.log(11111);
            this.props.onDismiss();
        };
    }

    render(){
        const { children, onDismiss } = this.props;
        return (
            <Mask>
                <div className="modal" onClick = { this.onClick }>
                    { children }
                </div>
            </Mask>
        )
    }
}