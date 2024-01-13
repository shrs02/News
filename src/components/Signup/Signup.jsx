import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as alogin } from '../../store/ASlice'
import {useDispatch} from "react-redux"
import autho from "../../appwrite/autho"
import {useForm} from "react-hook-form"
import {Input} from "../index"
import c1 from '../Header/l.png'


function Signup(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    const count = [
        ["India","in"],
        ["Argentina","ar"],
        ["Australia","au"],
        ["Austria","at"],
        ["Belgium","be"],
        ["Brazil","br"],
        ["Bulgaria","bg"],
        ["Canada","ca"],
        ["China","cn"],
        ["Colombia","co"],
        ["Cuba","cu"],
        ["Czech Republic","cz"],
        ["Egypt","eg"],
        ["France","fr"],
        ["Germany","de"],
        ["Greece","gr"],
        ["Hong Kong","hk"],
        ["Hungary","hu"],
        ["Indonesia","id"],
        ["Ireland","ie"],
        ["Israel","il"],
        ["Italy","it"],
        ["Japan","jp"],
        ["Latvia","lv"],
        ["Lithuania","lt"],
        ["Malaysia","my"],
        ["Mexico","mx"],
        ["Morocco","ma"],
        ["Netherlands","nl"],
        ["New Zealand","nz"],
        ["Nigeria","ng"],
        ["Norway","no"],
        ["Philippines","ph"],
        ["Poland","pl"],
        ["Portugal","pt"],
        ["Romania","ro"],
        ["Russia","ru"],
        ["Saudi Arabia","sa"],
        ["Serbia","rs"],
        ["Singapore","sg"],
        ["Slovakia","sk"],
        ["Slovenia","si"],
        ["South Africa","za"],
        ["South Korea","kr"],
        ["Sweden","se"],
        ["Switzerland","ch"],
        ["Taiwan","tw"],
        ["Thailand","th"],
        ["Turkey","tr"],
        ["UAE","ae"],
        ["Ukraine","ua"],
        ["United Kingdom","gb"],
        ["United States","us"],
        ["Venuzuela","ve"],
        ]
    const log = async (data)=>{
        setError("")
        console.log(data);
        try{
            const curr =  await autho.createUser(data)
            if(curr){
                const user = await autho.getUser()
                console.log(curr)
                if(user){
                    console.log(user)
                    dispatch(alogin({...curr}))
                    navigate("/")
                }
                
            }
        }
        catch(error){
            setError(error.message)
        }
    }

    return (
        <div className='flex flex-col align-middle justify-center justify-items-center w-full items-center   bg-slate-200  bg-opacity-80  h-full'>
            <div className=' p-10 flex flex-col align-middle justify-center justify-items-center w-full items-center  '>
                <div className=' p-4 mb-4  w-1/3  flex align-middle justify-center justify-items-center items-center  '>
                    <Link to='/' className=' flex align-middle justify-center justify-items-center items-center  '>
                        <img src={c1} className=' shadow-2xl rounded-2xl w-5/12'/>
                    </Link>
                </div>
                <Link to="/login">
                    <div className=' bg-slate-400 bg-opacity-100 md:mx-11 p-4 px-8 rounded-2xl shadow-lg'>
                            Go To Log In
                    </div>
                </Link>
                <div className='pt-8'>If the Sign Up page is not responding or not proceeding ahead or is stuck, kindly refresh the page couple of times</div>
                <div>
                    {error && <div className=' p-4 pt-0 '>{error}</div>}
                </div>
            <div className='p-4 pt-0 w-full flex flex-col items-center '>
                <form onSubmit={handleSubmit(log)}>
                    <div className=' p-4 pt-0 w-full'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
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
                         <label className='m-4'>
                            Country:
                            <select  {...register("country", {required: true,})}>
                                {count.map((val)=>(<option value={val[0]}>{val[0]}</option>))}
                            </select>
                            </label>
                    </div>
                    <div className='m-4 flex align-middle justify-center justify-items-center'>
                        <button type="submit" className=' bg-slate-400  bg-opacity-100 md:mx-11 p-4 px-8 rounded-2xl shadow-lg'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Signup