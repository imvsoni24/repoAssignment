import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Repo = () => {
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);
    const getRepo = async()=>{
        let res = await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:all&page=${page}&per_page=10`);
        res =await res.json();
        res = await res.items
        setData(res)
    }
     console.log(data)
    useEffect(()=>{
        getRepo()
    },[page])
    const handleA=()=>{
        // data.sort((a, b) => a.stargazers_count - b.stargazers_count);
        // setData([...data]);
    }
    const handleH=()=>{
        // data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        data.filter((item)=>{
            if(item.language==="Python"){
                   return item
            }})
           
        setData([...data]);
        console.log("object");
    }
    const handleC=()=>{
        
    }
    const handleJ=()=>{
        
    }
  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
            <h1 onClick={handleA}>All</h1>
            <h1 onClick={handleH}>HTML</h1>
            <h1 onClick={handleC}>CSS</h1>
            <h1 onClick={handleJ}>Javascript</h1>
        </div>
        <div style={{textAlign:"center"}}>
        <button style={{fontSize:"25px"}} onClick={()=>setPage(page-1)}>Prev</button>
        <button style={{fontSize:"25px"}}>{page}</button>
        <button style={{fontSize:"25px"}} onClick={()=>setPage(page+1)}>Next</button>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"60px"}}>
            {data.map((item)=>(
                  <div style={{width:"60%",margin:"auto",backgroundColor:"wheat",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",textAlign:"center"}} key={item.id}>
                  <img style={{width:"100%", height:"300px"}} src={item.owner.avatar_url} alt="" />
                  <h1>{item.name}</h1>
                  <h2>{item.language}</h2>
                  <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}><h3>Star-Count: {item.stargazers_count
}</h3><h3>Forks-Count: {item.forks_count}</h3></div>
                  </div>
            ))}
        </div>
    </div>
  )
}

export default Repo