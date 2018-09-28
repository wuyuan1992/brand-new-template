import React from 'react';
import { Fade, Modal, Toast, Picker } from '../components';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal : false,
            showToast : false,
            showPicker : false,
        }
    }

    render(){
        return (
            <Fade {...this.props} >
                <h1>Home</h1>
                <button
                    onClick={()=>{ this.setState({ showModal: true }) }}
                > show Modal </button>
                <button
                    onClick={()=>{ this.setState({ showToast: true }) }}
                > show Toast </button>
                {/* {
                    this.state.showModal && (
                        <Modal
                            onDismiss={()=>{ this.setState({ showModal: false }) }}
                        >
            
                            <div
                                // onClick={()=>{ this.setState({ showModal: false }) }}
                            >
                                <p
                                    style={{
                                        width:'80%', border:'1px solid #EDEDED',
                                        margin: '0 auto',
                                        background:'#FFF'
                                    }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Laboriosam officiis numquam sed minus repudiandae vero culpa pariatur
                                    ea repellat cumque! Atque, in delectus. Illum ipsa maxime minima minus,
                                    mollitia modi?
                                </p>
                            </div>
                        </Modal>
                    )
                } */}
                
                <Toast
                    show = { this.state.showToast }
                    onDismiss={()=>{ this.setState({ showToast: false }) }}
                >
                    toast
                </Toast>
            </Fade>
        )
    }
}