import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import context from '../../Context/Context';
import { Wrapper, Content } from './NavBar.styles'

const NavBar = () => {
   const PF = "http://127.0.0.1:5500/images/";
  const {user} = useContext(context)
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
              <li>logout</li>
            </ul>

          </div>
          <div className="right">
            <Link to={'/settings'}>
              <img src = { user.profilePic? PF+user.profilePic : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}/>
              <i class="fas fa-search"></i>
            </Link>
          </div>
        </Content>
      </Wrapper>
    </>
  )
}

export default NavBar
