import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Content, Wrapper } from './Register.styles'

const Register = () => {
  return (
    <>
      <NavBar/>
      <Wrapper>
        <Content>
          <h4>Register</h4>
          <form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Name'/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Smith@mail.com'/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password'/>
            <button type='submit'>Register</button>
            
          </form>
          <button className='reg'>Login</button>
        </Content> 
      </Wrapper> 
    </>
  )
}

export default Register
