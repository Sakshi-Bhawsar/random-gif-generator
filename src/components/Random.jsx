import axios from "axios";
import { useEffect, useState } from "react"
//import Spinner from "./Spinner"

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {
  const [gif,setgif] = useState("")
  //const[loader,setLoader] = useEffect('false')
  

  async function fetchdata(){
    
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
   const {data}=await axios.get(url) // axios works as fetch
   //console.log(data)
   const imageSource = data.data.images.downsized_large.url;
   //console.log(imageSource)
   setgif(imageSource);

  }

  useEffect(()=>{
    fetchdata()
  },[])


  function clickHandler(){
       fetchdata();
  }
  return( 
  <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
    <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random gif</h1>

    {/*
      loader?(<Spinner/>):(<img src={gif} width='450'/>)
      */
    }

    <img src={gif} width='450'/>

    <button onClick={clickHandler} className="w-10/12 bg-white text-lg py-2 rounded-lg  mb-[20px]">
      Generate
    </button>
  </div>
  )
}
