import React from 'react'
import { Row , Col , Card ,Button  } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl=useNavigate();
  
  return (
    <>
    
    {/* top */}
    <Row className="mt-5 align-items-center justify-content-between w-100" >
    <Col></Col>
    <Col sm={8} md={5} lg={5} className='p-5'>
      <h1 style={{fontSize:'40px'}}>Welcome to <span className='text-warning'>Media Player</span></h1>
      <p>Media player software application come with a variety of features to enhance the user’s viewing experience.It can stream videos from the internet and Playlist Management that Allows the user to create, save, and manage playlists of videos.</p>
      <button className='btn btn-info mt-4' onClick={()=>navigateByUrl('./home')}>Get Started</button>
    </Col>
    <Col sm={8} md={5} lg={5}  >
      <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/E02702440_Google_GMP_DV_360_Frequency_Management_Blog_Jan22_Blog_Header.gif" alt="" style={{borderRadius:'20px',width:'100%'}} />
    </Col>
    
    <Col></Col>

    </Row>


{/* middle */}
    <Row className=' mb-5 mt-5 d-flex align-items-center justify-content-between  w-100'>
      <h3 style={{fontWeight:'bolder'}}>Features</h3>
 

      <Col sm={12} md={4} lg={4} className='mt-3'>
      <Card style={{ width: '24rem', borderRadius:'40px', height:'30rem'  }} className='p-4 bg-light' >
      <Card.Img variant="top" height={'200px'} width={'300px'} style={{borderRadius:'20px'}} src="https://i.pinimg.com/originals/9b/aa/33/9baa33afd36c03fb61142e657ac172be.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Managing Video</Card.Title>
        <Card.Text>
        Playlist Management that Allows the user to create, save, and manage playlists of videos.
        </Card.Text>
        <Button variant="primary" onClick={()=>navigateByUrl('./home')}>Go to Videos</Button>
      </Card.Body>
    </Card>
    </Col>
      

    <Col sm={12} md={4} lg={4} className='mt-3'>
    <Card style={{ width: '24rem',borderRadius:'40px', height:'30rem' }} className='p-4 bg-light'>
      <Card.Img variant="top" height={'200px'} width={'300px'} style={{borderRadius:'20px'}} src="https://i.pinimg.com/originals/29/c8/a8/29c8a863268ab7f9e4e03294952f084b.gif"  />
      <Card.Body>
        <Card.Title className='text-primary'>Video Catagories</Card.Title>
        <Card.Text>
           These categories can help users navigate their media library and find the content they want to view more easily.
        </Card.Text>
        <Button variant="primary" onClick={()=>navigateByUrl('./home')}>Go to Categories</Button>
      </Card.Body>
    </Card>
    </Col>
    

    <Col sm={12} md={4} lg={4} className='mt-3'>
    <Card style={{ width: '24rem', borderRadius:'40px', height:'30rem'  }} className='p-4 bg-light' >
      <Card.Img variant="top" height={'200px'} width={'300px'} style={{borderRadius:'20px'}} src="https://cdn.dribbble.com/users/428251/screenshots/2990220/elastic-list---dribbble.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Watch History</Card.Title>
        <Card.Text>
        The Watch History in a media player refers to a feature that keeps track of the videos you’ve watched.
        </Card.Text>
        <Button variant="primary" onClick={()=>navigateByUrl('./watchhistory')}>Go to Watch History</Button>
      </Card.Body>
    </Card>
    </Col>
    



    </Row>

{/* last */}
    <Row className=' border rounded p-5 d-flex items-align-center justify-content-between w-100'>
      <Col sm={12} md={6} lg={6} className='text-something'>
        <h4 className='text-warning fw-bolder'>Simple Powerful & Fast</h4>
        <h6 className='md-5 mt-3'>Play Everything media player is able to play all types of media files, including audio, video, and streaming content.</h6>

        <br />


        <h4 className='text-warning fw-bolder'>Catagorize Videos</h4>
        <h6 className='md-5 mt-3'>Categorizing videos in a media player is the process of organizing your video files into different groups or categories, which can make it easier to manage and find specific videos</h6>


        <br />

        <h4 className='text-warning fw-bolder'>Managing Videos</h4>
        <h6 className='md-5 mt-3'>Managing videos in a media player involves organizing, accessing, and controlling the playback of your video files. You can add video files to your media player from various sources, such as your computer’s hard drive or an external device.</h6>


      </Col>

      <Col sm={12} md={6} lg={6}  >
      <iframe style={{borderRadius:'20px'}} width="100%" height="100%" src="https://www.youtube.com/embed/1JPNFp0f53I" title="Calvin Harris, Sam Smith - Desire (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Col>

    </Row>



    </>
  )
}

export default LandingPage