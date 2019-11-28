import React, { Component } from 'react'
import Axios from 'axios'
import List from '../../../component/List';
class Store extends Component {
    state = {
        datalist: []
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.datalist.map(item => {
                        return <li key={item.id}><List data={item}></List></li>
                    }
                    )}
                </ul>
            </div>
        )
    }
    componentDidMount() {
        Axios.get("http://www.xiongmaoyouxuan.com/api/tab/1?start=0").then(res => {
            // console.log(res.data.data.items.list)
            this.setState({
                datalist: res.data.data.items.list
            })
        })
    }
}
export default Store