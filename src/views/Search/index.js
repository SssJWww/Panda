import React, { Component } from 'react'
import style from './index.module.scss'
import HotSearch from './hotSearch'
import List from './list'
class Search extends Component {
    render() {
        return (
            <div>
                <header className={style.header}>
                    <p>返回</p>
                    <div className={style.search}>
                        <i className="iconfont icon-search"></i>
                        <input placeholder="搜索商品，发现更多优选"/>
                    </div>
                    <p>搜索</p>
                </header>
                <section className={style.section}>
                    <h2>热门搜索</h2>
                    <HotSearch {...this.props}/>
                </section>
                <div className={style.list}>
                    <h2>商品分类</h2>
                    <List {...this.props}/>
                </div>
            </div>
        )
    }
}
export default Search