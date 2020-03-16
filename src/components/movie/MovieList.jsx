
import React from 'react'

import MovieItem from './MovieItem.jsx'

import { Spin, Alert, Pagination } from 'antd';

//引入第三方包
import fetchJSONP from 'fetch-jsonp'

export default class MovieList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            in_theatersList: [],
            coming_soonsList: [],
            top250List: [],

            movies: [], // 电影列表
            nowPage: parseInt(props.match.params.page) || 1, // 当前展示第几页的数据
            pageSize: 12, // 每页显示多少条数据
            total: 0, // 当前电影分类下，总共有多少条数据
            isloading: true, // 数据是否正在加载， 如果为 true，表示正在加载数据
            movieType: props.match.params.type // 保存一下 要获取的电影的类型
        }
    }

    componentWillMount () {   
      
         const inTheaters =[];
        const comingSoon = [];
        const top = [];

        // Load the full build.
        let _ = require('lodash');

        for (let i = 0; i < 50; i++) {
            const inTheaterList = {
              id: i,
              score: 3,
              title: '泰坦尼克号' + (i + 1),
              year: 2017,
              image: 'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371934661.95.webp',
              genres: [
                  '动作',
                  '科幻',
                  '冒险'
              ]
            };
            const comingSoonList = {
                id: i,
              score: 2,
              title: '霸王别姬' + (i + 1),
              year: 2018,
              image: 'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.webp',
              genres: [
                  '京剧',
                  '爱情',
                  '同性'
              ]
            };
            const top250List = {
                id: i,
              score: 2,
              title: '功夫之王' + (i + 1),
              year: 2018,
              image: 'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494087960.03.webp',
              genres: [
                  '京剧',
                  '爱情',
                  '同性'
              ]
            }
            inTheaters.push(inTheaterList);
            comingSoon.push(comingSoonList);
            top.push(top250List)
          };

          const inTheatersChunk =  _.chunk(inTheaters, this.state.pageSize);
          const comingSoonChunk =  _.chunk(comingSoon, this.state.pageSize);
          const topChunk =  _.chunk(top, this.state.pageSize);

          const totals = inTheaters.length-1;
          this.setState({
            total: totals,
            in_theatersList: inTheatersChunk,
            coming_soonsList: comingSoonChunk,
            top250List: topChunk
          })
    }

    componentDidMount() {
      //console.log(this.props)
      this.loadMovieListByTypeAndPage()
    }
    
    loadMovieListByTypeAndPage = () => {  
        // const inTheaters =[];
        // const comingSoon = [];
        // const top = [];
        // const moviesList = [];

        // // Load the full build.
        // let _ = require('lodash');


        // for (let i = 0; i < 50; i++) {
        //     const inTheaterList = {
        //       id: i,
        //       score: 3,
        //       title: '泰坦尼克号' + (i + 1),
        //       year: 2017,
        //       image: 'https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1371934661.95.webp',
        //       genres: [
        //           '动作',
        //           '科幻',
        //           '冒险'
        //       ]
        //     };
        //     const comingSoonList = {
        //         id: i,
        //       score: 2,
        //       title: '霸王别姬' + (i + 1),
        //       year: 2018,
        //       image: 'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.webp',
        //       genres: [
        //           '京剧',
        //           '爱情',
        //           '同性'
        //       ]
        //     };
        //     const top250List = {
        //         id: i,
        //       score: 2,
        //       title: '功夫之王' + (i + 1),
        //       year: 2018,
        //       image: 'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7622.webp',
        //       genres: [
        //           '京剧',
        //           '爱情',
        //           '同性'
        //       ]
        //     }
        //     inTheaters.push(inTheaterList);
        //     comingSoon.push(comingSoonList);
        //     top.push(top250List)
        //   };

        //   const totals = inTheaters.length-1;
        const moviesList = [];
        // const inTheatersChunk =  _.chunk(this.state.in_theatersList, this.state.pageSize);
        //   const comingSoonChunk =  _.chunk(this.state.coming_soonsList, this.state.pageSize);
        //   const topChunk =  _.chunk(this.state.top250List, this.state.pageSize);
          // const inTheatersChunk =  _.chunk(inTheaters, this.state.pageSize);
          // const comingSoonChunk =  _.chunk(comingSoon, this.state.pageSize);
          // const topChunk =  _.chunk(top, this.state.pageSize);
          
        //console.log(inTheatersChunk)
      
        // in_theatersList: inTheatersChunk,
        // coming_soonsList: comingSoonChunk,
        // top250List: topChunk

        if(this.state.movieType == 'in_theaters'){
          this.state.in_theatersList.forEach(item =>{
              moviesList.push(item)
          })
        }
        if(this.state.movieType == 'coming_soon'){
          this.state.coming_soonsList.forEach(item =>{
              moviesList.push(item)
          }) 
        }
        if(this.state.movieType == 'top250'){
          this.state.top250List.forEach(item =>{
              moviesList.push(item)
          })
        }
        setTimeout( () => {
            this.setState({
              isloading:false,
              movies: moviesList,
             // total: totals
            })
         },1000)
      }

       // 组件将要接收新属性
      componentWillReceiveProps(nextProps){
        //console.log(this.state.movieType+'sssssss')
          this.setState({
              isloading: true,
              nowPage: parseInt(nextProps.match.params.page) || 1,
              
              movieType: nextProps.match.params.type
          },function(){
              this.loadMovieListByTypeAndPage()
          })
          //console.log(nextProps.match.params.page)
          console.log(nextProps.match.params.type)
      }

// 渲染电影列表的方法
  renderList = () => {
    if(this.state.isloading){
      return <Spin tip="Loading...">
          <Alert
            message="正在请求电影列表"
            description="精彩内容，马上呈现....."
            type="info"
          />
      </Spin>
    }else{
      return <div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {this.state.movies[this.state.nowPage-1].map(item => {
                    return <MovieItem key={item.id} {...item} history = {this.props.history} movieType = {this.state.movieType}></MovieItem>
                })}
          </div>
          <Pagination defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={this.state.total} onChange={this.pageChanged} />
      </div>
    }
  }

  // 当页码改变的时候，加载新一页的数据
  pageChanged = (page) => {
    // 由于我们手动使用 BOM 对象，实现了跳转，这样不好，最好使用 路由的方法，进行编程式导航
    console.log(this.props.history.push('/movie/' + this.state.movieType + '/' + page));
    // window.location.href = '/#/movie/' + this.state.movieType + '/' + page
    // 使用 react-router-dom 实现编程式导航
    this.props.history.push('/movie/' + this.state.movieType + '/' + page)
  }


    render(){
        return <div>{ this.renderList () }</div>
    }
}

