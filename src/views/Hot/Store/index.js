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
                        return <li key={item.id} onClick={()=>{this.clickJump(item.id,item.keywords,(item.url).slice(20,24))}}><List data={item}></List></li>
                    }
                    )}
                </ul>
            </div>
        )
    }
    componentDidMount() {
        Axios.get("http://www.xiongmaoyouxuan.com/api/tab/1?start=0").then(res => {
            console.log(res.data.data.items.list)
            this.setState({
                datalist: res.data.data.items.list
            })
        })
    }
    clickJump=(id,keywords,idd)=>{
        // console.log(keywords,idd)
        if(keywords){
            this.props.history.push(`/detail/${id}`)
        }else{
            this.props.history.push(`/column/${idd}`)
        }
        // console.log(this.props)
    }
}
export default Store