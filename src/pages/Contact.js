import React from 'react';
import { Fade, ProgressLine } from '../components';

export default function Contact(props){
    return (
        <Fade {...props}>
            <h1>Contact</h1>
            
            <ProgressLine
                currentStep = { 1 }
                progress = {[
                    {
                        step: 1,
                        txt:'提交订单'
                    },
                    {
                        step: 2,
                        txt:'审核订单'
                    },
                    {
                        step: 3,
                        txt:'完成订单'
                    }
                ]}
            />
        </Fade>
    )
}