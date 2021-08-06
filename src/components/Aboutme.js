import React from 'react';
import profile from "../images/profile.jpg";


function AboutMe(){

  return(
    <div>
    <form>
    <div className="container py-5">
    <div className="p-1 mb-2 bg-light rounded-3">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-4 ">
            <img src={profile} alt="pic" className="aboutimg"/>
          </div>
          <div className="col-md-6">
           <h5 className="aboutinfo">Atul Balodi</h5>
           <h6 className="aboutinfo">Web developer</h6>
           <p className="aboutinfo" >Ranking<span>1/10</span></p>
           <nav>
            <div className="nav nav-tabs mt-3" id="nav-tab" role="tablist">
              <a className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">About</a>
              <a className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Timeline</a>
             
            </div>
          </nav>
          </div>
          <div className="col-md-2 aboutbutton">
          <a href="/Login"><button type="button" class="btn btn-secondary btn-sm homebutton">Edit</button></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 aboutlinks">
          <p>Software engineer</p>
          <p>Instagram</p>
          <p>Github</p>
          <p>Facebook</p>
          <p>Youtube</p>
          </div>


          <div className="col-md-8">
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active userdetails" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div className="row mt-5">
              <div className="col-md-4">
               <label>User ID</label>
              </div>
              <div className="col-md-4">
               <p>189sf23nk293bc2</p>
              </div>
              </div>
              <div className="row mt-1">
              <div className="col-md-4">
               <label>Name</label>
              </div>
              <div className="col-md-4">
               <p>Atul</p>
              </div>
              </div>
              <div className="row mt-1">
              <div className="col-md-4">
               <label>Email</label>
              </div>
              <div className="col-md-4">
               <p>atul@gmail.com</p>
              </div>
              </div>
              <div className="row mt-1">
              <div className="col-md-4">
               <label>Phone</label>
              </div>
              <div className="col-md-4">
               <p>9957382947</p>
              </div>
              </div>
              <div className="row mt-1">
              <div className="col-md-4">
               <label>Work</label>
              </div>
              <div className="col-md-4">
               <p>Web dev</p>
              </div>
              </div>
            </div>
            <div className="tab-pane fade  userdetails" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div className="row mt-5">
              <div className="col-md-4">
               <label>Experience</label>
              </div>
              <div className="col-md-4">
               <p>2 Years</p>
              </div>
              </div>
              <div className="row mt-1">
              <div className="col-md-4">
               <label>Hourly Rate</label>
              </div>
              <div className="col-md-4">
               <p>10$/hr</p>
              </div>
              </div>
              <div className="row mt-1">
              <div className="col-md-4">
               <label>Total Project</label>
              </div>
              <div className="col-md-4">
               <p>100</p>
              </div>
              </div>
              <div className="row mt-1">
              <div className="col-md-4">
               <label>English level</label>
              </div>
              <div className="col-md-4">
               <p>Expert</p>
              </div>
              </div>
              <div className="row mt-1">
              <div className="col-md-4">
               <label>Availability</label>
              </div>
              <div className="col-md-4">
               <p>Now</p>
              </div>
              </div>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </div>
    </div>
    </form>
    </div>
  )
}

export default AboutMe;