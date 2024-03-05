import { useEffect, useState } from "react"
import {useLoaderData} from "react-router-dom"

function Github() {
  var data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/Abhik2005")
  //   .then((res)=> res.json())
  //   .then((data)=>{
  //     setData(data)
  //     console.log(data);
  //   })
  // },[])
  return (
    <div className=' text-center m-4 bg-gray-700 text-white gap-5 p-4 text-3xl flex items-center justify-center flex-row-reverse'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="" width={300} className=" rounded-full"/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
  const res = await fetch("https://api.github.com/users/Abhik2005")
  return res.json()
}