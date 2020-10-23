import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class StudentDetail extends Component {
    state = { 
        count:0,
        backgroundColor: '#213919',
        //cDetail:this.props.value,
        
     }

    render() {
        let text = this.props.value;
        const Present = false
        /*
        if(Present){
            text = "Vaishwi Patel\nPresent:Yes\nIn bus:Yes";
        }
        else{
            text = "Vaishwi Patel\nAbsent";
            this.state.backgroundColor= '#f30707';
        }
        */
        let CurrentSnipTextAreaSty = {
            backgroundColor: this.state.backgroundColor,
            border: '1px solid #314929',
            borderWidth: 2,
            color: '#afac87',
            fontSize: '1em',
            //height: 'calc(50% - 20px)',
            height:'65px',
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
 
export default StudentDetail;