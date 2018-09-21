import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './Fade.css';

export default ({children, ...props})=>{
    console.log()
    return (
        <CSSTransition {...props} timeout={300} className="fade" unmountOnExit >
            <div style={{position:'absolute'}}>
                { children }
            </div>
        </CSSTransition>
    )
}