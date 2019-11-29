import React, { Component } from 'react'
import style from './index.module.scss'
import {withRouter} from 'react-router-dom'
class Clothes extends Component {
    render() {
        return (
            <div>
                {this.props.data?
                <li className={style.jezz} onClick={()=>{this.clickTab(this.props.data.id)}}>
                    <img src={this.props.data.imageUrl} />
                    <p>{this.props.data.name}</p>
                </li>:null}
            </div>
        )
    }
    clickTab=(id)=>{
        // console.log(this.props,id)
        this.props.history.push(`/tab/${id}`)
    }

}

export default withRouter(Clothes)