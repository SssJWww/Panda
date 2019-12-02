import React, { Component } from 'react'
import style from './index.module.scss'
import Navbar from '../Navbar';
import Axios from 'axios';
import Tabclothes from '../../component/Tabclothes';
import List from '../../component/List';
// import Axios from 'axios';
class Tab extends Component {
    state = {
        datalist: null,
        Hide: false,
        shoplist:null
    }
    render() {
        return (
            <div>
                <div className={style.yellow}>
                    <input type="text" placeholder="搜索商品，发现更多优选" />
                    <i className="iconfont icon-search"></i>
                </div>
                <Navbar {...this.props}></Navbar>
                <div className={style.yifu}>
                    <div className={style.chao}>
                        <p>潮流精选</p>
                        <span className={style.left}></span>
                        <span className={style.right}></span>
                    </div>
                    <ul className={style.uuu}>
                        {this.state.datalist ? this.state.datalist.map((item, index) => {
                            return <Tabclothes data={item} key={index}></Tabclothes>
                        }) : null
                        }
                    </ul>
                    <div className={style.people}>
                        <p>大家都在逛</p>
                        <span className={style.left}></span>
                        <span className={style.right}></span>
                    </div>
                    <div >
                        {this.state.shoplist?this.state.shoplist.map(item=>{
                            return  <li key={item.id} onClick={()=>{this.clickChange(item.id)}}><List data={item}></List></li>
                        }):null}
                    </div>
                </div>
            </div>
        )
    }
    clickChange=(id)=>{
        // console.log(this.props)
        this.props.history.push(`/detail/${id}`)
    }
    componentDidMount() {
        Axios.get(`http://www.xiongmaoyouxuan.com/api/tab/${this.props.match.params.id}?start=0`).then(res => {
            console.log(res.data.data.items.list)
            this.setState({
                datalist: res.data.data.categories,
                shoplist: res.data.data.items.list
            })
        })
    }

    componentWillReceiveProps(nextProps) {
        Axios.get(`http://www.xiongmaoyouxuan.com/api/tab/${nextProps.match.params.id}?start=0`).then(res => {
            this.setState({
                datalist: res.data.data.categories,
                shoplist: res.data.data.items.list
            })
        })
    }
}
export default Tab