import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home.js'
import About from './About.js'

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/About' component={About} />
            </Switch>
        )
    }
}