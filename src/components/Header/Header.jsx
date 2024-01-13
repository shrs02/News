import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Logout} from '../index'
import l from './l.png'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import Input from '../Input/Input'
function Header (file){
    const log=useSelector((state) => state.log.logged)
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate();

    const weather = async (data)=>{
        const d =`/we/${data.city}`;
        navigate(d);
    }
    return(
        <div className='relative flex justify-evenly h-10 pt-5 mt-4'>
            <div className='w-1/3 md:w-20 text-sm '>
                <Link to='/' className='sticky left-6 md:left-12 top-10 w-20 flex flex-col items-center' >
                    <img src={l} className='  shadow-2xl rounded-2xl '/>
                    Home
                </Link>
            </div>
            <div className='lg:w-2/3 flex h-10  md:flex md:flex-row md:justify-around p-6 justify-center justify-items-center align-middle items-center w=1/2 bg-white rounded-2xl border-2 border-gray-300'>
                <div className='w-1/4 flex  bg-sky-300 rounded-md flex-col p-2 px-4 items-center text-sm'>
                   Weather
                </div>
                <form onSubmit={handleSubmit(weather)} className='w-2/3 flex justify-center justify-items-center align-middle items-center '>
                    <div className='w-full'>
                        <Input
                        label="City: "
                        type="text"
                        placeholder="Enter City"
                        {...register("city", {
                            required: true,
                        })}
                        />
                    </div>
                    <button type="submit" className='w-1/4' >
                        <div className=' flex bg-sky-300 rounded-md flex-col p-2 px-4 items-center text-sm'>
                        Search
                        </div>
                    </button>
                </form>
            </div>
            <div className='flex justify-end '>
                    {!log &&<Link to="/login"> 
                            <div className='m-1  bg-sky-400 p-2 bg-opacity-100   rounded-2xl shadow-lg'>
                                    Log In
                            </div>
                            </Link>
                    }
                    {!log && <Link to="/signup"> 
                            <div className='m-1 p-2 bg-sky-400 bg-opacity-100   rounded-2xl shadow-lg'>
                                    Sign Up
                            </div>
                            </Link>
                    }
                    {log && <div >
                                <Logout/>
                            </div>
                    }
            </div>
        </div>

    )
}
    


export default Header