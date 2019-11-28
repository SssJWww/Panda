import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import Axios from 'axios'
class Swiper extends Component {
    state = {
        data: null,
        imgHeight: 176,
      }
       componentDidMount() {
        // simulate img loading
        Axios.get("http://www.xiongmaoyouxuan.com/api/tab/1?start=0").then(res=>{
            // console.log(res.data.data.banners)
            this.setState({
                data:res.data.data.banners
            })
        })
      }
      render() {
        return (
          <WingBlank>
            <Carousel
              autoplay={true}
              infinite
              dots={true}
            >
              {this.state.data?this.state.data.map(val => (
                <a
                  key={val}
                  onClick={()=>{this.changePage()}}
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={val.imageUrl}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              )):null}
            </Carousel>
          </WingBlank>
        );
      }
      changePage=()=>{
          console.log("111")
      }
    }
export default Swiper