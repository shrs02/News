import React,{ useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import {useSelector} from 'react-redux'
import { connect } from 'react-redux';

function Article(props){
    const [file,setFile] = useState("");
    const [cont,setCont] = useState("");
    useEffect(()=>{
        setFile(props.f);
        setCont(props.c);
    },[props.f,props.c])
    return (
        <div className=' md:fixed pb-96 overflow-y-scroll overflow-x-hidden md:top-46 md:left-40 lg:left-48 w-full h-full md:right-40 lg:right-48 md:w-auto  lg:m-20 '>
            <div className='flex align-middle justify-center justify-items-center items-center text-xl p-4'>{file.title}</div>
            <div className='flex justify-end p-2'>{file.author}</div>
            <div className=' flex align-middle justify-center justify-items-center items-center'>
            <img src={file.urlToImage} className='w-1/2 m-6'  />
            </div>
            <div className='m-4'>
            <p>{file.description}</p>
            <p>{cont}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        f:state.log.file,
        c:state.log.content,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        updatel:(curr)=>{dispatch(setLoad(curr))},
        upd:(file)=>{dispatch(setA(file))},
        updc:(c)=>{dispatch(setC(c))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Article)
