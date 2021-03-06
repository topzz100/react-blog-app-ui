
import React, { useContext} from 'react'
import { Link } from "react-router-dom";
import context from '../../Context/Context';
import { Content, Wrapper } from './MediaSide.styles';

const MediaSide = () => {
   const {dispatch, show, setShow} = useContext(context) 
   const handleLogOut = () => {
    console.log('logOut')
    dispatch({type: 'LOGOUT'})
  }
   
  return <>
  <Wrapper>
    <Content>
       <ul className="links">
              <li onClick = {() => setShow(!show)}>
                <Link to ='/'>
                  home
                </Link>
              </li>
              <li onClick = {() => setShow(!show)}>
                <Link to ='/about'>
                  about
                </Link>
               </li>
              <li onClick = {() => setShow(!show)}>contact</li>
              <li onClick = {() => setShow(!show)}>
                <Link to ='/write'>
                  write
                </Link>
              </li>
             <li className='logOut' onClick={handleLogOut} >logout</li>
              <li onClick = {() => setShow(!show)}>
                <ul className="socials">
                  <li onClick = {() => setShow(!show)}>
                    <i class="fab fa-facebook-square"></i>
                  </li>
                  <li onClick = {() => setShow(!show)}>
                    <i class="fab fa-instagram-square"></i>
                  </li>
                  <li onClick = {() => setShow(!show)}>
                  <i class="fab fa-pinterest-square"></i>
                  </li>
                  <li onClick = {() => setShow(!show)}>
                    <i class="fab fa-twitter-square"></i>
                  </li>
            </ul>
              </li>
            </ul>
    </Content>
  </Wrapper>
  </>;
};

export default MediaSide;
