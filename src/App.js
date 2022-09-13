import logo from './logo.svg';
import './App.css';
import Page from './view/Page';
import { useEffect,useState } from 'react';
import axios from "axios"
function App() {

  const [data,setData]=useState(null);

  useEffect(()=>{
    if(!data){
      axios.get(`http://localhost:8080/getName`)
      .then(response => {
        setData(response.data)
      })
    }
  },[data])


  return (
    <div>
     <Page name={data}/>
    </div>
  );
}

export default App;
