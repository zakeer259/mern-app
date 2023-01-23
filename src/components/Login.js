
import {useForm} from 'react-hook-form'
import React from 'react'

function Login() {

 const{register,handleSubmit,formState : {errors}}=useForm()

 const onSubmission=(data)=>{
    console.log(data)
 }

    return ( 
      <div className="main">
        <div className="sub-main">
        {/* <div className='row mt-5'> */}
           <div>
            <div className="imgs">
              <div className="container-image">
 

       
              </div>
              <div className="p">
                <div className="x">
                <h1 className="text-success">Login page</h1>
                </div>
                <div>
                  {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Om0qZgAmU-6BWz0O6s8DAKhOHHYoZ10LvaDq72M&s" alt="email" className="email"/> */}
                  <input type="text" placeholder="user name"  className="name"/>
                </div>
               
                <div className="second-input">
                  {/* <img src="" alt="email" className="email"/> */}
                  <input type="text" placeholder="password"  className="name"/>
                </div>
                <div className="login-button">
                <button className="a">Login</button>
                </div>
                
                  <p className="link" >
                  <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a>
                  </p>
              
              </div>

            </div>
        
        </div>
        </div>
         </div>
     );
}

export default Login;