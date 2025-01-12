import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>

<Navbar style={{ backgroundColor: "#FBF5E5", zIndex: "1" }} className="position-fixed w-100">
        <Container>
          <div className="d-flex justify-content-between w-100">
            {/* Logo and Title Section */}
            <div className="d-flex flex-row align-items-center">
              <Link to="/" className="navbar-brand">
                <img src="/BrK.png" alt="Logo" width="100" height="100" className="d-inline-block align-text-top" />
              </Link>
              <h3 style={{ color: "#4D340A", marginLeft: '10px' }}>Movie Reviews</h3>
            </div>

            {/* Right Side Section (Button and Search Bar) */}
            <div className="d-flex align-items-center">
              <Link to="/addreview">
              <button style={{backgroundColor:"#E5D0AC", color:"#4D340A", height:"40px", width:"150px"}} className='btn me-2'>Add Review</button>
              </Link>

              <div className="input-group">
                <input
                  style={{ width: "250px" }}
                  className="form-control"
                  type="text"
                  placeholder="Search Movie title..."
                />
                <Button style={{ backgroundColor: "#FBF5E5", border: "none", color: "#4D340A" }} className="input-group-text">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    
    
    </>
  )
}

export default Header