import React from 'react' 
 
const Register = () => { 
  return ( 
    <section className='register'> 
        <form className="form"> 
            <h1 className='title'>Register</h1> 
            <p className='title'>Please fill in this form to create an account.</p> 
            <label className='label' ><b>E-mail</b></label> 
            <input type="text" className="field" placeholder='Enter your e-mail:'/> 
            <label className='label'><b>Password</b></label> 
            <input type="password" className="field" placeholder='Enter your password:'/> 
            <label className='label'><b>Repeat Password</b></label> 
            <input type="password" className="field" placeholder='Repeat your password:'/> 
            <button type="submit" className="btn">Register</button> 
        </form> 
    </section>
  ) 
} 
 
export default Register