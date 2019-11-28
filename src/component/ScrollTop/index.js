import React, { Component } from 'react'

const ScrollTop = (MyComponent) => {
    return class ScrollView extends Component {
        state = {
            isFixed: false
        }
        render() {
            return (
                <div>
                    <MyComponent {...this.props} isFixed={this.state.isFixed}></MyComponent>
                </div>
            )
        }

        componentDidMount() {
            window.onscroll = () => {
                if ((document.documentElement.scrollTop || document.body.scrollTop) >=200) {
                    this.setState({
                        isFixed:true
                    })
                }else{
                    this.setState({
                        isFixed:false
                    })
                }
            }
        }
    }
}

export default ScrollTop