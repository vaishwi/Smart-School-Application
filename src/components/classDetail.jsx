import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ClassDetail extends Component {
    state = { 
        count:0,
        backgroundColor: '#213919',
        cDetail:this.props.value,
        
     }

    render() {
        var {cDetail} = this.state;
        let text = cDetail.studName+"\n";
        text+="----------------------------\n"

        if (cDetail.present === 'Yes'){
            text+="Present";
            if (cDetail.inBus === 'Yes'){
                text+="\nIn Bus";
            }
            else if(cDetail.inClass == 'Yes'){
                text+="\nIn Class";
            }
        }
        else{
            text+="Absent";
            this.state.backgroundColor = '#cc0000';
            //this.state.backgroundColor= '#f30707';
        }

        
        //console.log(this.props.params.cid)
        let CurrentSnipTextAreaSty = {
            backgroundColor: this.state.backgroundColor,
            border: '1px solid #314929',
            borderWidth: 2,
            //color: '#afac87',
            color: '#ffff',
            fontSize: '1em',
            //height: 'calc(50% - 20px)',
            height:'80px',
            //overflowY: 'auto',
            padding: '5px',
            resize:"none",
            //width: 'calc(100% - 12px)'
            width : '200px'
        };

        return ( 
       
            <div>    
                
                <textarea value= {text} className = "m-2" style={CurrentSnipTextAreaSty} disabled = {true} /> 

                
            </div>
            ); 
    }
}
 
export default ClassDetail;