import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () =>
 {
    const[employee,setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId:"",

    });

    const handleChange = (e) =>

    {
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]: value});
    };

    const navigate= useNavigate();

    const saveEmployee =(e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response)
            
            if(response.status === 200)
            alert("Your data has been saved successfully!")
            navigate("/employeeList")
        }).catch((error) => {
            console.log(error)
        })
       

    };
    const reset = (e) => {
        e.preventDefault();
        setEmployee({id: "",
        firstName: "",
        lastName: "",
        emailId:""
    },
)
    }
  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            
            <div>
            <h1 className='font-thin text-2xl tracking-wider'>Add New Employee</h1>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className="block text-gray-600 text-sm font-normal "> First Name </label>
                <input type="text" name="firstName" value={employee.firstName} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>  

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className="block text-gray-600 text-sm font-normal "> Last Name </label>
                <input type="text" name="lastName" value={employee.lastName}  onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className="block text-gray-600 text-sm font-normal "> Email Name </label>
                <input type="text" name='emailId' value={employee.emailId} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
            <button onClick={saveEmployee} className='rounded text-white font-semibold bg-blue-400 py-2 px-6 hover:bg-blue-800' >Save</button>

            <button onClick={reset} className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-800' >Clear</button>
            </div>

           
            
        </div>
    </div>
  )
}

export default AddEmployee