import React,{Component} from 'react';
import './App.scss';
import Axios from 'axios'
class App extends Component{
    render(){
      return (
        <div>
          {this.props.children}
        </div>
      )
    }
    componentDidMount(){
      Axios.get("http://www.xiongmaoyouxuan.com/api/tabs?sa=").then(res=>{
        console.log(res.data)
      })
    }
}

export default App;
