import React from 'react'

import styles from '../../css/movie_item.scss'

import { Rate } from 'antd';

export default class MovieItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return <div className={styles.box} onClick={this.goDetail}>
            <div><img src={this.props.image} className={styles.img}/></div>
            <div className={styles.divh4}>
            <h5>电影名称：{this.props.title}</h5>
            <h5>上映年份：{this.props.year}年</h5>
            <h5>电影类型：{this.props.genres.join(', ')}</h5>
            <div><Rate disabled defaultValue={this.props.score} /></div>
            </div>
        </div>
    }
    goDetail = () => {
        //  console.log(this.props.history)
        //  console.log(this.props.movieType)
        // console.log(this.state.page)
        this.props.history.push('/movie/detail/'+this.props.movieType+'/'+ (this.props.id+1))
    }
}