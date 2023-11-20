
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Images from 'src/assets/Images/Images'
import {auth} from "../firebase"

const Home = () => {
  const [selectedItem, setSelectedItem] = useState('home');
  const navigate = useNavigate();

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };
  const userSignOut=()=>{
    signOut(auth)
}
  // Dummy data for days and percentages
  const data = [
    { day: 'Monday', percentage: 20 },
    { day: 'Tuesday', percentage: 40 },
    { day: 'Wednesday', percentage: 60 },
    { day: 'Thursday', percentage: 80 },
    { day: 'Friday', percentage: 30 },
    { day: 'Saturday', percentage: 50 },
  ];

  return (
    
    <div>
      <div className='lmfao'>
      <img src={Images.image2} alt="Example" className='logo2' />
      </div>
      <div>
        <img src={Images.image3} alt="Example" className='logo3' />
        <div className='number'></div>
        <p className='text'>4</p>
      </div>

      <div className='containeremployee'>
        <p className='EmployeeDash'>Employee Productivity Dashboard</p>
      </div>
      <div className='container2'>
        

      </div>
      {data.map((item, index) => (
        <div key={index} className="day-container">
          <p className="day-label">Productivity on {item.day}</p>
          <div className="progress-bar-container">
            <div
              className="progress-fill"
              style={{ width: `${item.percentage}%` }}
            ></div>
          </div>
          <p className="percentage-label"><span className='percent'>{item.percentage}%</span></p>
        </div>
        
      ))}
      <div className='footer'>
      </div>
      <div>
        <img src={Images.image4} 
        alt="Example" 
        onClick={()=>{
          handleSelectItem('home')
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
  

  );
};

export default Home;
