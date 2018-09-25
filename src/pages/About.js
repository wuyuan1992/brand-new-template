import React from 'react';
import Fade from '../animation/Fade/Fade';
import Tabs from '../components/Tabs/Tabs';


export default function About(props){
    return (
        <Fade {...props}>
            <Tabs
                activeIndex = {1}
                tabs = {[
                    {title:'tab1', content: <h1>tab1 content</h1> },
                    {title:'tab2', content: <h1>tab2 content</h1> },
                ]}
            />
        </Fade>
    )
}