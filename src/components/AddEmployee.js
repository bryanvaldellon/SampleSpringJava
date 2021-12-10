import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import employeeService from "../services/employee.service";

const AddEmployee = () =>{

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    const saveEmployee = (e) =>{
        e.preventDefault();

        const employee = {name, location, department, id};

        if(id){
            //updateemployee
            employeeService.putEmployee(employee)
            .then(response =>{
                console.log("employee updated!", response.data);
                navigate("/employees");
            })
            .catch(error =>{
                console.log("something went wrong!")
            })
        }
        else{
            //addemployee
            employeeService.postEmployee(employee)
            .then(response =>{
                console.log("employee added!", response.data);
                navigate("/employees");
            })
            .catch(error =>{
                console.log("something went wrong!")
            })
        }

    }

    useEffect(() =>{
        if(id){
            employeeService.getEmployee(id)
            .then(response =>{
                setName(response.data.name);
                setLocation(response.data.location);
                setDepartment(response.data.department);
            })
            .catch(error =>{
                console.log("something went wrong!")
            })
        }
    },[]) // add empty array for you to enter to the fields

    return(
        <div className="container mb-2">
            <h3>Add new employee</h3>
            <form>
                <div className="mb-3">
                    <label for="addName" className="form-label">Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter name of employee" 
                        value={name} 
                        className="form-control" 
                        id="addName" 
                        aria-describedby="nameHelp"
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        />
                </div>
                <div className="mb-3">
                    <label for="addLocation" className="form-label">Location</label>
                    <input 
                        type="text" 
                        placeholder="Enter location of employee" 
                        value={location} 
                        className="form-control" 
                        id="addLocation" 
                        onChange={
                            (e) => setLocation(e.target.value)
                        }
                        />
                </div>
                <div className="mb-3">
                    <label for="addDepartment" className="form-label">Department</label>
                    <input 
                        type="text" 
                        placeholder="Enter department of employee" 
                        value={department} 
                        className="form-control" 
                        id="addDepartment"
                        onChange={
                            (e) => setDepartment(e.target.value)
                        }
                        />
                </div>
                <a type="submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Submit</a>
            </form>
        </div>
    );
}
export default AddEmployee;