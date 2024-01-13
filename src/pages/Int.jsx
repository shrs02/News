import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Card from '../components/Card/Card.jsx'
import {useSelector} from 'react-redux'
import { connect } from 'react-redux';
import { setLoad,setA,setC} from '../store/ASlice.js'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';

function Int(props){

    const [items,setItem] = useState([]);
    const loading=props.load;
    const count=useSelector((state) => state.log.userCount);
    const log=useSelector((state) => state.log.logged);

    useEffect(()=>{
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const d= `${month}/${date}/${year}`;
        let url="http://newsapi.org/v2/everything?q=biggest-international-news&q=no-chatgpt&q=no-post-without-working-picture-url&q="+d+"&apiKey=834a502379f4454fa26a2483fc0243a7";
        if(log){
            url="http://newsapi.org/v2/everything?q="+count+"&q=no-chatgpt&q=no-post-without-working-picture-url&q="+d+"&apiKey=834a502379f4454fa26a2483fc0243a7";
        }
        axios
        .get(url)
        .then((resp)=>{
            console.log(resp);
            setItem(resp.data.articles);
        })
    },[log])
    useEffect(()=>{
        console.log(items);
        props.updatel(false);
    },[items])
    return (
            !loading?
            <div className=' md:fixed pb-40 overflow-y-scroll overflow-x-hidden scrollbar-none md:top-42 md:left-40 lg:left-48 w-full h-full md:right-40 lg:right-48 md:w-auto  m-2 flex flex-wrap align-middle justify-center justify-items-center items-center'>
                {items.map((file)=>{
                    if(file.urlToImage&&file.description!='Comments'){
                    return(
                        <div onClick={()=>{props.upd(file);props.updc(file.content)}} className=' w-full  p-1 md:w-1/2 lg:w-1/4 h-auto'>
                        <Link  to={`/article/${file.title}`}>
                        <div key={file.title} >
                            <Card  {...file}/>
                        </div>
                        </Link>
                        </div>
                    )}
                    })
                }
            </div>
            :<h1>loading</h1>
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
export default connect(mapStateToProps,mapDispatchToProps)(Int)