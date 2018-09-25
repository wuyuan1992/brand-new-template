import React from 'react';
import './Tabs.scss';
import Swipe from '../Swipe/Swipe';

export default class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.pageXData = [];

        this.state = {
            activeIndex: 0,
            total:0
        }
    }

    componentDidMount(){
        const { activeIndex, tabs } = this.props;
        this.setState({
            activeIndex: activeIndex || 0,
            total: tabs.length - 1
        });
    }

    swipeLeft(){
        this.setState(prevState => ({
            activeIndex: Math.min(prevState.total, prevState.activeIndex+1)
        }))
    }

    swipeRight(){
        this.setState(prevState => ({
            activeIndex: Math.max(0, prevState.activeIndex-1)
        }))
    }

    renderTitle(){
        const { tabs } = this.props;
        const { activeIndex } = this.state;

        return (
            <ul>
                { tabs.map(({title}, index)=>(
                    <li
                        key={`tab-header-${index}`}
                        className={ activeIndex === index? 'active':''}
                        onClick={ ()=>{ this.setState({ activeIndex: index }) } }
                    > { title } </li>
                )) }
            </ul>
        )
    }

    renderBody(){
        const { tabs } = this.props;
        const { activeIndex } = this.state;

        return (
            <Swipe
                capture
                onSwipeLeft={ this.swipeLeft.bind(this)}
                onSwipeRight={ this.swipeRight.bind(this)}
            >
                <ul style={{ left: `${-100 * activeIndex}%` }} >
                    {
                        tabs.map(({content}, index)=>(
                            <li
                                key={`tab-content-${index}`}
                                style={{ left: `${100 * index}%` }}
                            > { content } </li>
                        ))
                    }
                </ul>
            </Swipe>
        )
    }

    render(){
        const { tabs } = this.props;
        const { activeIndex } = this.state;
        
        return (
            <div className="tabs">
                <div className="title">
                    {
                        this.renderTitle()
                    }
                    {/* active title mark */}
                    <i style={{ left:`${ 100 * ((activeIndex+0.5) / tabs.length) }%` }}></i>
                </div>
                
                <div className="body">
                    {
                        this.renderBody()
                    }
                </div>
            </div>
        )
    } 
}