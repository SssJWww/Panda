import React, { Component } from 'react'
import DetailSwiper from './DetailSwiper'
import style from './index.module.scss'
import Axios from 'axios'

class Detail extends Component {
    state = {
        datalist: null
    }
    componentDidMount() {
        Axios.get(`http://www.xiongmaoyouxuan.com/api/detail?id=${this.props.match.params.id}&normal=1&sa=`).then(res => {
            // console.log(res.data.data.detail.descContentList[0].image)
            this.setState({
                datalist: res.data.data
            })
        })
    }
    render() {
        // console.log(this.props.match.params.id)
        return (
            <div>
                <div className={style.box}>
                    <div className={style.back_btn} onClick={() => this.handleBtn()}></div>
                    <div><DetailSwiper {...this.props}/></div>
                </div>
                {
                    this.state.datalist ?
                        <div className={style.info}>
                            <div className={style.title}>
                                <img alt="123" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAvCAYAAABuWa03AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDY0QjJFNzU2Qjk4MTFFNzkwM0FCMTk4NkYzMUM3RTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDY0QjJFNzY2Qjk4MTFFNzkwM0FCMTk4NkYzMUM3RTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENjRCMkU3MzZCOTgxMUU3OTAzQUIxOTg2RjMxQzdFOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENjRCMkU3NDZCOTgxMUU3OTAzQUIxOTg2RjMxQzdFOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu3eOnMAAASVSURBVHja7FxNaNRAFJ6ui+Ax+C+IkoMevAi5iCJ4yKLgQVS2qNCT2D2IiIh2LehNzeJd2MWDp6IuInpQsQFFUQSNJxVFG6woepAGPahorb4hL3YIm2lmMrtJ2nzwsds0nUy+vHk/mZn2nR0+SiIwD7gRuB64HLiQFODhO/AD8C3wLvBbp5PKEccOAIeBk0Ab+B7oFppy0QdcCewHjgBbwNPALzzBVwGvAn8D9wEfFDpKYTXwJPAFsAq8H/yixJy0BAWmFr2pEDsR3gH3o6e4BqyEBS/hLy4D68CpQjMluAHcC7yEVv9f8AHgAhS7gFrcAV4AnmF9+HHkHwUX0NBv2RkItLQvBn53U+wPFXucxkhq4WuAy4C3FTU+CGwCx4BDKQtOxR5FVlPsx1fgLeAOauEbgA8VWjcrcjuHLkAXeDgNgXZpErK5jEXNZ0WdHULRCeahbk4Ft2KeW8UMxItx7ifqSUqYsE8qGr6BdXtzKAB7Mc/7RWNmWeGFm8x3F325KjgYhNOoHqNiVDCKhVBW6EqMkLUbCm+8PoPgVsT1tJBQJqd9J2ZfTMay22kIbgj4vG5mI2YM36xzgr1oQG0LuBNlguuYcrGW0lAkohlqOw7sDiPBigjiuoTbY7OXlsxNJRGcWsUVxjraCsWWhd2hDxbTPzv0QEUFH2RiiiPTwVICsUcZv0kvXuuikFlIL03GJbVkGykpENtDsT3FN6hJpF7dRJXpS88EpyI/DYldwWN/JcmLD1mBxgieyG2KCq4zlheI7ZDZj8FQrJKGaNBsoz+1InJXJ2aFaSnO03vlTpyk8UQmS3EIM4PRocyNUxGK+uS0fXgLq0sDP2u9FDwNOAJD3+SMKk+i2GGzkiZew0kjD+9FGiZTiOmcgJ/Uyk10L1ZalWbW0O1Ks4aia9hubTYJrgm6k15Umh62b+Hf1kWtXLXgRsz3H4bAOV7GDKHNPMSqqC8vd8EqTUUPLktlffg1gztDvOiZ4G6SsjciYGZxmi4Q3MiC4KKlL+34GGM5WuhG8jgRnemg6WJgNDoM0UZGLVyXjS9ZyVJaHQqRtOYx4xRXukQGlTnBZ8IYWjxvRZfOCdqGRKakYXWpRRRW7bwKHreCbKLodY71DXJKe1F4+HCHOhyvy7i7vAhuhm6213m3F4o5tmw/VAnuMsPZIGrfkWshq+X5dZFJ7LiT1I7K+1EluM2IMoo/O4rErjJ+0yX5nfDoCwSnm38WJWysQaYX/wQiqV6tSodwP2fYiz5km3ReWdUtLAZOUMGfAw8qcCkVMv0+WiPqZnSC9JC3OLSVAwtfB3xJBX9E/PXha4GvE1pgg6S/NkXFSLK74E52AgfoJDJdOXuR+NsEC0xPIVYUtrmH+Ps4Hwez9nQ/4Xbg1kJv5aDe4xzm8lOB4BPE3201QvI1m5510Fh2HXW9SQ+w61JoOncIP48A5xd6JcI24BPqRoAnovJw+iReAc8DDxN/3yYNIONEzS6J2Y6lxP//BLuIvy/zGGrKLXyeEX+j1RbgbuAp4AoitqxgLuIH8CPwDRos3UL/U6TSvIcsoBD/BBgAutkVlEak9oYAAAAASUVORK5CYII=" />
                                <p>{this.state.datalist.detail.title}</p>
                            </div>
                            <div className={style.price}>
                                <img alt="123" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAAtCAYAAACJfgjFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTAxNEM5QTA2QjlBMTFFNzkwM0FCMTk4NkYzMUM3RTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTAxNEM5QTE2QjlBMTFFNzkwM0FCMTk4NkYzMUM3RTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENjRCMkU3QjZCOTgxMUU3OTAzQUIxOTg2RjMxQzdFOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENjRCMkU3QzZCOTgxMUU3OTAzQUIxOTg2RjMxQzdFOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgGuqB8AAAcBSURBVHja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" />
                                <p className={style.priceNow}>
                                    <i>￥</i>
                                    {(this.state.datalist.detail.price).toString().split(".")[0]}.
                                    <span>
                                        {(this.state.datalist.detail.price).toString().split(".")[1]}
                                    </span>
                                </p>
                                <p className={style.oldPrice}>
                                    <span>原价：<i>{this.state.datalist.detail.originPrice}</i></span>
                                    <span className={style.sale}>月销量：{this.state.datalist.detail.saleNum}</span>
                                </p>
                            </div>
                        </div>
                        : null
                }

                {

                    this.state.datalist ?
                        <div className={style.images}>
                            <div className={style.text}>
                                <span className={style.line1}></span>
                                淘宝图文详情
                                <span className={style.line2}></span>
                            </div>
                            <ul className={style.img}>
                                {
                                    this.state.datalist.detail.descContentList.map((item,index) =>
                                        <li key={index}>
                                            <img alt="123" src={item.image.url} />
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        : null
                }


            </div>
        )
    }
    handleBtn = () => {
        console.log(this.props.history)
        this.props.history.go(-1)
    }
}
export default Detail