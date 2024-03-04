import {useEffect, useState} from "react"

function useCurrecyInfo(currency){
    var [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_1oz6SjlPtcKdRBGTMEvVxOL6yttzr3J9uX5ZrXEk`)
        .then((res)=>res.json())
        .then((res)=> setData(res.data))
    },[currency])
    return data;
}

export default useCurrecyInfo;