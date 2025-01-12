import React from 'react'

const Footer = () => {
  return (
 

<div style={{backgroundColor:"#FBF5E5", color:"#4D340A"}} className="container-fluid p-5 w-100">
 
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Get Best Reviews in your Inbox</h5>
         
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="email" className="form-control" placeholder="Email address"/>
            <button style={{backgroundColor:"#E5D0AC"}} className="btn" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top text-center">
      <p>© 2025 BrK, Inc. All rights reserved.</p>
     
    </div>
  
</div>
 
 
 
  )
}

export default Footer