import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';



const routes = [
    { path: '/', Component: Home },
    { path: '/about', Component: About },
    { path: '/contact', Component: Contact }
];

export default class AppRouter extends React.Component{
    render(){
        return (
            <Router>
                <Route render={ ({ location }) =>(
                    <div>
                        <ul>
                            <li>
                                <Link to="/">home</Link>
                            </li>
                            <li>
                                <Link to="/about">about</Link>
                            </li>
                            <li>
                                <Link to="/contact">contact</Link>
                            </li>
                        </ul>

                        <div className="route" style={{ position: 'relative' }}>
                            { routes.map(({ path, Component}) => (
                                <Route key={ path } exact path={ path }>
                                    {({match})=> <Component in={match!==null} />}
                                </Route>
                            )) }
                        </div>
                    </div>
                )} />
            </Router>
        )
    }
}