import React from 'react'
import { CSSTransition } from 'react-transition-group'

const Anim = ({children, anim, ...rest})=> (
    <CSSTransition {...rest} timeout={300} classNames="fade" unmountOnExit >
        <div style={{ position:'absolute', left: 15, right: 15  }}>
            { children }
        </div>
    </CSSTransition>
)
export default Anim;