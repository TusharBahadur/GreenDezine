
import Images from 'src/assets/Images/Images'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const EmployeeDetails = () => {
  const [searchQuery,setSearchQuery] = useState('')
    const [selectedItem, setSelectedItem] = useState('employee');
    const handleSelectItem = (item) => {
        setSelectedItem(item);
      };
    const navigate=useNavigate();
    const employees = [
        {
          id: '1',
          name: 'John Doe',
          dob: '1990-01-15',
          role: 'Software Developer',
        },
        {
          id: '2',
          name: 'Jane Doe',
          dob: '1985-05-22',
          role: 'Product Manager',
        },
      ];

      const filteredEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
  return (
    <div>
        <div>
      <img src={Images.image2} alt="Example" className='logo2'/>
      <div>
        <img src={Images.image3} alt="Example" className='logo3'/>
        <div className='number'>
        </div>
        <p className='text'>4</p>
        
      </div>
      
      
      <div className='inputname'>
             <input 
             className='containeremployee2'
             type="search"
             placeholder='Search with name'
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             /> 
             <div className='search-icon'>
             <img src={Images.image6} alt="Example" className='search-icon'/>
             </div>
   
   </div>

   <div className='employee-details-container'>
      {filteredEmployees.map((employee) => (
        <div className='employee-card' key={employee.id}>
          <div className='employee-info'>
            <p className='emp-id'>EMP ID : {employee.id}</p>
            <p className='emp-name'>Name : <b>{employee.name}</b></p>
            <p className='emp-dob'>DOB  : <span className='dob'>{employee.dob}</span></p>
            <p className='emp-role'>Role : <span className='role'>{employee.role}</span></p>
          </div>
          <div className='card-number'>
            <p>{employee.id}</p>
          </div>
        </div>
      ))}
    </div>
      </div>
      <div className='footer'>
      </div>
      <div>
        <img src={Images.image4} 
        alt="Example" 
        onClick={()=>{
          handleSelectItem('home')
          navigate('/home')
        }}
        className='HomeLogo'/>
      </div>
      <div>
        <img src={Images.image5} 
        alt="Example" 
        className='EmployeeLogo'
        onClick={()=>{
          handleSelectItem('employee')
          navigate('/EmployeeDetails')
        }}
        
        />
      </div>
      {selectedItem==='home' ? (
        <div className='homebackground'></div>
      ):(
        <div className='employeebackground'></div>


      )}
    </div>
  )
}

export default EmployeeDetails
