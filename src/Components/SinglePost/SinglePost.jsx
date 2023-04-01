import React, { useContext, useEffect, useState } from 'react'
import { Content, Wrapper } from './SinglePost.styles'
import axios from 'axios'
import context from '../../Context/Context'
import { useLocation } from 'react-router-dom'
import { axiosInstance } from '../../config'

const SinglePost = () => {
  const {user} = useContext(context)
   const location = useLocation()
   const path = location.pathname.split('/')[2]

  const PF = `${process.env.REACT_APP_BASE_URL}/images/`;
  
   const [post, setPost] = useState([])
   const [title, setTitle] = useState('')
   const [desc, setDesc] = useState('')
   const [isUpdate , setIsUpdate] = useState(false)
   
   
 
   useEffect(() => {
      const fetchSinglePost = async() => {
       try{
          const res = await axiosInstance.get('/posts/'+ path)
            setPost(res.data);
            setTitle(res.data.title)
            setDesc(res.data.desc)
       }catch(err){
        console.log(err);
       }

     }
     fetchSinglePost()
   }, [path])

 

   const handleUpdate = async() => {
     try{
      await axiosInstance.put('/posts/'+ path, {
        username: user.username,
        title,
        desc
      })
      setIsUpdate(false)
     }catch(err){
       console.log(err);
     }

   }

  const handleDelete = async() => {
    try{
      await axios.delete('/posts/' + path, {data: {username: user.username}})
       window.location.replace( '/' )
    }catch(err){
      console.log(err)
    }
  } 
  return (
    <>
      <Wrapper>
        <Content>
          {
            post.photo && (<img src={PF + post.photo} alt="" />)
           
          }
           
          <div className="postTitle">
            {
              isUpdate? 
              <input type="text" value = {title} onChange = {(e) => { setTitle(e.target.value)}} autoFocus /> :
              <h4>{title}</h4>
            }
            
            {
              post.username === user?.username &&  
              ( !isUpdate && 
                <div className="edit">
                <span><i class="fas fa-edit" onClick = {() => {setIsUpdate(true)}}></i></span>
                <span><i class="far fa-trash-alt" onClick={handleDelete}></i></span>
            </div>
              )
              
            }
           
           
          </div>
          {
            !isUpdate && 
            <div className="author">
              <h4 className="name">
                  Author: <span>{post.username}</span>
              </h4>
              <span className='time'>{new Date(post.createdAt).toDateString()}</span>
            </div>
          }
          
          {
            isUpdate? 
            <textarea value = {desc} onChange = {(e)=>{ setDesc(e.target.value)}}></textarea> :
            <p className="postText" >{desc}</p>
          }
          {
            isUpdate && <button onClick = {handleUpdate}>Update</button>
          }
           {/* <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
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
          <p className="postText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste ad quasi recusandae reiciendis dicta reprehenderit placeat inventore laboriosam? Culpa quibusdam doloremque corrupti delectus ipsa, incidunt fugiat facilis reprehenderit ratione, debitis nisi! Repellendus porro libero nisi. Veniam mollitia rerum explicabo eos reprehenderit? Amet inventore vel error sunt, consequuntur commodi aliquam placeat nam nesciunt voluptatem quibusdam, porro fuga. Optio aliquid ducimus officiis error earum cupiditate vel corrupti eveniet? Minima dolorem voluptas cum aperiam doloremque nostrum debitis, laudantium architecto excepturi, quod illo, temporibus laboriosam. Vitae, explicabo cumque, excepturi, obcaecati pariatur numquam sapiente iusto libero blanditiis veritatis voluptas a deleniti voluptates nulla harum! reprehenderit ratione, debitis nisi! Repellendus porro libero nisi. Veniam mollitia rerum explicabo eos reprehenderit? Amet inventore vel error sunt, consequuntur commodi aliquam placeat nam nesciunt voluptatem quibusdam, porro fuga. Optio aliquid ducimus officiis error earum cupiditate vel corrupti eveniet? Minima dolorem voluptas cum aperiam doloremque nostrum debitis, laudantium architecto excepturi, quod illo, temporibus laboriosam. Vitae, explicabo cumque, excepturi, obcaecati pariatur numquam sapiente iusto libero blanditiis veritatis voluptas a deleniti voluptates nulla harum</p> */}
        </Content>
      </Wrapper>
    </>
  )
}

export default SinglePost
