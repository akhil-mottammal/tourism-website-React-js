import React,{useState} from 'react';
import './App.css';
import Header from './component/Header';
import Card from './component/Card';
import cardObject from './component/CardObject';
function App() {

  const [image,setImage]=useState([])
  function favourite(img){
    console.log("hi")
    setImage([...image,img])
  }

  function remove(img){
    console.log("removing")
    
    setImage(image.filter((item)=>{
      console.log(item)
      
    return item!==img

    }))
  }

  function removeImage(img){
  setImage(image.filter((item)=>{
    return item !==img
  }))
  }
  
  
  return (
    <div className="App">
      <Header/>
      
      <div className="appcard">
      
        {cardObject.map((item)=>{
    return(
      <Card img={item.img}
            title={item.name}
            description={item.description}
            favourite={favourite} 
           remove={remove}
            />
    )
  })}  
     <div className="favour">
       <h3 >Favourite Places</h3>
{
  image.map((image)=>{
    return(<div className="fav">
      <i class="far fa-times-circle " onClick={()=>removeImage(image)}/>
      <img id={Math.random()} className="favourimg" src={image} alt="fav" ></img>
      </div>
    )
  })
}
       
       </div>                                 
      </div>
      
      
    </div>
  );
}

export default App;
