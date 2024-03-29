import React, { useEffect, useState, useContext } from 'react'
import Header from '../../Components/Header/Header'
import NavBar from '../../Components/NavBar/NavBar'
import Posts from '../../Components/Posts/Posts'
import SideBar from '../../Components/SideBar/SideBar'
import { Main } from './Home.styles'
import context from '../../Context/Context'
import axios from 'axios'
import MediaSide from '../../Components/MediaSide/MediaSide'
import MediaNav from '../../Components/MediaNav/MediaNav'
import { axiosInstance } from '../../config'

const Home = () => {
  const{show} = useContext(context)
  const [posts, setPost] = useState([])


  useEffect(()=>{
    const fetchPost = async() => {
      const res =  await axiosInstance.get('/posts')
      setPost(res.data)
    }
    fetchPost()
   
   },[])
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
      <Header/>
      <Main>
        <Posts posts= {posts}/>
        
        <div className="sideBar">
          <SideBar/> 
        </div>
        
      </Main>
    </>
  )
}

export default Home
