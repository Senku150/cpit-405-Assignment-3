import "./prograssBar.css"
import Timer from "./timer"
import { useState } from "react"

const progressBar = ({SubmitAction,clickedArray})=>{

const editBar=()=>{
    let boxex=""
    clickedArray.forEach(element => {
        if(element){
            boxex=boxex+"🟩"
        }
        else{
            boxex=boxex+"🟥"
        }
    });
    return boxex;
}
    return(
        <div id="bar">
              <h1>Timer: <Timer SubmitAction={SubmitAction}/> </h1>
              <h2>{editBar()}</h2>
        </div>
    )
}


export default progressBar