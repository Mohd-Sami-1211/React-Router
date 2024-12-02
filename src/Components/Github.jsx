import React, { useEffect, useState } from "react";
function Github()
{
    const[Data,SetData]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/Mohd-Sami-1211")
        .then(response=>response.json())
        .then(Data=>{
            console.log(Data);
            SetData(Data)
        })

    },[])
    return(
<>
<div className="text-center m-4 p-3 bg-orange-700 text-white text-3xl">Github Followers :{Data.followers}
    <img src={Data.avatar_url} alt="Git Picture" width={300}/>
</div>
</>
    )
}
export default Github