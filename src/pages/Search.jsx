import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Card from '../components/Card/Card.jsx'
import { Link, useNavigate, useParams } from "react-router-dom";

function Search(){
    const [items,setItem] = useState([]);
    const [loading,setLoading] = useState([true]);
    const { slug } = useParams();

    useEffect(()=>{

        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const d= `${month}/${date}/${year}`;
        console.log(slug);
        const url="http://newsapi.org/v2/everything?q="+slug+"&q=no-chatgpt&q=no-post-without-working-picture-url&q="+d+"&apiKey=834a502379f4454fa26a2483fc0243a7";
        axios
        .get(url)
        .then((resp)=>{
            console.log(resp);
            setItem(resp.data.articles);
        })
    },[slug])
    useEffect(()=>{
        console.log(items);
        setLoading(false);
    },[items])
    return (
            !loading?
            <div className=' md:fixed pb-40 overflow-y-scroll overflow-x-hidden scrollbar-none md:top-40 md:left-40 lg:left-48 w-full h-full md:right-40 lg:right-48 md:w-auto  m-2 flex flex-wrap'>
                {items.map((file)=>{
                    if(file.urlToImage&&file.description!='Comments'){
                    return(
                        <div key={file.title} className=' w-full  p-1 md:w-1/2 lg:w-1/4 h-auto'>
                            <Card  {...file}/>
                        </div>
                    )}
                    })
                }
            </div>
            :<h1>loading</h1>
    )
}

export default Search