import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import context from '../../Context/Context';
import { Wrapper, Content } from './NavBar.styles'

const NavBar = () => {
   const PF = `${process.env.REACT_APP_BASE_URL}/images/`;
  const {user, dispatch} = useContext(context)

  const handleLogOut = () => {
    console.log('logOut')
    dispatch({type: 'LOGOUT'})
  }
  return (
    <>
      <Wrapper>
        <Content>
          <div className="left">
            <ul className="socials">
              <li>
                <i class="fab fa-facebook-square"></i>
              </li>
              <li>
                <i class="fab fa-instagram-square"></i>
              </li>
              <li>
               <i class="fab fa-pinterest-square"></i>
              </li>
              <li>
                <i class="fab fa-twitter-square"></i>
              </li>
            </ul>
          </div>
          <div className="center">
            <ul className="links">
              <li>
                <Link to ='/'>
                  home
                </Link>
              </li>
              <li>about</li>
              <li>contact</li>
              <li>
                <Link to ='/write'>
                  write
                </Link>
              </li>
              <li className='logOut' onClick={handleLogOut} >logout</li>
            </ul>

          </div>
          <div className="right">
            <Link to={'/settings'}>
              <img src = { user?.profilePic? PF+user?.profilePic : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}/>
            </Link>
            <i class="fas fa-search"></i>
            {/* <button onClick={()=> handleLogOut}>LOG OUT</button> */}
          </div>
        </Content>
      </Wrapper>
    </>
  )
}

export default NavBar
