import React from 'react';
import { Mask } from '../';
import './Picker.scss';

export default class Picker extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { choices, onDismiss } = this.props;
        return (
            <Mask>
                <ul className="picker">
                    { 
                        choices.map(({ txt, val }, index)=>{
                            <li key={`choice-${index}`} onClick={ ()=>{ onDismiss(val) } }>
                                { txt }
                            </li>
                        })
                    }
                </ul>
            </Mask>
        )
    }
}