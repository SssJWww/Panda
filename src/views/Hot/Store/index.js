import React, { Component } from 'react'
// import Axios from 'axios'
import store from '../../../redux'
import List from '../../../component/List';
import { getHotList } from './createHotAction'
class Store extends Component {
    state = {
        datalist: []
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.datalist.map(item => {
                        return <li key={item.id} onClick={() => { this.clickJump(item.id, item.keywords, (item.url).slice(20, 24)) }}><List data={item}></List></li>
                    }
                    )}
                </ul>
            </div>
        )
    }
    componentDidMount() {
        // Axios.get("http://www.xiongmaoyouxuan.com/api/tab/1?start=0").then(res => {
        //     console.log(res.data.data.items.list)
        //     this.setState({
        //         datalist: res.data.data.items.list
        //     })
        // })
        if (store.getState().Hot.length === 0) {
            store.dispatch(getHotList())
        } else {
            this.setState({
                datalist: store.getState().Hot
            })
        }
        store.subscribe(()=>{
            this.setState({
                datalist:store.getState().Hot
            })
        })
    }
    clickJump = (id, keywords, idd) => {
        // console.log(keywords,idd)
        if (keywords) {
            this.props.history.push(`/detail/${id}`)
        } else {
            this.props.history.push(`/column/${idd}`)
        }
        // console.log(this.props)
    }
}
export default Store