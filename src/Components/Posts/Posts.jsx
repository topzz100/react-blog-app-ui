import React from 'react'
import Post from '../Post/Post'
import { Content, Wrapper } from './Posts.styles'

const Posts = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </Content>
      </Wrapper>
    </>
  )
}

export default Posts
