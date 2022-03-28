import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import NavBar from '../../Components/NavBar/NavBar'
import Posts from '../../Components/Posts/Posts'
import SideBar from '../../Components/SideBar/SideBar'
import { Main } from './Home.styles'
import axios from 'axios'

const Home = () => {
  //  const{show} = useContext(context)
  const [posts, setPost] = useState([])


  useEffect(()=>{
    const fetchPost = async() => {
      const res =  await axios.get('http://127.0.0.1:5500/api/posts')
      setPost(res.data)
    }
    fetchPost()
   
   },[])
  return (
    <>
      <NavBar/>
      <Header/>
      <Main>
        <Posts posts = {posts}/>
        <SideBar/> 
      </Main>
    </>
  )
}

export default Home
