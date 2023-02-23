
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
   <div>

    <BrowserRouter>
    <Navbar/>

    <Routes>
        <Route index element-={<EmployeeList />} />
        <Route path="/" element ={<EmployeeList />}></Route>
        <Route path="/employeeList" element ={<EmployeeList />}></Route>
        <Route path="/addEmployee" element ={<AddEmployee />}></Route>
        <Route path="/editEmployee/:id" element ={<UpdateEmployee />}></Route>
    </Routes>

    </BrowserRouter>
   
   </div>
  );
}

export default App;
