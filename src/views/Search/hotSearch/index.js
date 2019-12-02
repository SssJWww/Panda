import React, { Component } from 'react'
import Axios from 'axios'
import style from './index.module.scss'

class HotSearch extends Component {
    state = {
        data: null,
        isRed: null,
    }
    render() {
        return (
            <div className={style.seo}>
                <ul className={style.hot}>
                    {
                        this.state.data ?
                            this.state.data.map((item, index) =>
                                <li key={index} className={this.state.isRed[index].highlight ? style.red : ''} 
                                onClick={()=>{this.handleClick(item.word)}}>{item.word}</li>
                            )
                            : null
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        Axios.get('http://www.xiongmaoyouxuan.com/api/search/home').then(res => {
            // console.log(res.data.data.hotWords)
            this.setState({
                data: res.data.data.hotWords.splice(0, 8),
                isRed: res.data.data.hotWords
            })
        })
    }
    handleClick = (word)=>{
        // console.log(word)
        this.props.history.push(`/s/${word}`)
    }
}
export default HotSearch