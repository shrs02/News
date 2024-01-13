import React from 'react'
import Sidecard from '../Sidecard/Sidecard.jsx'

function Sidebar (file){
    return(
        <div className=' w-full h-full flex md:flex-col md:px-1 md:py-1 md:pb-60 md:mt-3 md:mb-6 bg-white md:rounded-md'>
            <div  className=' m-1 md:w-full   my-1 rounded-2xl'>
                <Sidecard file={"Sports"} />
            </div>
            <div className='m-1 md:w-full  my-1 rounded-2xl'>
                <Sidecard file={"Entertainment"} />
            </div>
            <div className='m-1  md:w-full my-1 rounded-2xl'>
                <Sidecard file={"Business"} />
            </div>
            <div className='m-1 mr-1 md:pb-52 md:w-full my-1s rounded-2xl'>
                <Sidecard file={"Social"} />
            </div>
        </div>

    )
}
    


export default Sidebar