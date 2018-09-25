import React from 'react'; 

export default class Swipe extends React.Component{
    constructor(props){
        super(props);

        // 逻辑上不需要存在 state 中
        this.pageXData = [];
        this.pageYData = [];

        this.state= {
            leastMove: 5, // 最少触发 5个 move
            leastDistance: 25 // 最少移动 25px
        }

        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
    }

    onTouchMove(e){
        if(this.props.capture){
            // e.preventDefault();
            e.stopPropagation();
        }
        const { pageX, pageY} = e.nativeEvent.changedTouches[0];

        this.pageXData.push(pageX);

        this.pageYData.push(pageY);
    }

    onTouchEnd(e) {
        if(this.props.capture){
            // e.preventDefault();
            e.stopPropagation();
        }
        const { leastMove, leastDistance } = this.state;
        // 是否只在一个方向触发
        const { both } = this.props;

        // 保证组件可以只做部分监听
        let emptyFunc = ()=>{ };

        const { onSwipeUp=emptyFunc, onSwipeDown=emptyFunc, onSwipeLeft=emptyFunc, onSwipeRight=emptyFunc } = this.props;

        const events = {
            'up': onSwipeUp,
            'down': onSwipeDown,
            'left': onSwipeLeft,
            'right': onSwipeRight
        }
        let horizontal, vertical;

        // 判断左右
        let lenX = this.pageXData.length;
        const [ firstX, lastX, secondLastX ] = [this.pageXData[0], this.pageXData[lenX - 1], this.pageXData[lenX - 2]];
        if (
            // 至少有某一个监听需求
            (onSwipeLeft !==emptyFunc || onSwipeRight!==emptyFunc) &&
            // 触发的阈值
            lenX > leastMove && Math.abs(firstX - lastX) >= leastDistance
        ) {
            horizontal = lastX > secondLastX ? 'right' : 'left';
        }

        
        // 判断上下
        let lenY = this.pageYData.length;
        const [ firstY, lastY, secondLastY ] = [this.pageYData[0], this.pageYData[lenY - 1], this.pageYData[lenY - 2]];
        if (
            // 至少有某一个监听需求
            (onSwipeUp !==emptyFunc || onSwipeDown!==emptyFunc) &&
            // 触发的阈值
            lenY > leastMove && Math.abs(firstY - lastY) >= leastDistance
        ) {
            console.log(lastY > secondLastY);
            vertical = lastY > secondLastY ? 'down' : 'up';
        }

        if( !horizontal && !vertical  ){
            // 都未成功触发
        }
        // 如果至少有 1个方向成功触发
        else if( horizontal || vertical ){
            events[ horizontal || vertical ]();
        }
        // 成功触发两个方向；且允许同时触发
        else if(both){
            events[horizontal]();
            events[vertical]();
        }
        //  只允许触发移动幅度更大那个方向
        // 根据最终速度的大小选择触发哪个方向
        else{
            events[ Math.abs(firstX - secondLastX)> Math.abs(firstY - secondLastY) ? horizontal : vertical ]();
        }

        // 清空记录
        this.pageXData = [];
        this.pageYData = [];
    }

    componentWillUnmount(){
        // 清空记录
        this.pageXData = [];
        this.pageYData = [];
    }

    render(){
        const { style, className, children } = this.props;

        return (
            <div
                style={ style }
                className = { `swipe ${className}` }
                onTouchMove={ this.onTouchMove }
                onTouchEnd={ this.onTouchEnd }
            > { children } </div>
        )
    }
}