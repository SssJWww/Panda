import React, { Component } from 'react'
import Axios from 'axios'
import { Carousel, WingBlank } from 'antd-mobile';

class DetailSwiper extends Component {
    state = {
        data: [],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        Axios.get(`http://www.xiongmaoyouxuan.com/api/detail?id=${this.props.match.params.id}&normal=1&sa=`).then(res => {
            // console.log(res.data.data.detail.photo)
            this.setState({
                data: res.data.data.detail.photo
            })

        })
    }
    render() {
        // console.log(this.props.match.params.id)
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val.itemId}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={val.url}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default DetailSwiper