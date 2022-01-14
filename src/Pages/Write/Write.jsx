import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Content, Wrapper } from './Write.styles'

const Write = () => {
  return (
    <>
      <NavBar/>
      <Wrapper>
         <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
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
        </Content>
      </Wrapper>
    </>
  )
}

export default Write
