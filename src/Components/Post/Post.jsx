import React from 'react'
import { Wrapper, Content } from './Post.styles'

const Post = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          <div className="categories">
            <span>Music</span><span>Life</span>
          </div>
          <h4 className="title">Lorem ipsum dolor</h4>
          <span className='time'>1 hour ago</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti amet, quae eum quibusdam ratione minus consequatur architecto cupiditate non laboriosam natus distinctio nemo accusamus debitis dolor magnam sint? Architecto provident repellat quidem temporibus culpa praesentium optio, dolores dolorem cupiditate! Repellat ipsum harum cumque, quos maxime perspiciatis molestias voluptates deleniti.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti amet, quae eum quibusdam ratione minus consequatur architecto cupiditate non laboriosam natus distinctio nemo accusamus debitis dolor magnam sint? Architecto provident repellat quidem temporibus culpa praesentium optio, dolores dolorem cupiditate! Repellat ipsum harum cumque, quos maxime perspiciatis molestias voluptates deleniti
          </p>
        </Content>  
      </Wrapper> 
    </>
  )
}

export default Post
