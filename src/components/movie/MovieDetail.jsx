import React from 'react'

import { Button, Icon, Spin, Alert } from 'antd';

export default class MovieDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            detailList: props.match.params.detailType,
            detail: [],
            number: props.match.params.id,
            // page: this.props.page,
            isloading: true
        }
    }
    componentWillMount(){
// console.log(page)
        const movieDetail = [];
        const inTheaterDetail = [];
        const comingSoonDetail = [];
        const top250Detail = [];
        for (let i = 0; i < 50; i++) {
            const inTheater = {
              id: i,
              title: '泰坦尼克号' + i,
              image: 'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371934661.95.webp',
              summary: `内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容`+i+i+i
            };
            const comingSoon = {
              id: i,
              score: 2,
              title: '霸王别姬' + i,
              year: 2018,
              image: 'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.webp',
              summary: `内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容`+i+i+i
            };
            const top250 = {
                id: i,
              score: 2,
              title: '功夫之王' + i,
              year: 2018,
              image: 'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494087960.03.webp',
              summary: `内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容`+i+i+i
            }
            inTheaterDetail.push(inTheater);
            comingSoonDetail.push(comingSoon);
            top250Detail.push(top250); 
        }
        if(this.state.detailList == 'in_theaters'){
          inTheaterDetail.forEach(item => {
            movieDetail.push(item)
          })
        }
        if(this.state.detailList == 'coming_soon'){
          comingSoonDetail.forEach(item => {
            movieDetail.push(item)
          })
        }
        if(this.state.detailList == 'top250'){
          top250Detail.forEach(item => {
            movieDetail.push(item)
          })
        }

        console.log(this.props.match.params.id)
        this.setState({
            detail: movieDetail,
            isloading: false
        })
    }
    componentDidMount() {
      console.log(this.state.detailList)     
      //console.log(this.props.match.params.type)
      //    const number = this.props.match.params.id
      // //  console.log(this.props.match.params.id)
      //   console.log(this.state.detail[number])
    }
    render(){
        return <div>
            <Button type="primary" onClick = {this.goBack}>
            <Icon type="left" />
            返回电影列表页面
          </Button>
          {this.renderInfo()}
            </div>
    }
    goBack = () => {
        this.props.history.go(-1)
    }

    renderInfo = () => {
        if (this.state.isloading) {
          return <Spin tip="Loading...">
            <Alert
              message="正在请求电影数据"
              description="精彩内容，马上呈现....."
              type="info"
            />
          </Spin>
        } else {
          return <div>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{color: 'pink'}}>{this.state.detail[this.state.number].title}</h2>
    
              <img src={this.state.detail[this.state.number].image} alt="" style = {{width: 250, height: 360}}/>
            </div>
    
            <p style={{ textIndent: '2em', lineHeight: '30px', textAlign: 'center' }}>
              {this.state.detail[this.state.number].summary}
            </p>
          </div>
        }
      }
}