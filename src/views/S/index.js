import React, { Component } from 'react'
import Axios from 'axios'

class S extends Component {
    render() {
        return (
            <div>
                S
            </div>
        )
    }
    componentDidMount(){
        // console.log(this.props.match.params.word)
        var word = encodeURI(this.props.match.params.word)
        console.log(word)
        Axios.get(`http://www.xiongmaoyouxuan.com/api/search?word=${word}&start=0&sort=0&couponOnly=NaN&minPrice=0&maxPrice=99999`).then(res=>{
            console.log(res.data)
        })
        
    }
}
export default S