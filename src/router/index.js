import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import React from 'react'
import App from '../App'
import Nine from '../views/Nine'
import Huge from '../views/Huge'
import Girls from '../views/Girls'
import Home from '../views/Home'
import Tab from '../views/Tab'
import Detail from '../views/Detail'
import Column from '../views/Column';
import Bag from '../views/Bag';
import Category from '../views/Category';
import Search from '../views/Search';
import S from '../views/S';
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
                <Route path="/column/:id" component={Column}></Route>
                <Route path="/bag/:id" component={Bag}></Route>
                <Route path="/category/:id" component={Category}></Route>
                <Route path="/search" component={Search}></Route>
                <Route path="/s/:word" component={S}></Route>
                <Redirect from="/" to="/home"></Redirect>
            </Switch>
        </App>
    </HashRouter>
)

export default router