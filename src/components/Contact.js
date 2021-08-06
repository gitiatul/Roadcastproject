import React from 'react';


function Contact(){

  return(
    <div>
<div className="container px-4 py-4" id="icon-grid">

  <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-4 py-4">
    <div className="col d-flex align-items-start">
      <svg className="bi text-muted flex-shrink-0 me-3" width="1em" height="1.75em">
      </svg>
      <div>
        <h4 className="fw-bold mb-0">Phone</h4>
        <p>+91 9953297985</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <svg className="bi text-muted flex-shrink-0 me-3" width="1em" height="1.75em">
    
      </svg>
      <div>
        <h4 className="fw-bold mb-0">Email</h4>
        <p>atulbalodi6@gmail.com</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <svg className="bi text-muted flex-shrink-0 me-3" width="1em" height="1.75em">
  
      </svg>
      <div>
        <h4 className="fw-bold mb-0">Address</h4>
        <p>Some where in India</p>
      </div>
    </div>
</div>
</div>


<h1 className="h3 mb-3 font-weight-normal getintouch">GET IN TOUCH</h1>

<form>
<div className="container px-1 py-4" id="icon-grid">

<div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-4 ">

  <div className="col d-flex align-items-start">
    <svg className="bi text-muted flex-shrink-0 me-3" width="1em" height="1.75em">
    </svg>
    <div>
    <input  name="name" value="name" type="text" id="name" className="form-control" placeholder="Name" required />
    </div>
  </div>
  <div className="col d-flex align-items-start">
    <svg className="bi text-muted flex-shrink-0 me-3" width="1em" height="1.75em">
  
    </svg>
    <div>
    <input name="email" value="email" type="email" id="email" className="form-control " placeholder="Email" required />
    </div>
  </div>
  <div className="col d-flex align-items-start">
    <svg className="bi text-muted flex-shrink-0 me-3" width="1em" height="1.75em">

    </svg>
    <div>
    <input name="phone" value="phone" type="text" id="phone" className="form-control " placeholder="Phone" required />
    </div>
  </div>

</div>
<div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 g-4  textarea">
<div className="col d-flex align-items-start">
    <svg className="bi text-muted flex-shrink-0 me-3" width="1em" height="1.75em">
    </svg>
    <div>
    <textarea className="form-control" name="message" value="message" id="exampleFormControlTextarea1" rows="5" cols="146" placeholder="Message"></textarea>
    <br></br>
    <button className="btn btn-lg btn-secondary btn-block inputform" type="submit">Submit</button>
    </div>
  </div>


</div>
</div>

</form>


</div>
  )
}

export default Contact;