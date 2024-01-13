import React,{useEffect,useState} from 'react'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Header from './components/Header/Header.jsx'
import Searchbar from './components/Searchbar/Searchbar.jsx'
import Sidebar1 from './components/Sidebar1/Sidebar1.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className=' w-full h-full m-0 p-0'>
        <div className=' bg-sky-200 '>
            <Header/>
            <div className='p-0 md:p-3 mt-6'>
                <Searchbar/>
            </div>
            </div>
        <div className=' relative w-full h-full flex flex-col md:flex md:flex-row p-2 '>
            <div className='bg-white rounded-md m-1 mr-2 md:fixed overflow-x-scroll md:overflow-scroll md:top-42 md:mt-3 md:left-0 scrollbar-none w-full h-48 md:h-full md:w-40 lg:w-48'>
                <Sidebar/>
            </ div>
            <div className='bg-white rounded-md m-1 mr-2 md:fixed md:mr-3 overflow-x-scroll md:overflow-scroll md:top-42 md:mt-3 md:right-0 scrollbar-none w-full h-48 md:h-full md:w-40 lg:w-48'>
                <Sidebar1/>
            </ div>
            <Outlet/>
        </div>
    </div>
  )
}

export default App
