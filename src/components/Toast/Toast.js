import React from 'react';
import { Mask } from '../';
import './Toast.scss';
import { conditionShow } from '../../util/render';
import { Fade } from '../';

export default class Toast extends React.Component{
    constructor(props){
        super(props);
        this.timer = null;
        this.state={
            autoDismissTime: 15000
        }
    }

    componentDidMount(){
        this.autoDismiss();
    }

    componentWillReceiveProps(nextProps){
        if(!this.props.show && nextProps.show){
            this.autoDismiss();
        }
    }

    autoDismiss(){
        this.timer = setTimeout(()=>{
            this.props.onDismiss();
        }, this.props.timeout || this.state.autoDismissTime)
    }

    componentWillUnmount(){
        clearTimeout(this.timer);
        this.timer = null;
    }

    render(){
        const { show , children } = this.props;
        

        return conditionShow(show, (
                <Mask>
                    <div className="toast">
                        <Fade in={show}>
                            <div className="toast-content">
                                { children }
                            </div>
                        </Fade>
                    </div>
                </Mask>
            )
        ) 
    }
}