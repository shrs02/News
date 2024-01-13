import React from 'react'

function Card (file){
    return(
        <div className='flex bg-white border border-gray-200 flex-col justify-around rounded-lg shadow  w-full h-full hover:bg-gray-100'>
                <img className="click:animate-ping p-1 object-cover w-full rounded-t-lg h-60 rounded-lg" src={file.urlToImage} alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900">{file.title}</h5>
                    <p className="mb-3 text-xs font-normal text-gray-700 ">{file.description}</p>
                </div>
        </div>
    )
}
    


export default Card