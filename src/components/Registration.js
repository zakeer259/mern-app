import React from 'react'
import {useForm} from 'react-hook-form'



//form submission




function Registration() {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const onFormSubmit=(data)=>{
        console.log(data)
    }

    
    return ( 
        <div className="row mt-3">
            <div className="col-11 col-sm-8 col-md-6 mx-auto">
            <p className="display-1 text-center text-success ">User Registration</p>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            {/*  username */}
            <div className="mb-3">
                <label htmlFor="name">UserName</label>
                <input type="text" id="un" className="form-control" {...register("username",{required : true,minLength:4})}/>
                {errors.username?.type==='required' && <p className='text-danger'>*username is required</p>}
                {errors.username?.type==='minLength' && <p className='text-danger'>min length should be 4</p>}
            </div>
             {/*  email */}
            <div className="mb-3">
                <label htmlFor="emeail">Email</label>
                <input type="email" id="email" className="form-control" {...register("email")}/>
            </div>
                       {/* password */}
                       
            <div className="mb-3">
                <label htmlFor="emeail">Password</label>
                <input type="password" id="password" className="form-control" {...register("password")}/>
            </div>


             {/*  Date if birth */}
            <div className="mb-3"> 
                <label htmlFor="dob">Date of birth</label>
                <input type="date" id="dob" className="form-control" {...register("dob")}/>
            </div>
            <div className="mb-3"> 
                <label htmlFor="branch">Branch</label>
                <select id="branch" className="form-select" {...register("branch")}>
                  <option value="cse">CSE</option>
                  <option value="it">IT</option>
                  <option value="ece">ECE</option>
                </select>
                </div>
                <div className="mb-3">
                   <label>Choose a gender</label>
                   {/* male */}
                   <div className="form-check">
                    <input type="radio" id="male" className="form-check-input" {...register("gender")} value="male"/>
                    <label htmlFor="male" className="form-check-label">Male</label>
                   </div>

                    {/*female */}
                   <div className="form-check">
                    <input type="radio" id="female" className="form-check-input" {...register("gender")} value="female"/>
                    <label htmlFor="female" className="form-check-label">Female</label>
                   
                </div>
            </div>

            {/* submit button */}
            <button type="submit" className="btn btn-success w-100">Submit</button>
            

          </form>
          </div>
        </div>
     );
}

export default Registration;