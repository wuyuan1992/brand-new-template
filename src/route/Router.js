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
    { path: '/', Component: Home, title:'home' },
    { path: '/about', Component: About, title:'about' },
    { path: '/contact', Component: Contact, title:'contact' }
];

export default class AppRouter extends React.Component{
    renderFooter(){
        return (
            <ul className="footer-btns"
                style={{
                    position:'absolute', left:0, right:0, bottom:0,
                    display:'flex', alignItems:'center', justifyContent:'center' 
                }}
            >
                {
                    routes.map(({path, title}, index)=>(
                        <li
                            key={`path-${index}`}
                            style={{
                                flex:1, display:'flex', alignItems:'center', justifyContent:'center',
                                height: '4rem'
                            }}
                        >
                            <Link to={ path }>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }

    render(){
        return (
            <Router>
                <Route render={ ({ location }) =>(
                    <div>
                        {
                            this.renderFooter()
                        }

                        <div className="route" style={{ position: 'relative' }}>
                            { routes.map(({ path, Component}) => (
                                <Route key={ path } exact path={ path }>
                                    {({match})=> <Component in={ match!==null } />}
                                </Route>
                            )) }
                        </div>
                    </div>
                )} />
            </Router>
        )
    }
}