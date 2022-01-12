import React from 'react'
import Header from '../../Components/Header/Header'
import NavBar from '../../Components/NavBar/NavBar'
import Posts from '../../Components/Posts/Posts'
import SideBar from '../../Components/SideBar/SideBar'
import { Main } from './Home.styles'

const Home = () => {
  return (
    <>
      <NavBar/>
      <Header/>
      <Main>
        <Posts/>
        <SideBar/> 
      </Main>
    </>
  )
}

export default Home
