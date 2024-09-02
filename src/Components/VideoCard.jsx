import React from 'react'
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryAPI, deleteVideoAPI } from '../../services/allAPI';



function VideoCard({video , setDeleteVideoResponse , insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const{name,link}=video

    let today=new Date()
    console.log(today)
    let timeStamp=new Intl.DateTimeFormat('en-US',{year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'}).format (today)


    let videoHistory={name,link,timeStamp}


    // make api call
    await addVideoHistoryAPI(videoHistory)
  }

  const removeVideo= async (id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted=(e,id)=>{
    console.log("Drag started...video ID:"+id);
    e.dataTransfer.setData("VideoId",id)
  }

  return (
    <>

<Card draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img onClick={handleShow} variant="top" src={video?.url} style={{borderRadius:'7px'}}/>
      <Card.Body>

        <Card.Title className='d-flex justify-content-between align-items-center'>{video?.name}</Card.Title>
        
       
        {insideCategory?null:<button onClick={()=>removeVideo(video?.id)} className='btn btn-danger'>Delete Video <span><i class="fa-regular fa-trash-can" style={{color:'#485785'}}></i></span></button>}

      </Card.Body>
    </Card>



    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.name}</Modal.Title>
        </Modal.Header>
        

        <Modal.Body>
        <iframe width="100%" height="480" src={`${video?.link}?autoplay=1`} title={video?.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        </Modal.Body>
       
      </Modal>


    

    </>
  )
}

export default VideoCard