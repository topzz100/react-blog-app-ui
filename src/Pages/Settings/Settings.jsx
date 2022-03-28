import React, { useContext, useState } from 'react'
import { Content, Wrapper, Main } from './Settings.styles'
import NavBar from '../../Components/NavBar/NavBar'
import SideBar from '../../Components/SideBar/SideBar'
import context from '../../Context/Context'
import axios from 'axios'

const Settings = () => {
    const {user, dispatch, show } = useContext(context)
  const [file, setFile] = useState(null)
  const[username, setUsername] = useState(user.username)
  const[email, setEmail] = useState(user.email)
  const[password, setPassword] = useState('')
  const [link, setLink] = useState('')

  //  const PF = "http://127.0.0.1:5500/images/";

    const filename = Date.now() + file?.name
   const handleUpdate = async(e) => {
    e.preventDefault()
    dispatch({type: 'UPDATE_START'})
    const updatedUser = {
      userId: user._id,
      username,
      password,
      email
    };
    if(file){
      const data = new FormData()
      
      data.append('name', filename)
      data.append('file', file)
      updatedUser.profilePic = filename
      try{
        await axios.post('http://127.0.0.1:5500/api/upload', data)
      }catch(err){
        console.log(err);
      }
    }
    try{
      const res = await axios.put('http://127.0.0.1:5500/api/users/' + user._id, updatedUser)
      dispatch({type: 'UPDATE_SUCCESS', payload: res.data})
      res.data && window.location.replace('/')
    }catch(err){
      dispatch({type: 'UPDATE_FAILURE'})
      console.log(err);
    }
  }

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
          <form action="" onSubmit={handleUpdate}>
            <label htmlFor="">Profile Picture</label>
            <div className="profilePic">
              {
                file? 
                <img src={URL.createObjectURL(file)} alt="" />:
                // 
                <img src={link} alt="" />
              }
              
              <label htmlFor="addImg">
                <i class="fas fa-user-circle"></i>
              </label>
              <input type="file" id='addImg' style={{display : "none"}} onChange = {(e) => {setFile(e.target.files[0])}}/>
            </div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder={username}  onChange ={(e) => {setUsername(e.target.value)}}/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder={email} onChange ={(e) => {setEmail(e.target.value)}}/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' onChange ={(e) => {setPassword(e.target.value)}} />
            <button type="submit" >Update</button>
          </form>
      
          {/* <div className="settingsTitle">
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
          </form> */}
         </Main>
         <SideBar/>
       </Content>
      </Wrapper> 
    </>
  )
}

export default Settings
