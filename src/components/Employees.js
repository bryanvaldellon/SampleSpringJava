import employeeService from '../services/employee.service';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';

const Employees = () =>{

    const [employees, setEmployees] = useState([]);

    useEffect( () => {
        refreshEmployeeTable();
    }
    )

    const refreshEmployeeTable = () =>{
        employeeService.getEmployees()
        .then(
        response => {
            setEmployees(response.data);
        }
        )
        .catch(
            error =>{
                console.error("something went wrong!")
            }
        )
    }

    const deleteEmployee = (id) =>{
        employeeService.deleteEmployee(id)
        .then(
            response =>{
                console.debug("deleted!")
                refreshEmployeeTable();
            }
        )
        .catch(
            error =>{
                console.error("delete unsuccessful!")
            }
        )
    }

    return(
        <div className="container">
            <h3>List of Employees</h3>
            <div>
                <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
                <table className="table table-light table-hover table-striped">
                    <thead>
                        <tr className="table-info">
                            <td>Name</td>
                            <td>Department</td>
                            <td>Location</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee =>(
                                    <tr key={employee.id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.department}</td>
                                        <td>{employee.location}</td>
                                        <td>
                                            <div className="d-grid gap-2 d-md-block ">
                                                <Link className="btn btn-info" to={`/employees/edit/${employee.id}`}>Update</Link>
                                                <button 
                                                className="btn btn-danger" 
                                                onClick={(e) => deleteEmployee(employee.id)}
                                                data-toggle="modal" data-target={"#exampleModal"}
                                                >Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Employees;