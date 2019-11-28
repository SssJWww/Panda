import React, { Component } from 'react'
import style from './index.module.scss'
import { NavLink } from 'react-router-dom'
import Axios from 'axios';
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
class Navbar extends Component {
    state = {
        datalist: null,
        current: 0
    }
    render() {
        return (
            <div className={style.nav}>
                <div className={style.now}>
                    <NavLink to={"/home"} activeClassName={style.check}>今日推荐</NavLink>
                </div>
                <div className={style.multi}>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {this.state.datalist ? this.state.datalist.map((item, index) => {
                                return <div className="swiper-slide" key={item.id} onClick={() => { this.clickPage() }}><NavLink to={`/tab/${item.id}`} activeClassName={style.check}>{item.name}</NavLink></div>
                            }) : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    clickPage = (index) => {
        this.setState({
            current: index
        })
    }

    componentDidMount() {
        Axios.get("http://www.xiongmaoyouxuan.com/api/tabs?sa=").then(res => {
            console.log(res.data.data.list.slice(1))
            this.setState({
                datalist: res.data.data.list.slice(1)
            }, () => {
                new Swiper('.swiper-container', {
                    centeredSlides: false,
                    slidesPerView: 3.5,
                    spaceBetween: 10,
                    slideToClickedSlide:true
                });

            })
        })


    }
}
export default Navbar