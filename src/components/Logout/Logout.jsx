import React from 'react'
import {useDispatch} from 'react-redux'
import autho from '../../appwrite/autho'
import {logout as alogout} from '../../store/ASlice'

function Logout(){
    const dispatch = useDispatch()
    const logoutHandler = async ()=>{
        try{
            const curr =  await autho.logoutData()
            if(curr){
                dispatch(alogout())
            }
        }
        catch (error){
            console.log(error)
        }
    }
    return(
        <button className='m-1 p-2 bg-sky-400 bg-opacity-100   rounded-2xl shadow-lg'
        onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default Logout