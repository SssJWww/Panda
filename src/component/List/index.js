import React, { Component } from 'react'
import style from './index.module.scss'
class List extends Component {
    render() {
        // console.log(this.props.data)
        return (
            <div className={style.list}>
                <img src={this.props.data.image} />
                <p>{this.props.data.title}</p>
                {this.props.data.price ? <h2>￥{(this.props.data.price).toString().split('.')[0]}.<span>{(this.props.data.price).toString().split(".")[1]}</span></h2> : null}
                {this.props.data.saleNum ? <h3>{this.props.data.saleNum}人已买</h3> : null}
                {this.props.data.couponValue?<h4>{this.props.data.couponValue}</h4>:null}
            </div>
        )
    }
}
export default List