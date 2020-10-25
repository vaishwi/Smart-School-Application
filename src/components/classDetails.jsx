import React, { Component } from 'react';
import ClassDetail from './classDetail';
import {browserHistory} from "react-router";

class ClassDetails extends Component {

    state = {  
        cdetail:[],
        isLoaded:false 
    }

    componentDidMount () {
        fetch("http://127.0.0.1:5000/classname/"+this.props.params.cid,{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Access-Control-Allow-Origin": "*",
            }
        }).then(
            response => response.json()
            ).then(json => {this.setState({ 
                cdetail:json,
                isLoaded:true })
        });
    }

    onNavigateBack(){
        browserHistory.push("/"); 
    }


    render() { 
        var { isLoaded , cdetail} = this.state;
        
        if (!isLoaded){
            return <div> Loading...</div>
        }
        else{
           
            return ( 
                <div>
                    <button className="btn btn-secondary btn-sm" onClick={this.onNavigateBack}>Home</button>
                    {this.state.cdetail.map(cdetail => 
                        <ClassDetail key={cdetail.id} value={cdetail} selected={true}/>)}                    
                </div> );
                
            
            
        }
    }
}
 
export default ClassDetails;