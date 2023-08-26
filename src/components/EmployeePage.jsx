import Header from './Header';
import './employeepage.css'

function EmployeePage({ employee }) {
    
    return (
    <div className='employeepage'>
    <Header title="Employee" />
    <div className='employeeOverview'>
        <div className='profilePic'></div>
        <div className='profileInfo'>
        <h2>Julie Taylor</h2>
        <p>VP of Marketing</p>
        </div>
        </div>
    <div className='employeeOffice'>
    <h3>Call Office</h3>
        <p>781-885-8956</p>
        </div>
    <div className='employeeMobile'>
    <h3>Call Mobile</h3>
        <p>617-859-8874</p>
        </div>
    <div className='employeeSMS'>
    <h3>SMS</h3>
        <p>617-859-8874</p>
        </div>
    <div className='employeeEmail'>
    <h3>Email</h3>
        <p>jTaylor@marketing.com</p>
        </div>
    </div>
    )
  }
  
  export default EmployeePage;