import React, { useState } from 'react';
import imgJoin from '../../images/gaming.ebaf2ffc84f4451d.jpg';
import styleJoin from './Join.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

export default function Join() {
  let [user, setUser] = useState({
    
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    age: ''
   
  });

  let [erroData, setErroData] = useState([]);
  let [marrageNotSuccess , setmarrageNotSuccess]= useState('')


let navigate = useNavigate();
  let goLogin = () => {
    navigate('/');
  }
  
  let regex =() => {
     let scehma = Joi.object({
      first_name: Joi.string().alphanum().required().min(2).max(10),
      last_name: Joi.string().alphanum().required().min(2).max(10),
      age: Joi.number().required().min(20).max(80),
      email: Joi.string().required().email({ tlds: { allow: ['net', 'com'] } }),
      password:Joi.string().required().pattern(new RegExp(/[a-zA-z]{3,5}[0-9]{3,5}/))
     }) 
    return scehma.validate(user,{abortEarly:false})
  
}  

async function setUserForApi() {

    let setData = await axios.post('https://movies-api.routemisr.com/signup', user);
      //  console.log(setData.data);
  if (setData.data.message === "success") {
    console.log("s")
    goLogin();
  
  } else {
    setmarrageNotSuccess(setData.data.message);
  }

  }

    let FunSubmit = (e) => {
      e.preventDefault();
      regex();
      let validationData = regex();
      // console.log(validationData)
      if (validationData.error) {
        setErroData(validationData.error.details);

      } else {
       setUserForApi();

      }
      

  }

  let getInputs = (e) => {
    // console.log(e.target.value);
    let copyUser ={...user}

    copyUser[e.target.name] = e.target.value;
    setUser(copyUser);
    // console.log(user)


  }
  return (<>
    
    <div className=' container  ' >
      <div className='row py-5  g-0 '>
        <div className=' col-md-6 '>
          <img className='w-100 h-100' src={`${imgJoin}`} alt=''/>

        </div>

        <div className={`${styleJoin.bgInputs} col-md-6 p-3`}>

          <div className='text-center'>
             <h1 className={`${styleJoin.Create} h5 mb-4`}>Create My Account!</h1>
          </div>
            
        <form onSubmit={FunSubmit}>

          <div className='row '>
              <div className='col-md-6 '>

                <input onChange={getInputs} type="text" name="first_name" placeholder="First Name"  className="form-control form-control-user  bg-dark border-0 text-white"/>
                {erroData.map((err, index) => 
                  (err.context.label === 'first_name')?<div key={index} className=' small alert alert-warning py-0 mt-1 '>{err.message}</div>:<div></div>

                  )}
            </div>

            <div className='col-md-6 mt-3  mt-lg-0 mt-xl-0 mt-md-0 '>
              <input onChange={getInputs} type="text" name="last_name" placeholder="last name" className="form-control form-control-user  bg-dark border-0 text-capitalize text-white"/>
                {erroData.map((err, index) =>
                  (err.context.label === 'last_name')?<div key={index} className=' small alert alert-warning py-0 mt-1'>{err.message}</div>:<div></div>
                  
                  )}
            </div>

          </div>

          <div className=' mt-3 '>
              <input onChange={getInputs} type="email" name="email" placeholder="Email Address"  className="form-control form-control-user bg-dark border-0 text-capitalize  text-white"/>
                   {erroData.map((err, index) =>
                  (err.context.label === 'email')?<div key={index} className=' small alert alert-warning py-0 mt-1'>{err.message}</div>:<div></div>
                  
                  )}
          </div>

           <div className=' mt-3 '>
              <input onChange={getInputs} type="number" name="age" placeholder="age "   className="form-control form-control-user deep-dark  bg-dark border-0 text-capitalize text-white"/>
                    {erroData.map((err, index) =>
                  (err.context.label === 'age')?<div key={index} className=' small alert alert-warning py-0 mt-1'>{err.message}</div>:<div></div>
                  
                  )}
          </div>

          <div className=' mt-3 '>
              <input onChange={getInputs} type="password" name="password" placeholder="password "  className="form-control form-control-user bg-dark border-0 text-capitalize text-white"/>
                        {erroData.map((err, index) =>
                          (err.message === 'password is not allowed to be empty') ? <div key={index} className=' small alert alert-warning py-0 mt-1'> "email" is not allowed to be empty</div> : (err.context.label === 'password') ? <div key={index} className=' small alert alert-warning mt-1 py-0'>
                            You must write from 3 to 6 letters, after that from 3 to 6 numbers
                          </div> : <div></div>
                  
                  )}
            </div>
            {marrageNotSuccess? <div className='small alert  alert-danger py-1 mt-2'>{marrageNotSuccess}</div>:<div></div>}
           

         <button className={`${styleJoin.btnCreate} btn btn-info mb-3  mt-3 w-100 text-white`}>Create Account </button>

          </form>

          <small className="text-muted  text-center   pb-3 text-wrap  ">This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" className="text-secondary ">Privacy Policy</a> and
            <a href="https://policies.google.com/terms" className="text-secondary">Terms of Service</a> apply.
          </small>

          <hr></hr>

          <div  className={`${styleJoin.Already} text-center`}><span className="small">Already a member?</span>
            <Link className={`${styleJoin.colorForgot} small text-decoration-none cursor ms-2`} to='/'> Log In
              <i className="fas fa-chevron-right small"></i>
            </Link></div>











        </div>


      </div>
      


      
  </div>
  
  
  
  
  
  
  </>
  )
}
