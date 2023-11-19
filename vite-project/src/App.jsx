
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import CreateUser from './components/CreateUser'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import EmployeeDetails from './components/EmployeeDetails';
const App=()=> {

  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/CreateUser' element={<CreateUser/>}/>
          <Route path='/EmployeeDetails' element={<EmployeeDetails/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
