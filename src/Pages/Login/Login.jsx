import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Content, Wrapper } from './Login.styles'

const Login = () => {
  return (
    <>
      <NavBar/>
      <Wrapper>
        <Content>
          <h4>Login</h4>
          <form action="">
            
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Smith@mail.com'/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password'/>
            <button type='submit'>Login</button>
            
          </form>
          <button className='reg'>Register</button>
        </Content> 
      </Wrapper> 
    </>
  )
}

export default Login
