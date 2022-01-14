import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import SideBar from '../../Components/SideBar/SideBar'
import SinglePost from'../../Components/SinglePost/SinglePost'
import { Content, Wrapper} from './Single.styles'

const Single = () => {
  return (
    <>
      <NavBar/>
      <Wrapper>
        <Content>
          <SinglePost/>
          <SideBar/>
        </Content>
      </Wrapper>
    </>
  )
}

export default Single
