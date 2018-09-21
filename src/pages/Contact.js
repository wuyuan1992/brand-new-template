import React from 'react';
import { routeAnim } from '../hoc/routAnim';


function Contact(){
    return (
        <p>
            Contact
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magnam nulla nemo, soluta aut debitis officiis ut tenetur velit non distinctio consequatur a odit beatae doloribus nobis suscipit laborum sequi.
        </p>
    )
}

export default routeAnim(Contact);