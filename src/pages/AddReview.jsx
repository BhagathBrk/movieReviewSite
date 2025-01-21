import React, { useEffect, useState } from 'react';
import { saveMovieDetails } from '../services/allAPI';
import { Link } from 'react-router-dom';

const AddReview = () => {
  const [hoverRating, setHoverRating] = useState(null);

  const [invalidImgUrl, setInvalidImgUrl] = useState(false);
  const [invalidCategory, setInvalidCategory] = useState(false);
  const [invalidVideo, setInvalidVideo] = useState(false);
  const [invalidDirName, setInvalidDirName] = useState(false);
  const [invalidForm, setInvalidForm] = useState(false);

  const [movieDetails, setMovieDetails] = useState({
    mTitle: "",
    mCategory: "",
    dirName: "",
    imgUrl: "",
    mReview: "",
    uTubeLink: "",
    numOfStars: 0,
  });

  useEffect(() => {
    const formValid =
      !invalidDirName &&
      !invalidImgUrl &&
      !invalidVideo &&
      movieDetails.mTitle.trim() &&
      movieDetails.mCategory.trim() &&
      movieDetails.mReview.trim() &&
      movieDetails.imgUrl.trim() &&
      movieDetails.uTubeLink.trim() &&
      movieDetails.numOfStars > 0;
    setInvalidForm(!formValid);
  }, [invalidDirName, invalidImgUrl, invalidVideo, movieDetails]);

  const dirNameValidate = () => {
    if (movieDetails.dirName.match(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+(?:[-' ][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/)) {
      setInvalidDirName(false);
    } else {
      setInvalidDirName(true);
    }
  };

  const categoryValidate = () => {
    if (movieDetails.mCategory.match(/^[a-zA-Z&/-]+(?: [a-zA-Z&/-]+)*$/)) {
      setInvalidCategory(false);
    } else {
      setInvalidCategory(true);
    }
  };

  const validateImage = (url) => {
    if (url.startsWith("https://")) {
      setInvalidImgUrl(false);
    } else {
      setInvalidImgUrl(true);
    }
  };

  const validateVideo = (url) => {
    if (url.startsWith("https://")) {
      setInvalidVideo(false);
    } else {
      setInvalidVideo(true);
    }
  };

  const handleReset = () => {
    setHoverRating(null);
    setMovieDetails({
      mTitle: "",
      mCategory: "",
      dirName: "",
      imgUrl: "",
      mReview: "",
      uTubeLink: "",
      numOfStars: 0,
    });
  };

  const handlemovieDetails = async () => {
    const { imgUrl, uTubeLink, mTitle, mReview, dirName, numOfStars, mCategory } = movieDetails;

    if (imgUrl && uTubeLink && mTitle && mReview && dirName && numOfStars && mCategory) {
      try {
        const result = await saveMovieDetails(movieDetails);

        if (result.status >= 200 && result.status < 300) {
          alert("Review Uploaded");
          handleReset();
        }
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div style={{ paddingTop: "150px", marginLeft: "50px" }}>
      <Link to={"/"} style={{ color: "#4D340A" }} className="btn mt-5 ">
        <i className="fa-solid fa-arrow-left fa-2x position-fixed"></i>
      </Link>
      <div style={{ color: "#4D340A" }} className="container px-5 w-100">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <h2 className="mt-2">Review</h2>
            <hr />

            <h5 style={{ marginTop: "100px" }}>Movie Title: </h5>
            <input
              value={movieDetails.mTitle}
              onChange={(e) => setMovieDetails({ ...movieDetails, mTitle: e.target.value })}
              type="text"
              className="form-control mb-5"
            />

            <h5>
              Category: {invalidCategory && <span className="text-danger">*</span>}{" "}
            </h5>
            <input
              value={movieDetails.mCategory}
              onChange={(e) => {
                const newCategory = e.target.value;
                setMovieDetails({ ...movieDetails, mCategory: newCategory });
                categoryValidate();
              }}
              type="text"
              className="form-control mb-5"
            />

            <h5>
              Director's Name: {invalidDirName && <span className="text-danger">*</span>}
            </h5>
            <input
              value={movieDetails.dirName}
              onChange={(e) => {
                const newDirName = e.target.value;
                setMovieDetails({ ...movieDetails, dirName: newDirName });
                dirNameValidate();
              }}
              type="text"
              className="form-control mb-5"
            />

            <h5>
              Poster Link: {invalidImgUrl && <span className="text-danger">*</span>}
            </h5>
            <input
              value={movieDetails.imgUrl}
              onChange={(e) => {
                const newImgUrl = e.target.value;
                setMovieDetails({ ...movieDetails, imgUrl: newImgUrl });
                validateImage(newImgUrl);
              }}
              type="text"
              className="form-control mb-5"
              placeholder="https://..."
            />

            <h5>
              Movie Trailer Link: {invalidVideo && <span className="text-danger">*</span>}{" "}
            </h5>
            <input
              value={movieDetails.uTubeLink}
              onChange={(e) => {
                const newVideo = e.target.value;
                setMovieDetails({ ...movieDetails, uTubeLink: newVideo });
                validateVideo(newVideo);
              }}
              type="text"
              className="form-control mb-5"
              placeholder="https://..."
            />

            <h5>Detailed Review: </h5>
            <textarea
              value={movieDetails.mReview}
              onChange={(e) => setMovieDetails({ ...movieDetails, mReview: e.target.value })}
              className="form-control mb-5"
              style={{ height: "200px" }}
            ></textarea>

            <h5>Rating:</h5>

            <div className="star-rating mb-5 mt-3">
              {[...Array(5)].map((_, index) => {
                const currentRate = index + 1;

                return (
                  <label key={index} style={{ cursor: "pointer", marginRight: "5px" }}>
                    <input type="radio" value={currentRate} style={{ display: "none" }} />
                    <i
                      className="fa-solid fa-star"
                      style={{
                        color: currentRate <= (hoverRating || movieDetails.numOfStars) ? "#FFD700" : "#D3D3D3",
                        fontSize: "28px",
                        transition: "color 0.2s",
                      }}
                      onClick={() => setMovieDetails({ ...movieDetails, numOfStars: currentRate })}
                      onMouseEnter={() => setHoverRating(currentRate)}
                      onMouseLeave={() => setHoverRating(null)}
                    ></i>
                  </label>
                );
              })}
            </div>

            <div className="d-flex justify-content-between">
              <button
                onClick={handlemovieDetails}
                disabled={invalidForm}
                className="btn mb-5"
                style={{
                  backgroundColor: "#E5D0AC",
                  color: "#4D340A",
                  height: "40px",
                  width: "150px",
                }}
              >
                Upload Review
              </button>

              <button
                onClick={handleReset}
                className="btn mb-5"
                style={{
                  backgroundColor: "#E5D0AC",
                  color: "#4D340A",
                  height: "40px",
                  width: "100px",
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
