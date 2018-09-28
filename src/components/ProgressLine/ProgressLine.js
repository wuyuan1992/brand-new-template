import React from 'react';
import './ProgressLine.scss';


const stepDuration = 300;
const dotDuration = 100;
const lineDuration = 100;
const frame = 60;

class Step extends React.Component{
    constructor(props){
        super(props);

        this.leftLineTimer = null;
        this.rightLineTimer = null;
        this.dotTimer = null;

        this.state = {
            dotRate: 0,
            leftLineRate: 0,
            rightLineRate: 0,
        }
    }

    componentDidMount(){
        this.clearAll();

        const { step, currentStep, type} = this.props;

        console.log(step, currentStep, type);
        if(step <= currentStep){
            // this.triggerAnim(step-1 * stepDuration, type);
        }
    }

    componentWillUnmount(){
        this.clearAll();
    }

    triggerAnim(delay, type){
        let leftDelay = delay;
        let dotDelay = delay + lineDuration;
        let rightDelay = delay + dotDuration + lineDuration;

        setTimeout(this.triggerLeftLine, leftDelay);
        setTimeout(this.triggerDot, dotDelay);
        setTimeout(this.triggerRightLine, rightDelay);
    }

    triggerLeftLine(){
        this.leftLineTimer = setInterval(()=>{
            if(this.state.leftLineRate>=100){
                this.clear(this.leftLineTimer);
            }
            this.setState({
                leftLineRate: this.state.leftLineRate + 100/frame
            })
        }, lineDuration/frame)
    }

    triggerDot(){
        this.dotTimer = setInterval(()=>{
            if(this.state.dotRate>=100){
                this.clear(this.dotTimer);
            }
            this.setState({
                dotRate: this.state.dotRate + 100/frame
            })
        }, dotDuration/frame)
    }

    triggerRightLine(){
        this.rightLineTimer = setInterval(()=>{
            if(this.state.rightLineRate>=100){
                this.clear(this.rightLineTimer);
            }
            this.setState({
                rightLineRate: this.state.rightLineRate + 100/frame
            })
        }, lineDuration/frame)
    }

    
    clear(timer){
        clearInterval(timer);
        timer = null;
    };
    clearAll(){
        this.clear(this.dotTimer);
        this.clear(this.leftLineTimer);
        this.clear(this.rightLineTimer);
    }

    render(){
        const { children, step, type } = this.props;

        const { dotRate, leftLineRate, rightLineRate } = this.state;
        
        return (
            <div className="step">
                { children }
                {
                    type!=='start' && (
                        <span
                            style={{ background: `linear-gradient(90deg , blue 0%, blue ${ leftLineRate }%, #ccc ${ leftLineRate }%, #ccc 100%)` }}
                            className={`line left`}>
                        </span>
                    )
                }

                <span
                    style={{ background: `linear-gradient(90deg , blue 0%, blue ${ dotRate }%, #ccc ${ dotRate }%, #ccc 100%)` }}
                    className="step">{ step }
                </span>

                {
                    type!=='end' && (
                        <span
                            style={{ background: `linear-gradient(90deg , blue 0%, blue ${ rightLineRate }%, #ccc ${ rightLineRate }%, #ccc 100%)` }}
                            className={`line right`}>
                        </span>  
                    )
                }
            </div>
        )
    }
}

export default class ProgressLine extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }


    render(){
        const { currentStep, progress } = this.props;

        return (
            <div className="progress-line">
                {
                    progress.map(({txt, step}, index)=>{
                        const type = index === 0?'start':index===progress.length-1?'end':'';
                        return (
                            <Step {...{ step, currentStep, type} }>{ txt }</Step> 
                        )
                    })
                }
            </div>
        )
    }
}