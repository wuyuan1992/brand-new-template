/********
 * 为路由加上动画
 * ********/

import React from 'react'
import { CSSTransition } from 'react-transition-group'

export function routeAnim(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CSSTransition timeout={300} className="fade" unmountOnExit >
                <div style={{position:'absolute'}}>
                    <WrappedComponent {...this.props} />
                </div>
            </CSSTransition>
        )
    }
  };
}
