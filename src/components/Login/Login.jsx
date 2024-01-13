import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as alogin } from '../../store/ASlice'
import {useDispatch} from "react-redux"
import autho from "../../appwrite/autho"
import {useForm} from "react-hook-form"
import {Input} from "../index"
import l from '../Header/l.png'

function Login(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    let curr=null;

    const log = async (data)=>{
        setError("")
            autho.loginData(data)
            .then((c)=>{
                console.log('c',c);
                return autho.getUser();
            })
            .then((user)=>{
                curr=user.$id;
                console.log('user',user);
                dispatch(alogin({user,curr}));
                navigate("/");
            })
            .catch((Error)=>{
                console.log(error);
            })
    }

    return (
        <div className='flex flex-col align-middle justify-center justify-items-center w-full items-center  bg-slate-200 bg-opacity-80  h-full'>
             <div className=' p-4 m-4 w-1/3  flex align-middle justify-center justify-items-center items-center  '>
                <Link to='/' className=' flex align-middle justify-center justify-items-center items-center  '>
                    <img src={l} className=' shadow-2xl rounded-2xl w-5/12'/>
                </Link>
            </div>
            <Link to="/signup">
                <div className='  bg-slate-400  bg-opacity-100 md:mx-11 p-4 px-8 rounded-2xl shadow-lg '>
                        Go To Sign Up
                </div>
            </Link>
            <div className='pt-8'>If the Log In page is not responding or not proceeding ahead or is stuck, kindly refresh the page couple of times</div>
            <div >
                {error && <div className=' p-4 pt-0 '>{error}</div>}
            </div>
            <div className=' p-4 pt-0 w-full flex flex-col items-center '>
                <form onSubmit={handleSubmit(log)}>
                    <div className=' p-4 pt-0 w-full'>
                        <Input 
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                        })}
                        />
                    </div>
                    <div className='flex align-middle justify-center justify-items-center'>
                        <button type="submit" className=' bg-slate-400  bg-opacity-100 md:mx-11 p-4 px-8 rounded-2xl shadow-lg'>
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login