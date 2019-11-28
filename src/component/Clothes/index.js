import React, { Component } from 'react'
import style from './index.module.scss'
class Clothes extends Component {
    render() {
        return (
            <div>
                <li className={style.jezz}>
                    <img src={this.props.data.imageUrl} />
                    <p>{this.props.data.name}</p>
                </li>
            </div>
        )
    }
}

export default Clothes