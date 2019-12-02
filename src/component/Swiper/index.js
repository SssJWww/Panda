import React, { Component } from 'react'
import Swiper from 'swiper'
import './index.css'
import 'swiper/css/swiper.min.css'
import Axios from 'axios'

class Huadong extends Component {
    state = {
        datalist: []
    }
    render() {
        // console.log(this.state.datalist)

        return (
            <div>
                <div className="swiper-container www" key={this.state.datalist.id}>
                    <div className="swiper-wrapper xxx">
                        {this.state.datalist.map(item=>{
                            return <div className="swiper-slide" key={item.id}>
                                <img alt="123" className="tututu" src={item.imageUrl}/>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        Axios.get("http://www.xiongmaoyouxuan.com/api/tab/1?start=0").then(res => {
            // console.log(res.data)
            this.setState({
                datalist: res.data.data.banners
            },()=>{
                new Swiper(".www",{
                    loop:true,
                    autoplay:true
                })
            })
        })
    }
}
export default Huadong