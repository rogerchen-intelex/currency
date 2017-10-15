import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home.js'
import RateList from './components/rate-list'

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/ratelist' component={RateList} />
            </Switch>
        )
    }
}