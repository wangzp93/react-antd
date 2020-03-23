import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

import Form from './view/Form'
import Table from './view/Table'
import Modal from './view/Modal'
import Message from './view/Message'
import Drawer from './view/Drawer'

/* export default class ReactRouter extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path={form} component={FormDemo}></Route>
            </Router>
        )
    }
} */

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Form}/>
            <Route exact path="/table" component={Table}/>
            <Route exact path="/modal" component={Modal}/>
            <Route exact path="/message" component={Message}/>
            <Route exact path="/drawer" component={Drawer}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;