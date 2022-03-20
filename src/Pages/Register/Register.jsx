import React, { useRef } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Content, Wrapper } from './Register.styles'
import axios from 'axios'

const Register = () => {
  const passwordRef = useRef()
  const usernameRef = useRef()
  const emailRef = useRef()

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const res = await axios.post('/api/auth/register', {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <NavBar/>
      <Wrapper>
        <Content>
          <h4>Register</h4>
          <form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='username' ref={usernameRef}/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Smith@mail.com'  ref={emailRef}/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password'  ref={passwordRef}/>
            <button type='submit'>Register</button>
            
          </form>
          <button className='reg'>Login</button>
        </Content> 
      </Wrapper> 
    </>
  )
}

export default Register
