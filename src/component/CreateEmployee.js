 import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
 
 export default class CreateEmployee extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              firstName:'',
              lastName:'',
              email:''
         }
         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
         //this.changeEmailHandler = this.changeEmailHandler.bind(this);
         this.saveEmployee = this.saveEmployee.bind(this);
         this.cancle = this.cancle.bind(this);
     }
    saveEmployee = (e) =>{
        e.preventDefault();
    let employee ={firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
    EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        })
       

}

     changeFirstNameHandler = (e) => {
            this.setState({firstName:e.target.value});
     }
     changeLastNameHandler =(e)=>{
         this.setState({lastName:e.target.value});
     }
     
     changeEmailHandler =(e) =>{
         this.setState({email:e.target.value});
     }
     
     cancle(){
        this.props.history.push('/employees')
     } 
     render() {
         return (
            /*  <div>
             <h1>hiii</h1></div> */
              <div>
                <div className="container my-5">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3">
                            <h3 className="text-center my-3">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input placeholder="Email Id" name="email" className="form-control"
                                        value={this.state.email} onChange={this.changeEmailHandler.bind(this)}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    
                                    <button className="btn btn-danger my-2" onClick={this.cancle}
                                    style={{marginLeft : "10px"}}>Cancle</button>
                                </form>

                            </div>

                        </div>
                     </div>
                 </div>
             </div> 
         )
     }
 }
 