import React, { Component} from 'react';


import 'bootstrap/dist/css/bootstrap.css'; 
//import CRoomNames from './cRoomNames'
import {browserHistory} from "react-router";

class CRoomName extends Component {
    state = { 
        count:0,
        backgroundColor: '#213919',
        cDetail:this.props.value
     };
    
    clicked = clikcname =>{
        console.log("button clicked");
        console.log(this.state.cDetail.className)
        browserHistory.push("/classDetails/"+clikcname); 
    };

    

    render() { 
        var {cDetail} = this.state;
        //console.log('props:',this.props);
        //const val = this.props.value
        //console.log('fire:',val.fire)
        //const fire = 'NO';
        //const temp=30;
        //const text ="STD 1\nTemperature: 30\nFire:NO "
        const text = cDetail.className+"\nTemperature: "+ cDetail.temp+"°C\n------------------------------\nFan   | "+cDetail.fan+"\nLight | "+cDetail.light+"\nFire   | "+cDetail.fire;
        
        if (cDetail.fire==='Yes'){
            //this.state.backgroundColor= '#f30707';
            this.state.backgroundColor = '#cc0000';
        }
        
        
        let CurrentSnipTextAreaSty = {
            backgroundColor: this.state.backgroundColor,
            border: '1px solid #314929',
            borderWidth: 2,
            //color: '#afac87',
            color: '#ffff',
            fontSize: '1em',
            //height: 'calc(50% - 20px)',
            height:'110px',
            //overflowY: 'auto',
            padding: '5px',
            resize:"none",
            //width: 'calc(100% - 12px)'
            width : '200px'
        };
        
       
        return ( 
        
            <div>    
                
                <textarea value= {text} className = "m-2" style={CurrentSnipTextAreaSty} disabled = {true} /> 
                <button className="btn btn-secondary btn-sm" onClick={() => this.clicked(cDetail.className)}>See Details</button>
                
            </div>
            );        
    }
}
 
export default CRoomName;

//{this.state.count === 0 && this.getData()}
//{name.className} | Temprature : {name.temp} | Fan:{name.fan} | Light:{name.light} | Fire:{name.fire}
/*
<button className="btn btn-secondary btn-sm" onClick={() => this.props.onDetail(cDetail.className)}>See Details</button>
<ul>
                
                        {cnames.map(name  => (
                            <li key={name.id}>
                                
                                
                                    {name.className}

                                <button>See Details</button>
                            </li>
                        ))}
                    </ul>
*/
/*
if (!isLoaded){
            return <div> Loading...</div>
        }
        else{
            console.log('class names:',this.state.cnames);
            return ( 
                <div>    
                    

                    <textarea className = "m-2" style={CurrentSnipTextAreaSty} disabled = {true}>
                        {text}
                    </textarea>
                    <button className="btn btn-secondary btn-sm" onClick={this.clicked}>See Details</button>
                    
                </div>
             );
        }
        
 */