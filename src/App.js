import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter from './components/counter'
//import { CName} from "./components/className"

function App() {
  /*
  useEffect(() => {
      fetch('/cNames').then(response => response.json().then(data => {
        console.log(data);
      })
        );
  },[]);
  */
 /*
 //then(data => setInitialData(data))
  const [initialData,setInitialData] = useState([{}])
//useeffect is use for make request to flask server
  useEffect(() =>{
    fetch('http://127.0.0.1:5000/classname',{
      method: 'GET',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      
      }
    }).then(
      response => response.json()
      ).then(data => setInitialData(data))
  },[]);
  */
  return (
    <div className="App">
      <h1>Smart School Application</h1>
      
      
      
    </div>
  );
}
//<h1>{initialData.length}</h1>
//<CName classname={initialData}/>
export default App;
