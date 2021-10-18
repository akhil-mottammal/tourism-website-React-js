import React,{useState} from 'react';
import './App.css';
import Header from './component/Header';
import Card from './component/Card';
import cardObject from './component/CardObject';
function App() {

  const [image,setImage]=useState("")
  function favourite(img){
    console.log("hi")
    setImage(img)
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
            favourite={favourite} />
    )
  })}  
     <div className="favour">
       <h3 >Favourite Places</h3>
       <img className="favourimg" src={image} alt="fav"></img>
       </div>                                 
      </div>
      
      
    </div>
  );
}

export default App;
