import React, { Component } from 'react';
// import "../src/App.css";

export default class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     amountDue: 0,
     amountReceived: 0,
     changeDue: "",
   };
   this.onChange = this.onChange.bind(this);
   this.handleClick = this.handleClick.bind(this);
 }
 
 onChange(e){
   const name = e.target.name;
   const value = e.target.value;
   this.setState({ [name]: value });
 }
 
 handleClick(e){
   const owed = this.state.amountDue;
   const given = this.state.amountReceived;
   const change = given - owed;
 
   this.setState( { changeDue: change });
 }
 
 render() {
   return (
     <div className='container'>
       <div className='change-calc'>
       <h3>Change Calculator</h3>
         <div className="">
           <label htmlFor="amountDue" className="col-4 control-label">Amount Due:</label>
           <div className="col-sm-10">
             <input type="number" className="form-control" name="amountDue" placeholder="Enter Amount Due" onChange={this.onChange} />
           </div>
         </div>
         <div className="form-group">
           <label htmlFor="amountReceived" className="col-4 control-label">Amount Recieved:</label>
           <div className="col-sm-10">
             <input type="number" className="form-control" name="amountReceived" placeholder="How much was received?" onChange={this.onChange}/>
           </div>
         </div>
         <div className="form-group">
           <div className="col-sm-10">
             <button type="submit" className="submit btn btn-default" name="submit" onClick={this.handleClick}>Submit</button>
           </div>
         </div>
         <div className="form-group">
           <div className="col-sm-10">
             <div className="alert alert-success">
               The total change due is {""} { new Intl.NumberFormat('dollars', {style: 'currency', currency: 'USD'}).format(this.state.changeDue)}
             </div>
         </div>
       </div>
   </div>
   </div>
 )}
}
