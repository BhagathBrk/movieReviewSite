import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>

<Navbar
      style={{ backgroundColor: "#FBF5E5", zIndex: "1" }}
      className="position-fixed w-100"
      expand="lg" // Allows the navbar to collapse on smaller screens
    >
      <Container>
        {/* Brand and Toggle */}
        <Navbar.Brand className="d-flex align-items-center">
      <Link to="/" style={{textDecoration:"none"}} className="d-flex align-items-center">
            <img
              src="/BrK.png"
              alt="Movie Reviews Logo"
              width="80"
              height="80"
              className="d-inline-block align-text-top"
            />
            <h3
              style={{ color: "#4D340A",  marginLeft: "10px" }}
              className="mb-0"
            >
              Movie Reviews
            </h3>
          </Link>
        </Navbar.Brand>

        {/* Toggle button for smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="ms-auto d-flex align-items-center flex-column flex-lg-row">
            {/* Add Review Button */}
            <Link to="/addreview">
              <button
                style={{
                  backgroundColor: "#E5D0AC",
                  color: "#4D340A",
                  height: "40px",
                  width: "150px",
                  marginBottom: "10px", // Space between elements in small screens
                }}
                className="btn me-lg-2"
              >
                Add Review
              </button>
            </Link>

            {/* Search Bar */}
            <div className="input-group">
              <input
                style={{ width: "250px" }}
                className="form-control"
                type="text"
                placeholder="Search Movie title..."
              />
              <Button
                style={{
                  backgroundColor: "#FBF5E5",
                  border: "none",
                  color: "#4D340A",
                }}
                className="input-group-text"
                aria-label="Search"
                title="Search"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    </>
  )
}

export default Header