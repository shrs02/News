import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Searchbar (){
    const navigate = useNavigate();
    const [input,setInput] = useState("");
    const [urlv,setUrlv] = useState("");
    useEffect(()=>{
        let curr=input
            .trim()
            .replace(/\s/g, "-");
            console.log(curr);
        setUrlv(curr)
    },[input])

    const handle = (value)=>{
        setInput(value)
    }
   
    return(
        <div className='flex justify-center w-full pt-5 input-wrapper'>
            <div className='flex justify-center  w-4/5 border-2 border-zinc-400 rounded-lg '>
            <input type="text"  value={input} 
            onChange={(e)=>{handle(e.target.value)}}
            onKeyDown={(e) => {
                let c=urlv;
                console.log(e.key);
                if (e.key === "Enter")
                    {setInput("");
                    let url="/search/"+c;
                    navigate(url)}
                }}
                className='p-2 w-3/4 rounded-l-lg'/>

            <button className=' w-1/4'
                onClick={()=>{              
                let cu=urlv;
                setInput("");
                let url="/search/"+cu;
                navigate(url)
            }}>
                <div className='flex justify-center w-full rounded-r-lg p-2 bg-sky-300'>
                 Search
                </div>
            </button>
        </div>
    </div>
    )
}
    


export default Searchbar