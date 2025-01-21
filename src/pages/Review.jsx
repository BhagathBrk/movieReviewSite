import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deleteMovieDetailsAPI, likeCountAPI } from "../services/allAPI";

const Review = () => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [blink, setBlink] = useState(false);

  const location = useLocation();
  const { movie } = location.state || {};

  const navigate = useNavigate();

  useEffect(() => {
    // Initialize likeCount when component mounts
    if (movie?.likeCount) {
      setLikeCount(movie.likeCount);
    }
  }, [movie]);

  const removeMovieDetails = async (id) => {
    try {
      await deleteMovieDetailsAPI(id);
      alert("Review Deleted Successfully");
      navigate("/");
    } catch (error) {
      console.error("Failed to delete the review:", error);
    }
  };

  const likeBtn = () => {
    setLike(!like); // Toggle the like state
    setBlink(true); // Trigger blink animation
    setTimeout(() => {
      setBlink(false); // Stop blink animation after 500ms
    }, 500);
  };

  const handleLikeCount = async (id) => {
    const newLikeCount = likeCount + 1;
    setLikeCount(newLikeCount);

    try {
      await likeCountAPI(id, newLikeCount);
    } catch (error) {
      console.error("Failed to update like count:", error);
    }
  };

  if (!movie) {
    return <p style={{ padding: "150px 50px", color: "#4D340A" }}>No movie data available.</p>;
  }

  return (
    <div style={{ paddingTop: "150px", marginLeft: "50px" }}>
      <Link to="/" style={{ color: "#4D340A" }} className="btn mt-5">
        <i className="fa-solid position-fixed fa-arrow-left fa-2x"></i>
      </Link>
      <div style={{ color: "#4D340A" }} className="container px-5 w-100">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <h1 style={{ fontSize: "60px" }} className="mt-2 mb-5">
              {movie.mTitle}
            </h1>
            <h5 className="my-4 fw-bold">{movie.mCategory}</h5>
            <img
              className="rounded img-fluid"
              width={"80%"}
              height={"auto"}
              src={movie.imgUrl}
              alt={movie.mTitle}
            />
            <h5 className="my-4 fw-bold">
              Directed by: <span>{movie.dirName}</span>
            </h5>

            <div className="star-rating mb-3">
              {[...Array(5)].map((_, index) => {
                const currentRate = index + 1;
                return (
                  <label key={index} style={{ marginRight: "5px" }}>
                    <i
                      className="fa-solid fa-star"
                      style={{
                        color: currentRate <= movie.numOfStars ? "#FFD700" : "#D3D3D3",
                        fontSize: "25px",
                      }}
                    ></i>
                  </label>
                );
              })}
            </div>

            <a
              href={movie.uTubeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4D340A" }}
              className="fw-bolder fst-italic fs-5"
            >
              Click here to watch the trailer...
            </a>

            <h5 style={{ fontSize: "25px" }} className="fw-bolder mt-5">
              Review:
            </h5>
            <p style={{ fontSize: "20px" }}>{movie.mReview}</p>

            <div className="d-flex justify-content-between my-5">
              <button
                onClick={() => {
                  likeBtn();
                  handleLikeCount(movie.id);
                }}
                className={`btn btnLiked border border-0 ${blink ? "blink" : ""}`}
              >
                <i className="fa-solid fa-thumbs-up fa-2x"></i>
              </button>
              <button
                onClick={() => removeMovieDetails(movie.id)}
                className="btn border border-0"
              >
                <i className="fa-solid fa-trash fa-2x" style={{ color: "#b52626" }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
