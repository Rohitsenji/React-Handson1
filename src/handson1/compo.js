import React, { Component } from "react";

class Compo extends Component{
    constructor(){
        super();
        this.state ={
            count:0
        }
        console.log('constructor')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    render(){
        console.log('Render')
        return(
        <>
        <h1>Hey Roony.... Tap to update</h1>
        <h2>{this.state.data && <Unmounting/>}</h2>
        <button onClick={()=>this.setState.data}>Change</button>
        </>
        )
    }
}
export default Compo;

export class Unmounting extends Component{
    
    render(){
        return(
            <>
            <h1>This is to be Removed</h1>
            </>
        )
    }
}