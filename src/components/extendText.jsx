import React from 'react'

export default class Com1 extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            msg: '父组件',
            color: 'red'
        }
    }
    render() {
        return <div>
            <h1>{this.state.msg}</h1>
            <Com2 color={this.state.color}></Com2>
        </div>
    }
}

class Com2 extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render(){
        return <div>
            <h5 style={{ color: this.props.color }}>这是 孙子组件 </h5>
        </div>
    }
} 