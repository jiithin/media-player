import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { getHistoryAPI , deleteHistoryAPI } from '../../services/allAPI'


function WatchHistory() {

const [history,setHistory]=useState([])

useEffect(() =>{

  getHistory()

  },[])

const getHistory= async()=>{
  const result =await getHistoryAPI()
  if (result.status===200){
    setHistory(result.data)
  }else{
    console.log('api failed');
    console.log(result.message);
  }
}



const removeVideoHistory= async (id)=>{
  await deleteHistoryAPI(id)
  getHistory()
}

  return (
    <>
    <div className='container mt-5 md-5 d-flex justify-content-between'>
    <h2>Watch History</h2>
    <button className='btn btn-primary'>
    <h6><Link to={'/home'} style={{textDecoration:'none', fontSize:'21px'}}>Back to Home <i class="fa-solid fa-circle-left"></i></Link></h6>
    </button>
    </div>
    <table className='table mb-4 mt-5' >
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
    
    <tbody>
      {
        history?.length>0?history?.map((video,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{video?.name}</td>
          <td><a href="">{video?.link}</a></td>
          <td>{video?.timeStamp}</td>
          <td><button onClick={()=>removeVideoHistory(video.id)} className='btn btn-sm' style={{color:'#d33636'}}>Delete <span><i class="fa-regular fa-trash-can"></i></span></button></td>
        </tr>
        
        )):<p className='text-danger fw-bolder'>Nothing To Display</p>
      }
   
    </tbody>
    </table>
    </>
  )
}

export default WatchHistory