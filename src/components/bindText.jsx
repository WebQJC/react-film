import React from 'react'

export default class Bing extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            msg: '哈哈哈哈'
        }
        this.changeMsg2 = this.changeMsg2.bind(this, '难过', '失望 失落')
        
    }
    render() {
        return <div>
            <input type="button" value="绑定this并传参的方式1" onClick={this.changeMsg1.bind(this, '🐷', '🍕')} />
            <input type="button" value="绑定this并传参的方式2" onClick={this.changeMsg2} />
            <input type="button" value="绑定this并传参的方式3" onClick={() => { this.changeMsg3('😊', '😘') }} />
            {/* <input type="button" value="绑定this并传参的方式3" onClick={() => { this.changeMsg3('😊', '😘') }} /> */}
            <h1>{ this. state.msg }</h1>

            {/* 在 Vue 中，有 v-model 指令来实现双向数据绑定，但是，在 React 中， 根本没有指令的概念，因此React 默认也不支持 双向数据绑定 */}
            {/* React 只支持，把数据从 state 上传输到 页面，但是，无法自动实现数据从 页面 传输到 state 中 进行保存，也就是，React 不支持数据的自动逆向传输， 只是实现了数据的单向绑定 */}
            {/* 注意：如果为 表单元素，提供了 value 属性绑定，那么，必须同时为 表单元素 绑定 readOnly, 或者提供要给 onChange 事件 */}
            {/* 如果提供了readOnly，表示这个元素只读的不能被修改  */}
            {/* 如果提供了onChange 表示，这个元素的值可以被修改，但是，要自己定义修改的逻辑  */}
            <input type="text" style={{ width: '100%' }} value={this.state.msg} onChange={this.txtChanged} ref="txt" />
        </div>
    }
 // 为 文本框 绑定 txtChanged 事件
 txtChanged = (e) => {
    // console.log('ok');
    // 如果想让 文本框在触发 onChange 的时候，同时把文本框最新的值，保存到 state 中，那么，我们需要手动调用 this.setState

    // 获取文本框中 最新文本的3种方式：
    //  1. 使用 document.getElementById 来拿
    //  2. 使用 ref 来拿
    // console.log(this.refs.txt.value);
    //  3. 使用 事件对象的 参数 e 来拿   e.target 就表示触发 这个事件的 事件源对象，得到的是一个原生的JS DOM 对象
    // console.log(e.target.value);
    this.setState({
      msg: e.target.value
    })
  }
  
    changeMsg1 (arg1, arg2) {
        this.setState({
            msg: '哇哈哈' + arg1 + arg2
        })
    }

    changeMsg2(arg1, arg2) {
        // console.log(this);
        // 注意：这里的方式，是一个普通方法，因此，在触发的时候，这里的 this 是 undefined
        this.setState({
          msg: '绑定this并传参的方式2' + arg1 + arg2
        })
      }

    // changeMsg3(arg1, arg2){
    //     // console.log(this);
    //     // 注意：这里的方式，是一个普通方法，因此，在触发的时候，这里的 this 是 undefined
    //     this.setState({
    //       msg: '绑定this并传参的方式3' + arg1 + arg2
    //     })
    //   }
 }