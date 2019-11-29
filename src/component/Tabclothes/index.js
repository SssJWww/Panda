import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import style from './index.module.scss'
class Tabclothes extends Component {
    render() {
        return (
            <div className={style.box}>
                {this.props.data?
                <li className={style.jun}>
                    <img src={this.props.data.imageUrl} />
                    <p>{this.props.data.title}</p>
                </li>:null}
            </div>
        )
    }

}

export default withRouter(Tabclothes)