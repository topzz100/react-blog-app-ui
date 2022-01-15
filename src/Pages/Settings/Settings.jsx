import React from 'react'
import { Content, Wrapper, Main } from './Settings.styles'
import NavBar from '../../Components/NavBar/NavBar'
import SideBar from '../../Components/SideBar/SideBar'

const Settings = () => {
  return (
    <>
      <NavBar/>
      <Wrapper>
       <Content>
         <Main>
          <div className="settingsTitle">
            <span className="update">Update Your Account</span>
            <span className="del">Delete Account</span>
          </div>
          <form action="">
            <label htmlFor="">Profile Picture</label>
            <div className="profilePic">
              <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
              <label htmlFor="addImg">
                <i class="fas fa-user-circle"></i>
              </label>
              <input type="file" id='addImg' style={{display : "none"}}/>
            </div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Smith' />
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Smith@mail.com' />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' />
            <button type="submit">Update</button>
          </form>
         </Main>
         <SideBar/>
       </Content>
      </Wrapper> 
    </>
  )
}

export default Settings
