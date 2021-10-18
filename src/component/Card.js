import React,{useState} from 'react'
import './Card.css'


function Card(props) {
    
    const[btn,setBtn]=useState("add to favourite")
    const[clas,setClas]=useState("")
    
    const clickHandler=(img)=>{
        
        setBtn((previous)=>{
            if(previous==="add to favourite"){
                props.favourite(img)
               return "added to favourite"

            }else{
                return "add to favourite"
            }
        })
        setClas((previous)=>{
            if(previous===""){
                return "active"
            }else{
                return ""
            }
           
        })

    }
    return (
        <div className="cardContainer">
        <div className={`card ${clas}`}>
        <h3>{props.title}</h3>
        <span className="span"><i class="fas fa-heart"></i></span>
        <img src={props.img} alt="paithalmala"/>
        <p>{props.description}</p>
        <button className="btn" onClick={()=>{clickHandler(props.img)}}>{btn}</button>    
        </div>
        </div>
        
    )
}

export default Card
