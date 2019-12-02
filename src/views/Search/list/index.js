import React, { Component } from 'react'
import Axios from 'axios'
import style from './index.module.scss'

class List extends Component {
    state = {
        data: null
    }
    render() {
        return (
            <div className={style.seo}>
                <ul className={style.hot}>
                    {
                        this.state.data ?
                            this.state.data.map((item, index) =>
                                <li key={index}>{item.name}</li>
                            )
                            : null
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        Axios.get("http://www.xiongmaoyouxuan.com/api/tabs?sa=").then(res => {
            // console.log(res.data.data.list)
            this.setState({
                data: res.data.data.list.splice(1)
            })
        })

    }
}
export default List