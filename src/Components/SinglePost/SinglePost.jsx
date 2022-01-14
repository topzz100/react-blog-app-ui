import React from 'react'
import { Content, Wrapper } from './SinglePost.styles'

const SinglePost = () => {
  return (
    <>
      <Wrapper>
        <Content>
           <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          <div className="postTitle">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <div className="edit">
                <span><i class="fas fa-edit"></i></span>
                <span><i class="far fa-trash-alt"></i></span>
            </div>
           
          </div>
          <div className="author">
            <h4 className="name">
                Author: <span>Jonathan</span>
            </h4>
            <span className='time'>1 day ago</span>
          </div>
          <p className="postText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste ad quasi recusandae reiciendis dicta reprehenderit placeat inventore laboriosam? Culpa quibusdam doloremque corrupti delectus ipsa, incidunt fugiat facilis reprehenderit ratione, debitis nisi! Repellendus porro libero nisi. Veniam mollitia rerum explicabo eos reprehenderit? Amet inventore vel error sunt, consequuntur commodi aliquam placeat nam nesciunt voluptatem quibusdam, porro fuga. Optio aliquid ducimus officiis error earum cupiditate vel corrupti eveniet? Minima dolorem voluptas cum aperiam doloremque nostrum debitis, laudantium architecto excepturi, quod illo, temporibus laboriosam. Vitae, explicabo cumque, excepturi, obcaecati pariatur numquam sapiente iusto libero blanditiis veritatis voluptas a deleniti voluptates nulla harum! reprehenderit ratione, debitis nisi! Repellendus porro libero nisi. Veniam mollitia rerum explicabo eos reprehenderit? Amet inventore vel error sunt, consequuntur commodi aliquam placeat nam nesciunt voluptatem quibusdam, porro fuga. Optio aliquid ducimus officiis error earum cupiditate vel corrupti eveniet? Minima dolorem voluptas cum aperiam doloremque nostrum debitis, laudantium architecto excepturi, quod illo, temporibus laboriosam. Vitae, explicabo cumque, excepturi, obcaecati pariatur numquam sapiente iusto libero blanditiis veritatis voluptas a deleniti voluptates nulla harum</p>
        </Content>
      </Wrapper>
    </>
  )
}

export default SinglePost
