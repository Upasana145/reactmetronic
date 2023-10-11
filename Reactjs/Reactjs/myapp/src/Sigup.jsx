import React ,{useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import Validation from './Signupvalidation';
import axios from "axios"


function Sigup() {

  const [values, setValues]  = useState({
  firstname : '',
  lastname : '',
  email : '', 
  password: ''

})
const navigate = useNavigate();

const [error,setErrors] = useState({})

const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
}


const handleSubmit = (event) =>{
  event.preventDefault();
  const err = Validation(values);
  setErrors(err);
  if(err.firstname === "" && err.lastname === "" && err.email === "" && err.password === "")
  {
     axios.post('http://localhost:8081/signup',values)      
     .then(res => 
      {
        navigate('/');
      }
       )
     .catch(err => console.log(err));
  }


}


return(
<>
<div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>

      <h2>Sign-Up</h2>
      <form action="" onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="firstname"><strong>First Name</strong></label>
            <input  type="text" placeholder="Enter Name" name ='firstname'
            onChange={handleInput}  className='form-control rounded-0' />
            {error.firstname && <span className="text-danger">{error.firstname}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="lastname"><strong>Last Name</strong></label>
            <input  type="text" placeholder="Enter Name" name ='lastname'
            onChange={handleInput}  className='form-control rounded-0' />
            {error.lastname && <span className="text-danger">{error.lastname}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input  name =  "email" type="email" placeholder="Enter Email"  
            onChange={handleInput}    className='form-control rounded-0' />
            {error.email && <span className="text-danger">{error.email}</span>}

          </div>

          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input  name = "password" type="password" placeholder="Enter Password"
            onChange={handleInput}   className='form-control rounded-0' />
            {error.password && <span className="text-danger">{error.password}</span>}
          </div>

          <button type="submit"   className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
          <p>Your are agree to our terms and policies</p>

          <Link to="/" className='btn btn-success w-100 rounded-0 text-decoration-none'>Login</Link>
      </form>

        </div>

    </div>






</>
)
}

export default Sigup;