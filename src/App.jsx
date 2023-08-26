import Homepage from './components/Homepage';
import EmployeePage from './components/EmployeePage';
import './App.css'
import { useState } from 'react';

function App() {
//state
  const [currentEmployee, setCurrentEmployee] = useState()
 
  //function as prop
  function handleUserClick(employeeObject) {
    console.log(employeeObject);
  }
  // const [employee, setEmployee] = useState({})
  return (
    <div className="app">
      <Homepage handleUserClick={handleUserClick}/>
      <EmployeePage employee={currentEmployee}/>
    </div>
  );
}
export default App;
