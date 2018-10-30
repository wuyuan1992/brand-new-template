import React from 'react';
import { Fade, ImageUploader } from '../components';

class Contact extends React.Component{

    constructor(){
        super();

        this.state = {

        };

        this.uploaderChanged = this.uploaderChanged.bind(this);
    }

    uploaderChanged(file, result){
        console.log(file);
    }


    render(){
        const {preview} = this.state;
        return (
            <Fade {...this.props}>
            <h1>Contact</h1>

            <ImageUploader onChange={ this.uploaderChanged }/>
        </Fade>
    )
    }
}

export default Contact;