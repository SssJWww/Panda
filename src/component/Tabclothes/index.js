import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import style from './index.module.scss'
class Tabclothes extends Component {
    render() {
        console.log(this.props.data)
        return (
            <div className={style.box}>
                {this.props.data?
                <li className={style.jun} onClick={()=>{this.clickGo(this.props.data.url,this.props.data.url.slice(20),this.props.data.url.slice(35))}}>
                    <img alt="123" src={this.props.data.imageUrl} />
                    <p>{this.props.data.title}</p>
                </li>:null}
            </div>
        )
    }

    clickGo=(url,id,idd)=>{
        // console.log(id)
        if(url.indexOf("column")!=-1){
            console.log("111")
            this.props.history.push(`/column/${id}`)
        }else{
            this.props.history.push(`/category/${idd}`)
        }
    }
}

export default withRouter(Tabclothes)