import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Joi from 'joi';
import axios from 'axios';
import styleJoin from '../Join/Join.module.css';
import imgJoin from '../../images/gaming.ebaf2ffc84f4451d.jpg';
import imgNav from '../../images/logo.png'



export default function Login({saveData}) {

let [user, setUser] = useState({
    
    email: '',
    password: '',
   
   });
  let [erroData, setErroData] = useState([]);
  let [marrageNotSuccess, setmarrageNotSuccess] = useState("");


  let navigate = useNavigate();
  let goHome = () => {
    navigate('/home');
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
   
  
  async function setUserForApi() {

    let setData = await axios.post('https://movies-api.routemisr.com/signin', user);
     let dataMessage = setData.data.message;
  if (dataMessage === "success") {
    // console.log("s");
    localStorage.setItem("token", setData.data.token);
    saveData();
    goHome();
  
  } else {
    setmarrageNotSuccess(dataMessage);
  }
 
  }


   let getInputs = (e) => {
    // console.log(e.target.value);
    let copyUser ={...user}

    copyUser[e.target.name] = e.target.value;
    setUser(copyUser);
    // console.log(user)


  }

   let regex =() => {
     let scehma = Joi.object({
      email: Joi.string().required().email({ tlds: { allow: ['net', 'com'] } }),
      password:Joi.string().required().pattern(new RegExp(/[a-zA-z]{3,5}[0-9]{3,5}/))
     }) 
    return scehma.validate(user,{abortEarly:false})
  
  }
  return (<>
   
 <div className=' container  ' >
      <div className='row py-5  g-0 '>
        <div className=' col-md-6 '>
          <img className='w-100 h-100' src={`${imgJoin}`} alt=''/>

        </div>

        <div className={`${styleJoin.bgInputs}  col-md-6 p-3  `}>

          <div className='text-center pt-4'>
            <img className={`${styleJoin.imgLogin}`} src={imgNav} alt=""/>
             <h1 className={`${styleJoin.Log} h5 mb-4`}>Log in to GameOver</h1>
          </div>
            
        <form onSubmit={FunSubmit} className='px-5'>
          <div className=' mt-3  '>
              <input onChange={getInputs} type="email" name="email" placeholder="Email Address"  className="form-control form-control-user bg-dark border-0 text-capitalize  text-white"/>
                   {erroData.map((err, index) =>
                  (err.context.label === 'email')?<div key={index} className=' small alert alert-warning py-0 mt-1'>{err.message}</div>:<div></div>
                  
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
           

         <button className={`${styleJoin.btnCreate} btn btn-info  mt-3 w-100 text-white`}>Login </button>

        </form>
          <hr className='mx-5'></hr>
          <div className='text-center'>
            <Link  className={`${styleJoin.colorForgot}  small cursor  text-decoration-none`}>Forgot Password?</Link>
          </div>
          <div className='text-center'>
            <span className="small">Not a member yet? </span>
            <Link  className="small " to="/join"> Create Account
            <i  className="fas fa-chevron-right small"></i></Link>

          </div>


  

        </div>


      </div>
      


      
  </div>
  
  
  
  
  
  </>
  )
}
