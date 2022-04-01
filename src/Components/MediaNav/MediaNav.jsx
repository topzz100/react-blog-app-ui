import React, { useContext} from 'react'
import { Link } from "react-router-dom";
import context from '../../Context/Context';
import { Content, Wrapper } from './MediaNav.styles';

const MediaNav = () => {
  const {user, setShow, show} = useContext(context) 
  const PF = "https://holar-blog-app.herokuapp.com/images/";
  return <>
    <Wrapper>
      <Content>
            <div className="left">
              <Link to ='/settings'>
                <img src= { user?.profilePic? (PF + user.profilePic) : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'} alt="" />
              </Link>
            
              
              <i class="fas fa-search"></i>
            </div>
            <div className="right">
              <i class="fas fa-bars" onClick = {() => setShow(!show)}></i>
            </div>

        
      </Content>
    </Wrapper>
  </>;
};

export default MediaNav;
