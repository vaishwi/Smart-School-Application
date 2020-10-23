import React, { Component } from 'react';
import CRoomName from './cRoomName';

class CRoomNames extends Component {

    state = {  
        cnames:[],
        isLoaded:false,
        backState:false
    }

    componentDidMount () {
        fetch('http://127.0.0.1:5000/classname',{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Access-Control-Allow-Origin": "*",
            }
        }).then(
            response => response.json()
            ).then(json => {this.setState({ 
                cnames:json,
                isLoaded:true })
        });
    }

    handleStudent = clname =>{
        console.log("student detail handler",clname)
        this.state.backState=true
    };

    render() { 
        var { isLoaded , cnames} = this.state;
        
        if (!isLoaded){
            return <div> Loading...</div>
        }
        else{
            if (!this.state.backState){
                return ( 
                    <div>
                        {this.state.cnames.map(cname => 
                            <CRoomName key={cname.id} onDetail={this.handleStudent} value={cname} selected={true}/>)}                    
                    </div> );
                
            }
            else{
                return(<div>Student Details</div>);
            }
            
        }
    }
}
 
export default CRoomNames;