import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getAllCategoryAPI, getAllUploadedVideoAPI, updateCategoryAPI } from '../../services/allAPI'



function View({uploadVideoResponse,setDropVideoResponse}) {
  const [deleteVideoResponse,setDeleteVideoResponse]=useState(false)
  
  

  const [allVideos,setAllVideos]=useState([])

  useEffect(()=>{
    getAllUpladedVideos()
    setDeleteVideoResponse(false)

  },[uploadVideoResponse , deleteVideoResponse])

  const getAllUpladedVideos =async ()=>{
    const result =await getAllUploadedVideoAPI()
    if (result.status===200){
      console.log(result.data)
      setAllVideos(result.data)
      
      
    }else{
      console.log("API Failed");
      setAllVideos([])
    }
  }

  const dragOver =(e) =>{
    e.preventDefault()
  }

  const videoDropped = async (e)=>{
    const{videoId,categoryId} = JSON.parse(e.dataTransfer.getData("data"))
    console.log(videoId,categoryId);
    const {data} = await getAllCategoryAPI()
    const selectedCategory = data.find(item=>item.id==categoryId)
    let result = selectedCategory.allVideos.filter(video=>video.id!==videoId)
    console.log(result);
    let {id,categoryName}= selectedCategory
    let newCategory = {id,categoryName,allVideos:result}
    console.log(newCategory);
    const res = await updateCategoryAPI(categoryId,newCategory)

    setDropVideoResponse(res)
  }


  return (
    <>

    <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDropped(e)} >
      
      { allVideos?.length>0?allVideos.map(video=>(
        <Col sm={12} md={6} lg={4} xl={3} className='mt-2'>

        <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
 
       </Col>

      )):<p className='text-primary fw-bolder'>Nothig to show</p> }
      
      
      

  




    </Row>

    </>
  )
}

export default View