import React, { useContext, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Content, Wrapper } from './Write.styles'
import axios from 'axios'
import context from '../../Context/Context'
import MediaSide from '../../Components/MediaSide/MediaSide'
import MediaNav from '../../Components/MediaNav/MediaNav'
import { axiosInstance } from '../../config'

const Write = () => {
    const { user, show } = useContext(context)
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

 
  const filename = Date.now() + file?.name

  const handleSubmit = async(e) => {
    e.preventDefault()
    // console.log(file, title, desc)

    const newPost = {
      username: user.username,
      title,
      desc
    };
    if(file){
      const data = new FormData()
      
      data.append('name', filename)
      data.append('file', file)
      newPost.photo = filename
        // await upLoadFiles(file)
      try{
        await axiosInstance.post('/upload', data) 
      }catch(err){
        console.log(err);
      }
    }
   
    try{
      const res = await axiosInstance.post('/posts', newPost)
    
    res.data && window.location.replace('/post/' + res.data._id)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <NavBar/>
        {
        show &&
        <div className="mediaSide" >
          <MediaSide/>
        </div>
      }
      <MediaNav/>
      <Wrapper>
         {
          file && <img src={URL.createObjectURL(file)} alt="" />
          // user && <img src="" alt="" />
        }
         {/* <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> */}
        <Content>
          <form action="" onSubmit={handleSubmit}>
            <div className="formGroup inputFile">
              <label htmlFor="addFile" className='addFile'>
                <i class="fas fa-plus"></i>
              </label>
              <input type="file" id='addFile' style={{display : "none"}} onChange = {(e) => {setFile(e.target.files[0])}} />
              <input type="text" className = 'inputTitle' placeholder='Title' autoFocus = {true} onChange = {(e) => {setTitle(e.target.value)}}/>
            </div>
            <div className="formGroup">
            <textarea name="" placeholder='Tell your story' onChange = {(e) => {setDesc(e.target.value)}}></textarea>  
              
            </div>
            <button type='submit'>Publish</button>
          </form>
        </Content>
         {/* <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <Content>
          <form action="">
            <div className="formGroup inputFile">
              <label htmlFor="addFile" className='addFile'>
                <i class="fas fa-plus"></i>
              </label>
              <input type="file" id='addFile' style={{display : "none"}} autoFocus = {true}/>
              <input type="text" className = 'inputTitle' placeholder='Title' />
            </div>
            <div className="formGroup">
            <textarea name="" placeholder='Tell your story'></textarea>  
              
            </div>
            <button type='submit'>Publish</button>
          </form>
        </Content> */}
      </Wrapper>
    </>
  )
}

export default Write
