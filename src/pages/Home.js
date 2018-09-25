import React from 'react';
import Fade from '../animation/Fade/Fade';

export default function Home(props){
    return (
        <Fade {...props} >
            <h1>Home</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ullam quisquam consequatur doloremque culpa distinctio laborum reprehenderit
                voluptate ratione illo assumenda delectus, cum voluptatem officiis hic maxime?
                Unde incidunt ipsum libero?
            </p>
        </Fade>
    )
}