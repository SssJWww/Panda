import React, { Component } from 'react'
import NavBar from '../Navbar'
import List from '../../component/List'
import Axios from 'axios'
import style from './index.module.scss'
class Category extends Component {
    state = {
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
                <ul className={style.store}>
                    {this.state.datalist ? this.state.datalist.map(item => {
                        return <li key={item.id} onClick={() => { this.clickJump(item.id) }}><List data={item}></List></li>
                    }) : null}
                </ul>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        Axios.get(`http://www.xiongmaoyouxuan.com/api/category/${this.props.match.params.id}/items?start=0&sort=0`).then(res => {
            console.log(res.data)
            this.setState({
                datalist: res.data.data.items.list
            })
        })
    }
    clickBack = () => {
        this.props.history.go(-1)
    }
    clickJump = (id) => {
        this.props.history.push(`/detail/${id}`)
    }

}
export default Category