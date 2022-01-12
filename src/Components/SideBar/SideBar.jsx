import React from 'react'
import { Content, Wrapper } from './SideBar.styles'

const SideBar = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <div className="about">
            <h4 className="title">
              ABOUT ME
            </h4>
            <img
            src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
            alt=""
            />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat voluptate dolor nihil tempore sint aspernatur amet at maiores ut perspiciatis.</p>
          </div>
          <div className="cat">
            <h4 className="title">
              CATEGORIES
            </h4>
            <ul>
              <li>life</li>
              <li>music</li>
              <li>sport</li>
              <li>style</li>
              <li>tech</li>
              <li>cinema</li>
            </ul>
          </div>
          <div className="follow">
            <h4 className="title">
              FOLLOW US
            </h4>
              <ul>
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
        </Content>
      </Wrapper>
    </>
  )
}

export default SideBar
