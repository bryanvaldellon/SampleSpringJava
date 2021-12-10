import employeeService from '../services/employee.service';
import { useEffect, useState } from 'react';

const Hello = () =>{

    const [hello, setHello] = useState([]);

    useEffect( () => {
        employeeService.getHello()
        .then(
        response => {
            setHello(response.data);
        }
        )
    }

    )

    return hello;

}

export default Hello;