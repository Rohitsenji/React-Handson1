import React, { Component } from "react";

export class Classcompo extends Component{
    render(){
        return(
            <>
                <div className="classContainer" style={{border:"2px solid skyblue", width:"40vw" , boxShadow:"10px"}}>
                     <h1>This is Done using Class component</h1>
                     <p style={{color:"Green"}}>Paragraph 1</p>
                     <p>Paragraph 2</p>
                </div>
            </>
        )
    }
}

