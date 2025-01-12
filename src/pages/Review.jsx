import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { deleteMovieDetailsAPI, likeCountAPI } from '../services/allAPI'






const Review = () => {

    const [like, setLike]= useState(false)
    const [likeCount, setLikeCount] = useState(0)
    const [blink, setBlink] = useState(false);

  const location = useLocation()
  const { movie } = location.state || {}

  const navigate = useNavigate()

  useEffect(() => {
    // Retrieve the like count from localStorage when the component mounts
    const storedLikeCount = localStorage.getItem(`likeCount-${movie.id}`);
    if (storedLikeCount) {
      setLikeCount(Number(storedLikeCount)); // Set the like count to the saved value
    }
  }, [movie.id]);




const removeMovieDetails=  async (id)=>{

try {

  await deleteMovieDetailsAPI(id)

  alert("Review Deleted Successfully")

  navigate('/')

  
  
} catch (error) {

  console.log("deleteAPI error");
  
  
}
  

}


const likeBtn = () => {
  setLike(!like); // Toggle the like state

  // Trigger blink animation for a short time
  setBlink(true);
  setTimeout(() => {
    setBlink(false); // 
  }, 500);

};


const handleLikeCount = async(id)=>{

  const newLikeCount =  likeCount + 1
  setLikeCount(newLikeCount)

   
  console.log(newLikeCount, id);

  localStorage.setItem(`likeCount-${id}`, newLikeCount);

await likeCountAPI(id, newLikeCount)

}
    

  return (
   <div style={{paddingTop:"130px", marginLeft:"50px"}}> <Link to={"/"} style={{color:"#4D340A"}} className="btn mt-5 "><i className="fa-solid fa-arrow-left fa-2x"></i></Link>
      <div style={{color: "#4D340A"}} className='container px-5 w-100'>
  
  <div className="row justify-content-center">
  
  <div className="col-lg-8 col-md-10 col-sm-12">
  
      <h1 style={{fontSize:"60px"}} className='mt-2 mb-5' >{movie.mTitle}</h1>
  
      <h5 className='my-4 fw-bold'>{movie.mCategory}</h5>
  
      <img className='rounded img-fluid' width={"80%"} height={"auto"} src={movie.imgUrl} alt="" />
  
      <h5 className='my-4 fw-bold'>Directed by: <span>{movie.dirName}</span></h5>
  
      <div className="star-rating mb-3">
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
  
        <a href={movie.uTubeLink} target='_blank' style={{color:"#4D340A"}} className='fw-bolder fst-italic fs-5'>Click here to watch trailer...</a>
  
  
  
        <h5 style={{fontSize:"25px"}} className='fw-bolder mt-5'>Review:</h5>
  
        <p style={{fontSize:"20px"}}>{movie.mReview}</p>
  
       <div className='d-flex justify-content-between my-5'>
           <button onClick={()=>{likeBtn(); handleLikeCount(movie.id)}}   className={`btn btnLiked border border-0 ${blink ? 'blink' : ''}`}><i className="fa-solid fa-thumbs-up fa-2x" ></i></button>
  
           <button onClick={()=>removeMovieDetails(movie.id)}  className='btn border border-0'><i className="fa-solid fa-trash fa-2x" style={{color:"#b52626"}}></i></button>
           
            </div>
  
  
  </div>
  
  
  </div>
      </div>
   </div>
  )
}

export default Review