import httpClient from "../commons/http-common";

const getHello = () => {
    
    return httpClient.get('/hello');
}

const getEmployees = () => {
    
    return httpClient.get('/employees');
}

const postEmployee = (data) =>{
    return httpClient.post("/employees", data);
}

const putEmployee = (data) =>{
    return httpClient.put("/employees", data);
}

const getEmployee = (id) => {
    
    return httpClient.get(`/employees/${id}`); //note: diff single qoute
}

const deleteEmployee = (id) =>{
    return httpClient.delete(`/employees/${id}`)
}

export default {getHello, getEmployees, postEmployee, putEmployee ,getEmployee, deleteEmployee};