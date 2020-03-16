import React from 'react'

export default class About extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            msg: '111111', 
            red: 'red',
            display: 'block'
        }
    } 
    render(){
        return <div onClick={this.changeMsg} style={{color: this.state.red, width: 100, height: 100, border: '1px solid red',display: this.state.display}}>{this.state.msg}</div>
    }

    changeMsg = () => {

            this.setState({
                msg: '2222',
                red: 'pink',
                display: 'none'
            })
      }
} 