import React, {useState} from 'react';
import './App.css';
import Data from "./names.json";


function App() {
  const [sorting, setSorting] = useState("");
  const [total,setTotal] = useState(0);
  const [searchedname, setSearchedname] = useState("");
  const [result, setResult] = useState([]);

  function byAmount(){
    setSorting("byAmount");
  }
  function alphabetical(){
    setSorting("alphabetical")
  }
  function totalNames(){
    setTotal(Data.names.map(item => item.amount).reduce((acc, item) => item + acc))
    setSorting("totalNames")
  }
  function find(){
    setSorting("find")
    if( (Data.names.find(item => item.name.toLowerCase() === searchedname.toLowerCase())) != null){
      setResult(Data.names.find(item => item.name.toLowerCase() === searchedname.toLowerCase()))
   
    }

  }
  const inputChanged = (event) => {
    setSearchedname(event.target.value);
  };
     

if(sorting === "byAmount"){
  return (
    <div className="App">
      <button onClick={byAmount}>Sort by amount</button>
      <button onClick={alphabetical}>Sort alphabetically</button>
      <button onClick={totalNames}>Number of names</button>
      <button onClick={find}>Search</button>
      {Data.names.sort( (a,b) => parseInt(b.amount) - parseInt(a.amount)).map((item, index) => {
        
      return <h1 key={index}>{item.name} {item.amount}</h1> 
     })}
     </div>
  );
}else if(sorting === "alphabetical"){
  return (
    <div className="App">
    <button onClick={byAmount}>Sort by amount</button>
    <button onClick={alphabetical}>Sort alphabetically</button>
    <button onClick={totalNames}>Number of names</button>
    <button onClick={find}>Search</button>

    {Data.names.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => {
      
    return <h1 key={index}>{item.name} {item.amount}</h1> 
   })}
    </div>
  )

}else if(sorting === "totalNames"){
  return (
    <div className="App">
    <button onClick={byAmount}>Sort by amount</button>
    <button onClick={alphabetical}>Sort alphabetically</button>
    <button onClick={totalNames}>Number of names</button>
    <button onClick={find}>Search</button>
    <h1>Total of all names: {total}</h1>

    </div>
  )

}else if(sorting === "find"){
  return (
    <div className="App">
    <button onClick={byAmount}>Sort by amount</button>
    <button onClick={alphabetical}>Sort alphabetically</button>
    <button onClick={totalNames}>Number of names</button>
    <button onClick={find}>Search</button>
      <div>
      <input onChange={inputChanged}></input>
      <button onClick={find}>Find</button>
      </div>
    <h1>{result.name} {result.amount}</h1>
   </div>
);

}else{
  return(
    <div className="App">
      <button onClick={byAmount}>Sort by amount</button>
      <button onClick={alphabetical}>Sort alphabetically</button>
      <button onClick={totalNames}>Number of names</button>
      <button onClick={find}>Search</button>

    </div>
  )

}
}

export default App;
