import './homepage.css'
import EmployeeList from './EmployeeList';
import Header from './Header';
import SearchBar from './SearchBar';

function Homepage({handleUserClick}) {
    
    return ( 
    <div className='homepage'>
    <Header title="Employee Directory" />
    <SearchBar />
    <EmployeeList handleUserClick={handleUserClick}/>
    </div>
    )
  }
  
  export default Homepage;