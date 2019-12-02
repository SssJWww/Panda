import React, { Component } from 'react'
import style from './index.module.scss'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'
class Shop extends Component {
    state = {
        girl: null,
        send: null,
        huge: null,
    }
    render() {
        return (
            <div className={style.shop} >
                {this.state.send ? <div className={style.pink} onClick={() => { this.clickShop(this.state.send) }}>
                    <img alt="123" src="//img1.lukou.com/static/coupon/p/image_link/eQC01LF4OLt6cph48QDeRQcFzKwqmska.gif" className={style.water} />
                    <h2 className={style.nine}>9块9包邮</h2>
                    <p>保你不吃亏</p>
                </div> : null}
                {this.state.huge ? <div className={style.huge} onClick={() => { this.clickNine(this.state.huge) }}>
                    <img alt="123" src="//img1.lukou.com/static/p/commodity/img/20181212-235507.png" />
                    <h2>超值大额劵</h2>
                    <p>优惠直击底价</p>
                </div> : null}
                {this.state.girl ? <div className={style.girl} onClick={() => { this.clickGirl(this.state.girl) }}>
                    <img alt="123" src="//img1.lukou.com/static/coupon/p/image_link/E34Q8C41idjxahcPcQJ12PeVwHH0qKoP.png" />
                    <h2>女装上新快抢</h2>
                    <p>每日更新</p>
                </div> : null}
            </div>
        )
    }
    clickShop = (id) => {
        this.props.history.push(`/bag/${id}`)
    }
    clickNine = (id) => {
        this.props.history.push(`/bag/${id}`)
    }
    clickGirl = (id) => {
        this.props.history.push(`/column/${id}`)
    }
    componentDidMount() {
        Axios.get("http://www.xiongmaoyouxuan.com/api/tab/1?start=0").then(res => {
            // console.log(res.data.data.gridsV2)
            this.setState({
                girl: res.data.data.gridsV2[2].url.slice(20),
                send: res.data.data.gridsV2[0].url.slice(20),
                huge: res.data.data.gridsV2[1].url.slice(20)

            })
        })
    }
}
export default withRouter(Shop)