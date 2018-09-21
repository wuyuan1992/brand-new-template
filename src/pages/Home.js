import React from 'react';
import { routeAnim } from '../hoc/routAnim';

function Home(){
    return (
        <p>
            Home
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magnam nulla nemo, soluta aut debitis officiis ut tenetur velit non distinctio consequatur a odit beatae doloribus nobis suscipit laborum sequi.
        </p>
    )
}

export default routeAnim(Home);