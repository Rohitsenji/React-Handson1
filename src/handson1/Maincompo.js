import React from "react"
import Functioncompo from "./functioncomp";
import { Classcompo } from "./classcompo";
class Maincompo extends React.Component{
    constructor(){
        super();
        this.state = {
            Hidden1 : false,
            Hidden2 : false
        }
        
    }
    render(){
        return(
            <>
            <div className="container">
                <h1 style={{textAlign:"center", color:"black"}}>Style using functional and class component</h1>
                <div className="buttoncontainer">
                    <button className="button" onClick = {()=>this.setState({Hidden2 : !this.state.Hidden2})}>Functional Component</button>
                    <button className="button" onClick={()=> this.setState({Hidden1 : !this.state.Hidden1 })}>Class     Component</ button>
                </div>
            </div>
            
            <div className="components" style={{ display: "flex", justifyContent: "space-around", margin: "10vw auto", }}>
            {this.state.Hidden1 ? <Classcompo /> : null}
            {this.state.Hidden2 && <Functioncompo />}
          </div>
            </>
        )
    }
}

export default Maincompo;
