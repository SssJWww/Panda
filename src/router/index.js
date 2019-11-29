import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import React from 'react'
import App from '../App'
import Nine from '../views/Nine'
import Huge from '../views/Huge'
import Girls from '../views/Girls'
import Home from '../views/Home'
import Tab from '../views/Tab'
import Detail from '../views/Detail'
const router = (
    <HashRouter>
        <App>
            <Switch>
                <Route path="tab"></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/nine" component={Nine}></Route>
                <Route path="/huge" component={Huge}></Route>
                <Route path="/girls" component={Girls}></Route>
                <Route path="/tab/:id" component={Tab} exact></Route>
                <Route path="/detail/:id" component={Detail} exact></Route>
                <Redirect from="/" to="/home"></Redirect>
                <Redirect from="/tab/1" to="home"></Redirect>
            </Switch>
        </App>
    </HashRouter>
)

export default router