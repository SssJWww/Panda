import Axios from 'axios'
function getHotList() {
    //发送异步请求
    return (dispatch) => {
        return Axios.get("http://www.xiongmaoyouxuan.com/api/tab/1?start=0").then(res => {
            // console.log(res.data.data.items.list)
            dispatch({
                type:"getHotList",
                payload:res.data.data.items.list
            })
        })

    }
}
export { getHotList }