import React, { Component } from 'react';
import CRoomName from './cRoomName';

class CRoomNames extends Component {

    state = {  
        cnames:[],
        isLoaded:false
        
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



    render() { 
        var { isLoaded , cnames} = this.state;
        
        if (!isLoaded){
            return <div> Loading...</div>
        }
        else{
            
            return ( 
                <div>
                    {this.state.cnames.map(cname => 
                        <CRoomName key={cname.id} value={cname} selected={true}/>)}                    
                </div> );
        
        }
    }
}
 
export default CRoomNames;