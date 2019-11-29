import React, { Component } from 'react'
import style from './index.module.scss'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'
class Shop extends Component {
    state={
        girl:null
    }
    render() {
        return (
            <div className={style.shop} >
                <div className={style.pink} onClick={() => { this.clickShop() }}>
                    <img alt="123" src="//img1.lukou.com/static/coupon/p/image_link/eQC01LF4OLt6cph48QDeRQcFzKwqmska.gif" className={style.water}/>
                    <h2 className={style.nine}>9块9包邮</h2>
                    <p>保你不吃亏</p>
                </div>
                <div className={style.huge} onClick={() => { this.clickNine() }}>
                    <img alt="123" src="//img1.lukou.com/static/p/commodity/img/20181212-235507.png" />
                    <h2>超值大额劵</h2>
                    <p>优惠直击底价</p>
                </div>
                <div key={this.state.girl} className={style.girl} onClick={() => { this.clickGirl(this.state.girl) }}>
                    <img alt="123" src="//img1.lukou.com/static/coupon/p/image_link/E34Q8C41idjxahcPcQJ12PeVwHH0qKoP.png" />
                    <h2>女装上新快抢</h2>
                    <p>每日更新</p>
                </div>
            </div>
        )
    }
    clickShop = () => {
        this.props.history.push(`/nine`)
    }
    clickNine = () => {
        this.props.history.push(`/huge`)
    }
    clickGirl = (id) => {
        this.props.history.push(`/column/${id}`)
    }
    componentDidMount(){
        Axios.get("http://www.xiongmaoyouxuan.com/api/tab/1?start=0").then(res=>{
            // console.log(res.data.data.gridsV2[2].url.slice(20))
            this.setState({
                girl:res.data.data.gridsV2[2].url.slice(20)
            })
        })
    }
}
export default withRouter(Shop)