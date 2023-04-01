import React from 'react'
import { Link } from "react-router-dom";
import { Wrapper, Content } from './Post.styles'

const Post = ({post}) => {
  const PF = `${process.env.REACT_APP_BASE_URL}/images/`;
  return (
    <>
      <Wrapper>
        <Content>
          {/* <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          <div className="categories">
            <span>Music</span><span>Life</span>
          </div>
          <Link to = '/single'>
            <h4 className="title">Lorem ipsum dolor</h4>
          </Link>
          
          <span className='time'>1 hour ago</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti amet, quae eum quibusdam ratione minus consequatur architecto cupiditate non laboriosam natus distinctio nemo accusamus debitis dolor magnam sint? Architecto provident repellat quidem temporibus culpa praesentium optio, dolores dolorem cupiditate! Repellat ipsum harum cumque, quos maxime perspiciatis molestias voluptates deleniti.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti amet, quae eum quibusdam ratione minus consequatur architecto cupiditate non laboriosam natus distinctio nemo accusamus debitis dolor magnam sint? Architecto provident repellat quidem temporibus culpa praesentium optio, dolores dolorem cupiditate! Repellat ipsum harum cumque, quos maxime perspiciatis molestias voluptates deleniti
          </p> */}
           {post.photo &&
            // (<img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />)
            (<img src={PF+post.photo} alt="" />)
          } 
         
          <div className="categories">
             {post.categories && (post.categories.map(cat => {
              return <span>{cat}</span>
            }))} 
            {/* <span>Music</span><span>Life</span> */}
          </div>
          <h4 className="title">
            <Link to = {`/post/${post._id}`}>
              {post.title}
            </Link>
            </h4>
          <span className='time'>{new Date(post.createdAt).toDateString()}</span>
          <p>{post.desc}</p>
        </Content>  
      </Wrapper> 
    </>
  )
}

export default Post
