import React, { Component } from 'react';

//import './schoolClass/'
 
class Counter extends Component {
    //state = {  } // explore later
    // state object contain data that this compoent need

    state = {
        count:1
        //cName: schoolClass.getClassName()
        
    };
    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    };
    render() { 

        //let classes = this.getBadgeClasses();

        return(
            <React.Fragment>
                
                <span className={this.getBadgeClasses()}>{this.formartCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
          );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formartCount(){
        const {count } =this.state;
        const x  = <h1>Zero</h1>
        //return count === 0 ? <h1>zero</h1> :count;
        return count === 0 ? x :count;
    }
}
 
export default Counter;


// for add image imageUrl:"https://picsum.photos/200" and <img src={this.state.imageUrl} alt=""/>
//<span style ={{fontSize:30}} className="badge badge-primary m-2">{this.formartCount()}</span>