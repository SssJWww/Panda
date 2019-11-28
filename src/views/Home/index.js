import React, { Component } from 'react'
import style from './index.module.scss'
import Navbar from '../Navbar';
import Swiper from '../../component/Swiper'
import Shop from '../../component/Shop';
class Home extends Component {
    render() {
        return (
            <div>
                <div className={style.yellow}>
                    <input type="text" placeholder="搜索商品，发现更多优选"/>
                    <i className="iconfont icon-search"></i>
                </div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Shop></Shop>
            </div>
        )
    }
}
export default Home