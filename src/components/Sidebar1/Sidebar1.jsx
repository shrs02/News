import React from 'react'
import Sidecard from '../Sidecard/Sidecard.jsx'

function Sidebar (file){
    return(
        <div className='  w-full h-full flex md:flex-col md:px-1 md:py-1 md:pb-44 md:mt-3 md:mb-10 bg-white md:rounded-md'>
            <div className='m-1 md:w-full  my-1 rounded-2xl'>
                <Sidecard file={"Crime"} />
            </div>
            <div className='m-1 md:w-full  my-1 rounded-2xl'>
                <Sidecard file={"Legal"} />
            </div>
            <div className='m-1 md:w-full my-1 rounded-2xl'>
                <Sidecard file={"Tech"} />
            </div>
            <div className='m-1 md:pb-52 md:w-full   my-1 rounded-2xl'>
                <Sidecard file={"Lifestyle"} />
            </div>
        </div>

    )
}
    


export default Sidebar