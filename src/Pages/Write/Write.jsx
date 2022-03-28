import React, { useContext, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Content, Wrapper } from './Write.styles'
import axios from 'axios'
import context from '../../Context/Context'

const Write = () => {
    const { user } = useContext(context)
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
        await axios.post('http://127.0.0.1:5500/api/upload', data) 
      }catch(err){
        console.log(err);
      }
    }
   
    try{
      const res = await axios.post('http://127.0.0.1:5500/api/posts', newPost)
    
    res.data && window.location.replace('/post/' + res.data._id)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <NavBar/>
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
