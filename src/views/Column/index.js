import React, { Component } from 'react'
import style from './index.module.scss'
import NavBar from '../Navbar';
import Axios from 'axios'
import List from '../../component/List';
class Column extends Component {
    state = {
        photolist: null,
        datalist: null
    }
    render() {
        return (
            <div>
                <div className={style.yellow}>
                    <input type="text" placeholder="搜索商品，发现更多优选" />
                    <i className="iconfont icon-search"></i>
                </div>
                <NavBar></NavBar>
                {this.state.photolist ? <div className={style.photo}>
                    <img src={this.state.photolist.cover} />
                    <div className={style.back} onClick={()=>{this.clickBack()}}><i className="iconfont icon-back"></i></div>
                </div> : null}
                <ul className={style.store}>
                    {this.state.datalist ? this.state.datalist.map(item => {
                        return <li key={item.id} onClick={()=>{this.clickJump(item.id)}}><List data={item}></List></li>
                    }) : null}
                </ul>
            </div>
        )
    }
    clickBack=()=>{
        this.props.history.go(-1)
    }
    clickJump=(id)=>{
        this.props.history.push(`/detail/${id}`)
    }
    componentDidMount() {
        // console.log(this.props.match.params.id)
        Axios.get(`http://www.xiongmaoyouxuan.com/api/column/${this.props.match.params.id}`).then(res => {
            // console.log(res.data.data)
            this.setState({
                photolist: res.data.data
            })
        })
        Axios.get(`http://www.xiongmaoyouxuan.com/api/column/${this.props.match.params.id}/items?start=0`).then(res => {
            // console.log(res.data.data.list)
            this.setState({
                datalist: res.data.data.list
            })
        })
    }
}
export default Column