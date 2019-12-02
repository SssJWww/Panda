import React, { Component } from 'react'
import style from './index.module.scss'
import { withRouter } from 'react-router-dom'
class Clothes extends Component {
    state = {
        areShow: false
    }
    render() {
        return (
            <div>
                {this.props.data ?
                    <li className={style.jezz} onClick={() => { this.clickTab(this.props.data.id) }}>
                        <img alt="123" src={this.props.data.imageUrl} />
                        <p>{this.props.data.name}</p>
                    </li> : null}
            </div>
        )
    }
    clickTab = (id) => {
        // console.log(this.props)
        this.props.event()
        if (id === 1) {
            this.props.history.push('/home')
        } else {
            this.props.history.push(`/tab/${id}`)
        }
    }

}

export default withRouter(Clothes)