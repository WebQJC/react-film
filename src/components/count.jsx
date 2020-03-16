import React from 'react'
import ReactType from 'prop-types'


export default class Count extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            msg: '函数',
            count: props.init,
            count1: props.inits
        }
       
    }

 // 在 React 中，使用静态的 defaultProps 属性，来设置 组件的 默认属性值；
    static defaultProps = {
        inits: 0
    }
// 这是创建一个 静态的 propTypes 对象，在这个对象中，可以把 外界传递过来的属性，做类型校验；
  // 注意： 如果要为 传递过来的属性做类型校验，必须安装 React 提供的 第三方包，叫做 prop-types ;
  // prop-types 大概在 v.15.* 之前，并没有单独抽离出来，那时候，还和 react 包 在一起；后来， 从 v.15.* 之后，官方把类型校验的 模块，单独抽离为 一个包，就叫做 prop-types
static propTypes = {
    inits: ReactType.number,
    init: ReactType.number
}

// 在组件即将挂载到页面上的时候执行，此时，组件尚未挂载到页面中呢
  // 虚拟DOM是否创建好了呢？此时，内存中的虚拟DOM也没开始创建呢
  componentWillMount () {
    console.log(document.getElementById('myh3'))
    console.log(this.props.inits);
    console.log(this.state.msg);
    this.myselfFunc()
  }

    render() {
        return <div>
            <h1>生命周期---这是 Count 计数器组件</h1>
            <input type="button" value="+1" id="btn"/>
            <input type="button" value="+1" onClick= {this.increment}/>
      <hr />
      <h2 id="myh2" ref="h3">当前的数量是：{this.state.count}</h2>
      <h3 id="myh3" ref="h3">当前的数量是：{this.state.count1}</h3>
        </div>
    }

    // increment(){
    //     console.log(this)   //undefined
    // }
    increment = () => {
        console.log(this)
        this.setState({
            count1: this.state.count1 +1
        })
    }

componentDidMount () {
   //console.log(document.getElementById('myh3'))
   //注意onclick = function()和onclick = () => 的区别
    // document.getElementById('btn').onclick = function() {
    //     console.log(this) //指向是按钮 而不是页面  =>  <input type="button" value="+1" id="btn"/> 
    // }
    document.getElementById('btn').onclick = () => {
        console.log(this) //指向的是页面 =》<Count inits={'爱好答复哈看到了饭'} init={123}></Count>
        this.setState({
            count: this.state.count + 1
        })
    }
}

 // 从这里开始，就进入到了组件的运行中状态
  // 判断组件是否需要更新
shouldComponentUpdate (nextProps, nextState) {
    // 1. 在 shouldComponentUpdate 中要求必须返回一个布尔值
    // 2. 在 shouldComponentUpdate 中，如果返回的值是 false，则 不会继续执行后续的生命周期函数，而是直接退回到了 运行中 的状态，此时有序 后续的 render 函数并没有被调用，因此，页面不会被更新，但是， 组件的 state 状态，却被修改了；
    // return false

    // 需求： 如果 state 中的 count 值是偶数，则 更新页面，如果 count 值 是奇数，则不更新页面，我们想要的页面效果：4，6，8，10，12....
    // 经过打印测试发现，在 shouldComponentUpdate 中，通过 this.state.count 拿到的值，是上一次的旧数据，并不是当前最新的；
    // console.log(this.state.count + ' ---- ' + nextState.count);
    // return this.state.count1 % 2 === 0 ? true : false
    // return nextState.count1 % 2 === 0 ? true : false
     return true
    // if(nextState.count1 % 2 === 0){
    //     return true
    // }else{
    //     return false
    // }
} 

// 组件将要更新，此时尚未更新，在进入这个 生命周期函数的时候，内存中的虚拟DOM是旧的，页面上的 DOM 元素 也是旧的
componentWillUpdate () {
     // 经过打印分析，得到，此时页面上的 DOM 节点，都是旧的，应该慎重操作，因为你可能操作的是旧DOM
    console.log(document.getElementById('myh3').innerHTML)
    console.log(this.refs.h3.innerHTML);
}

 // 组件完成了更新，此时，state 中的数据、虚拟DOM、页面上的DOM，都是最新的，此时，你可以放心大胆的去操作页面了
 componentDidUpdate () {
     console.log(this.refs.h3.innerHTML)
 }

    myselfFunc() {
        console.log('这是我自己定义的函数，和生命周期函数无关');
    }
}