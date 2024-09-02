import React, { useEffect } from 'react'

import { useState } from 'react';
import { Card, Col, FloatingLabel, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addCategoryAPI, deleteCategoryAPI, getAllCategoryAPI, getVideoAPI, updateCategoryAPI } from '../../services/allAPI';
import VideoCard from './VideoCard';


function Catagory({dropVideoResponse}) {
  const [allCategories , setAllCategories] = useState([])
  const [categoryName,setCategoryName] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async ()=>{
    if(categoryName){
      const result = await addCategoryAPI({categoryName , allVideos:[]})
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        getCategories()
      }else{
          alert(result.message)
        }
      }else{
        alert("Please fill the Category field")
      }
    }

    useEffect(()=>{
      getCategories()
    },[dropVideoResponse])


    const getCategories = async()=>{
      const {data} = await getAllCategoryAPI()
      setAllCategories(data)

    }
  

    const removeCategory = async(id)=>{
      await deleteCategoryAPI(id)
      getCategories()
    }

    const dragOver =(e)=>{
      console.log("Vidoe card dragged over the category");
      e.preventDefault()
    }

    const videoDrop = async (e,categoryId)=>{
      const videoId = e.dataTransfer.getData("VideoId")
      console.log("VideoId"+videoId, "Dropped inside Category:"+categoryId);
      const{data}= await getVideoAPI(videoId)
      // console.log(data);
      const selectedCategory= allCategories.find(item=>item.id===categoryId)
      selectedCategory.allVideos.push(data)
      //console.log(selectedCategory);
      await updateCategoryAPI(categoryId,selectedCategory)
    
    getCategories()
  }


  const videoDragStarted=(e,videoId,categoryId)=>{
    let datashare = {videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(datashare))
  }


    
  return (
    <>
    <div className='d-grid'>
    <button className='btn btn-info' onClick={handleShow}>Add Category</button>
    </div>


    { allCategories?.length>0?allCategories.map(category=>(
     <div className="border rounded p-3 mt-2" droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h3 style={{color:''}}>{category?.categoryName}</h3>
        
        <button onClick={()=>removeCategory(category?.id)} className='btn btn-danger btn-sm'><i class="fa-regular fa-trash-can" style={{color:'#d33636'}}></i></button>
        
      </div>

      <Row>
        {category?.allVideos?.length>0?category?.allVideos.map(card=>(
            <Col sm={12} className='mb-3' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
              <VideoCard video={card} insideCategory={true} />
            </Col>
            )):null}
      </Row>
      
    </div> 
    )):<p className='text-danger fw-bolder'>No Categories yet!!</p>}
 


    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <FloatingLabel controlId='floatingName' label='Category Name'>
              {/* <Form.Label>Add Video Category</Form.Label> */}
              <Form.Control type="text" placeholder="" autoFocus onChange={(e)=>setCategoryName(e.target.value)}/>
              </FloatingLabel>
            </Form.Group>
            
            </Form>
         
        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button onClick={handleAdd} variant="primary">
            Save Changes
          </Button>

        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Catagory