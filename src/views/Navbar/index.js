import React, { Component } from 'react'
import style from './index.module.scss'
import { NavLink } from 'react-router-dom'
import Axios from 'axios';
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import Clothes from '../../component/Clothes';
class Navbar extends Component {
    state = {
        datalist: null,
        isShow: false,
        piclist: null
    }
    render() {
        // console.log(this.props)
        return (
            <div className={style.nav + " " + (this.props.isFixed ? style.fix : style.unfix)}>
                <div className={style.now}>
                    <NavLink to={"/home"} activeClassName={style.check}>今日推荐</NavLink>
                </div>
                <div className={style.multi}>
                    <div className="swiper-container shishishi">
                        <div className="swiper-wrapper">
                            {this.state.datalist ? this.state.datalist.map((item, index) => {
                                return <div className="swiper-slide" key={item.id}><NavLink to={`/tab/${item.id}`} activeClassName={style.check}>{item.name}</NavLink></div>
                            }) : null}
                        </div>
                    </div>
                </div>
                <div>
                    <i className={"iconfont icon-category" + " " + style.iconfont} onClick={() => { this.clickShow() }}></i>
                </div>
                <div className={this.state.isShow ? style.hide : style.shiwei}>
                    <div className={style.all}>
                        <div className={style.lei}>全部分类</div>
                        <i onClick={() => { this.clickHide() }} className={"iconfont icon-close" + " " + style.false} ></i>
                    </div>
                    <div className={style.cloth}>
                        <ul>
                            {this.state.piclist ? this.state.piclist.map(coco => {
                                return <Clothes key={coco.id} data={coco}></Clothes>
                            }) : null}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    clickHide = () => {
        this.setState({
            isShow: false
        })
    }
    clickShow = () => {
        this.setState({
            isShow: true
        })
    }

    componentDidMount() {
        Axios.get("http://www.xiongmaoyouxuan.com/api/tabs?sa=").then(res => {
            console.log(res.data.data.list.slice(1))
            this.setState({
                datalist: res.data.data.list.slice(1)
            }, () => {
                new Swiper('.shishishi', {
                    centeredSlides: false,
                    slidesPerView: 3.5,
                    spaceBetween: 10,
                    slideToClickedSlide: true
                });
            })
        })

        Axios.get("http://www.xiongmaoyouxuan.com/api/tabs?sa=").then(res => {
            console.log(res.data.data.list)
            this.setState({
                piclist: res.data.data.list
            })
        })

    }
}
export default Navbar