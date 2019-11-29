import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import Axios from 'axios'
import './index.css'
class Slide extends Component {
    state = {
        datalist: []
    }
    render() {
        return (
            <div>
                <div className="swiper-container sss">
                    <div className="swiper-wrapper">
                        {this.state.datalist.map((item,index) => {
                            return <div className="swiper-slide" key={index}>
                                <img src={item.image} className="slide_img" alt="123" onClick={()=>{this.clickImg(item.id)}}/>
                                <p className="desc">{item.qunTitle.replace("【","").replace("】","")}</p>
                                <h3 className="price">¥{(item.price).toString().split(".")[0]}.<span>{(item.price).toString().split(".")[1]}</span></h3>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
    clickImg=(id)=>{
        console.log(this.props)
        this.props.history.push(`/detail/${id}`)
    }
    componentDidMount() {
        Axios.get("http://www.xiongmaoyouxuan.com/api/tab/1?start=0").then(res => {
            // console.log(res.data)
            this.setState({
                datalist: res.data.data.topList
            }, () => {
                new Swiper('.sss', {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    centeredSlides: false,
                });
            })

        })
    }
}
export default Slide