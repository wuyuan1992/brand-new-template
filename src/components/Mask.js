import React from 'react';
import ReactDOM from 'react-dom';

const maskRoot = document.getElementById('mask-root');

export default class BaseModal extends React.Component{
    constructor(props){
        super(props);

        this.el = document.createElement('div');
    }


    componentDidMount(){
        maskRoot.appendChild(this.el);
    }


    componentWillUnmount(){
        maskRoot.removeChild(this.el);
    }


    render(){
        return ReactDOM.createPortal(
                this.props.children,
                this.el
            );
    }
}