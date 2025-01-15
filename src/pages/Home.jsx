import React, { useState, useEffect } from 'react'
import { Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { getMovieDetailsAPI } from '../services/allAPI';



const Home = () => {



    
    const [allDetails, setAllDetails] = useState([])

     useEffect(()=>{
    
          getMovieDetails()
    
        },[])

        console.log(allDetails);

        const getMovieDetails = async ()=>{
          try {
    
            const result = await getMovieDetailsAPI()
            console.log(result);
    
            if(result.status<=200 && result.status<300){
    
              setAllDetails(result.data)
    
            }        
            
          } catch (error) {
            console.log(error);
            
            
          }
        }




  return (
    <>

<div style={{paddingTop:"150px"}} className=''>

  <div className='container p-5'>
        <div className='row g-5'>

          {
            allDetails?.length>0?

            allDetails.map(movie=>(

              <div key={movie?.id} className="col-lg-3 col-md-6">
        
            <Card  className='rounded' style={{ width: '18rem', border:"none" }}>
                  <Link to={"/review"} state={{movie}}><Card.Img className='rounded imgHover' width={"290px"} height={"320px"} variant="top" src={movie.imgUrl} /></Link>
                  <Card.Body>
                    <Card.Title>{movie.mTitle}</Card.Title>
                    <Card.Text>
                      {movie.mCategory}
                    </Card.Text>
            
    
    <div className='d-flex justify-content-between justify-content-center align-items-center'>
         <div className="star-rating">
          {[...Array(5)].map((_, index) => {
            const currentRate = index + 1; // Determine the current star's position
    
            return (
              <label key={index} style={{ marginRight: "5px" }}>
                {/* Star Icon */}
                <i
                  className="fa-solid fa-star"
                  style={{
                    color: currentRate <= movie.numOfStars ? "#FFD700" : "#D3D3D3", // Yellow for active stars, grey otherwise
                    fontSize: "25px",
                  }}
                ></i>
              </label>
            );
          })}
        </div>
        <div className=''>
        <i class="fa-solid fa-heart me-1" style={{color:"#b01111", fontSize:"27px"}}></i><span style={{fontSize:"15px"}}>{movie.like}</span>
        
        </div>
    </div>

      
     
            
                    
                  </Card.Body>
                </Card>
        
            </div>

            ))
            :
            <div className='text-dark fs-5'> <img width={'80px'} src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="" />Loading Reviews...</div>
          }
        
       
          
        </div>
  </div>
</div>

    </>
  )
}

export default Home