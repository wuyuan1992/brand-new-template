import React from 'react';
import { conditionShow, switchShow, classNames } from '../util/render';


export default class extends React.PureComponent{
    state = {
        show1:false,
        status: 'active'
    }

    toggle = (index)=>{
        this.setState({
            show1: index === 1
        })
    }

    switch = ()=>{
        this.setState(state => ({
            status: ['active', 'ternimate', 'pause'][2]
        }))
    }

    render(){
        const { show1, status } = this.state;
        const { children } = this.props;

        console.log(React.Children.count(children));

        return (
            <React.Fragment>
                {/* 注释 */}
                <h3 className = { classNames('title', { show: show1, hide:!show1 }) }>
                    { conditionShow( show1,
        
                        <button onClick={ ()=>{ this.toggle(2)} }>1</button>,
                        
                        <button onClick={ ()=>{ this.toggle(1)} }>2</button>
                    )
                    }
                </h3>

                {
                    switchShow(status, {
                        active: <div> active </div>,
                        ternimate: <div> ternimate </div>,
                        pause: <div> pause </div>,
                    })
                }

                <button onClick={ this.switch }> 切换 </button>
            </React.Fragment>
        )
    }
}