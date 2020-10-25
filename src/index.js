import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// for intall bootstrap npm -i bootstrap
import 'bootstrap/dist/css/bootstrap.css'; 
import 'semantic-ui-css/semantic.min.css';
//import Counter from './components/counter'
//import CRoomName from './components/cRoomName'
import CRoomNames from './components/cRoomNames'
import ClassDetails from './components/classDetails'
//npm install react-router@3
import {Router,Route} from "react-router"
import {browserHistory} from "react-router"
//import { useHistory } from "react-router-dom";

class IOTApp extends React.Component {
  render(){
    return(
      <Router history={browserHistory} >
        <Route path="/" component={CRoomNames} />
        <Route path="/classDetails/:cid" component={ClassDetails} />
      </Router>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <h1 align='center'> Smart School Application</h1>
    <IOTApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

/*

<h1>STD -1</h1>
    <StudentDetail value={"Vaishwi Patel\nPresent:Yes\nIn bus"}/>
    <StudentDetail value={"Arpit Patel\nPresent:Yes\nIn class"}/>
    <StudentDetail value={"Foram Vadher\nPresent:Yes\nIn class"}/>
    <StudentDetail value={"Krinali Shah\nPresent:Yes\nIn bus"}/>
  

<CRoomNames/>
ReactDOM.render(
  <Counter/>,
  document.getElementById("root")
);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
