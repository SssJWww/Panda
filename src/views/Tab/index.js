import React, { Component } from 'react'
import style from './index.module.scss'
import Navbar from '../Navbar';
import Axios from 'axios';
class Tab extends Component {
    state={
        datalist:null
    }
    render() {
        return (
            <div>
                <div className={style.yellow}>
                    <input type="text" placeholder="搜索商品，发现更多优选" />
                    <i className="iconfont icon-search"></i>
                </div>
                <Navbar></Navbar>
            </div>
        )
    }
}
export default Tab