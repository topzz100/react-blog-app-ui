import React from 'react'
import { Wrapper, Content } from './NavBar.styles'

const NavBar = () => {
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
              <li>home</li>
              <li>about</li>
              <li>contact</li>
              <li>write</li>
              <li>logout</li>
            </ul>

          </div>
          <div className="right">
            <i class="fas fa-search"></i>
          </div>
        </Content>
      </Wrapper>
    </>
  )
}

export default NavBar
