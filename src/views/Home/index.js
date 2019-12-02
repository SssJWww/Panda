import React, { Component } from 'react'
import style from './index.module.scss'
import Navbar from '../Navbar';
import Shop from '../../component/Shop';
import Hot from '../Hot';
import ScrollTop from '../../component/ScrollTop';
import Huadong from '../../component/Swiper';
class Home extends Component {
    render() {
        return (
            <div>
                <div className={style.yellow}>
                    <input type="text" placeholder="搜索商品，发现更多优选" onClick={()=>{this.clickInput()}} />
                    <i className="iconfont icon-search"></i>
                </div>
                <Navbar {...this.props}></Navbar>
                <Huadong></Huadong>
                <Shop></Shop>
                <Hot {...this.props}></Hot>
            </div>
        )
    }
    clickInput=()=>{
        this.props.history.push(`/search`)
    }
}
export default ScrollTop(Home) 