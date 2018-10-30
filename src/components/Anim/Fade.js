import React from 'react'
import { CSSTransition } from 'react-transition-group'


export default function Fade({children, ...rest}){
    console.log({...rest});
    return (
        <CSSTransition {...rest} timeout={300} classNames="fade" unmountOnExit >
            <div style={{ position:'absolute', left: 15, right: 15  }}>
                { children }
            </div>
        </CSSTransition>
    )
}