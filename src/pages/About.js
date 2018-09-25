import React from 'react';

import { Anim, Tabs } from '../components';


export default function About(props){
    return (
        <Anim {...props}>
            <Tabs
                activeIndex = {1}
                tabs = {[
                    {title:'tab1', content: <h1>tab1 content</h1> },
                    {title:'tab2', content: <h1>tab2 content</h1> },
                ]}
            />
        </Anim>
    )
}