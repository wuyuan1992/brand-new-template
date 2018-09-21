import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './Fade.css';

export default function Fade({children}){
    return (
        <CSSTransition in timeout={300} className="fade" unmountOnExit >
            <div style={{ position:'absolute', left: 15, right: 15  }}>
                { children }
            </div>
        </CSSTransition>
    )
}