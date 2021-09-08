import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class Employee extends Component {
constructor(props) {
    super(props)

    this.state = {
         employees : []
    }
    this.addEmployee= this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
}
editEmployee(id){
    this.props.history.push(`/update-employees/${id}`);
}
deleteEmployee(id){
       EmployeeService.deleteEmployee(id).then(res =>{
           this.setState({employees: this.state.employees.filter(employee => employee.id !== id)})
       })
}

componentDidMount(){
    EmployeeService.getEmployees().then((res) => {
        this.setState({employees : res.data});
    });
}

addEmployee(){
    this.props.history.push('/add-employees')
}

    render() {
        return (
            <div className="container">
                {/* <h2 className="text-center bg-warning" style={{border: "solid #e0e0e0 1px", marginTop:"10px", padding:"10px"}}>Employee List</h2> */}
                <h2 className="text-center py-2 my-3"style={{border:"1px solid #d3d2d4", fontFamily: "Times New Roman"}}>Employee List</h2>
                <div>
                        <button className ="btn btn-primary"
                         onClick={this.addEmployee}>Add Employee</button>
                </div>
<hr/>
                <div className="row">
                    <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Employee First Name</th>
                                    <th>Employee Last Name</th>
                                    <th>Employee Email Id</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee=>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                                <button onClick={()=> this.editEmployee(employee.id)} 
                                                className="btn btn-info" style={{marginLeft:"20px"}} >Update</button>

                                                <button onClick={()=> this.deleteEmployee(employee.id)} 
                                                className="btn btn-danger" style={{marginLeft:"20px"}}>Delete</button>
                                            </td>

                                        </tr>
                                    )
                                }
                            </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
