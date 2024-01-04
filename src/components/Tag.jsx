import axios from "axios";
import { useEffect, useState } from "react"
//import Spinner from "./Spinner"

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {
  const [gif,setgif] = useState("")
  const [tag,settag] = useState('')
  

  async function fetchdata(){
    
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

  function changeHandler(event){
   settag(event.target.value)
  }
  return( 
  <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
    <h1 className="mt-[15px] text-2xl underline uppercase font-bold"> Random gif</h1>

    {/*
      loader?(<Spinner/>):(<img src={gif} width='450'/>)
      */
    }

    <img src={gif} width='450'/>

    <input value={tag} className="w-10/12 bg-white text-lg py-2 rounded-lg  mb-[4px]" onChange={changeHandler}></input>

    <button onClick={clickHandler} className="w-10/12 bg-white text-lg py-2 rounded-lg  mb-[20px]">
      Generate
    </button>
  </div>
  )
}
