
import './App.css';
import Header from './component/Header';
import Card from './component/Card';
import cardObject from './component/CardObject';
function App() {
 
  
  return (
    <div className="App">
      <Header/>
      
      <div className="appcard">
      
        {cardObject.map((item)=>{
    return(
      <Card img={item.img}
            title={item.name}
            description={item.description} />
    )
  })}  
                                          
      </div>
      
    </div>
  );
}

export default App;
