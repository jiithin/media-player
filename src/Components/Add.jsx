import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideoAPI } from '../../services/allAPI';

function Add({setUploadVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const [uploadVideo,setUploadVideo]=useState({id:"" , name:"" , url: "" , link:"" }) ;

  console.log(uploadVideo);

  //to get the embed code from watc link
  const getYoutubeEmbedLink =(e)=>{
    const {value}=e.target
    if (value.includes('v=')){
      let vID = value.split('v=')[1].slice(0,11)

      console.log(`https://www.youtube.com/embed/${vID}`);

      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }
    else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }



    //
    const handleAdd = async ()=>{
      const {id, name, url, link}= uploadVideo
      if (!id || !name || !url || !link){
        alert("Please fill the misssing fields")

      }else{
        //store upload video to json server
        const result = await uploadVideoAPI(uploadVideo)
        console.log(result);
        if(result.status >=200 && result.status<300){

          //success
          alert("Video Uplod Successfully")
          handleClose()
          
          //empty fields
          setUploadVideo({
            id:"" , name:"" , url: "" , link:"" 
          })

          //after getting a success response
          setUploadVideoResponse(result.data)
          
        }else{
          alert(result.message)
        }

      }
    }




  return (
    <>
    <div  className='d-flex align-items-center'>
      
      <button className='btn btn-primary' onClick={handleShow} > <h6 style={{ textDecoration:'none', fontSize:'21px'}}> Upload Videos <i class="fa-solid fa-upload"></i></h6></button>

      {/* modal */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload  Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    

          <Form>
        <FloatingLabel controlId="floatingInput" label="VideoId" className="mb-3">
        <Form.Control type="text" placeholder="VideoId" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} /> 
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="VideoName" className="mb-3">
        <Form.Control type="text" placeholder="VideoName" onChange={(e)=>setUploadVideo({...uploadVideo,name:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
        <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Video URL" className="mb-3">
        <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeEmbedLink} />
      </FloatingLabel>
      </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>

    </div>


    
    </>
  )
}

export default Add