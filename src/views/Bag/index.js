import React, { Component } from 'react'
import style from './index.module.scss'
import Axios from 'axios'
import NavBar from '../Navbar';
import List from '../../component/List';
class Bag extends Component {
    state = {
        word: null,
        sub: null,
        sublist: null
    }
    render() {
        return (
            <div>
                <div className={style.nine}>
                    <div className={style.back} onClick={()=>{this.clickBack()}}><i className="iconfont icon-back"></i><p>返回</p></div>
                    {this.state.word ? <div className={style.bag}>{this.state.word}</div> : null}
                </div>
                <NavBar></NavBar>
                <div className={style.detail}>
                    <ul>
                        {this.state.sublist ? this.state.sublist.map(item => {
                            return <li key={item.id}><List data={item}></List></li>
                        }):null}
                    </ul>
                </div>
            </div>
        )
    }
    clickBack=()=>{
        this.props.history.go(-1)
    }
    componentDidMount() {
        // console.log(this.props.match.params.id)
        Axios.get(`http://www.xiongmaoyouxuan.com/api/column/${this.props.match.params.id}`).then(res => {
            // console.log(res.data.data.subColumns[0].id)
            this.setState({
                word: res.data.data.name,
                sub: res.data.data.subColumns[0].id
            }, () => {
                Axios.get(`http://www.xiongmaoyouxuan.com/api/sub_column/${this.state.sub}/items?start=0`).then(res => {
                    // console.log(res.data.data.list)
                    this.setState({
                        sublist: res.data.data.list
                    })
                })
            })
        })
    }
}
export default Bag