import React from 'react';


function Home(){
   // eslint-disable-next-line
  return(
    <div>
      
    <div className="container">
  <div className="row">
    <div className="col  col-sm-12 col-md-8 ">
    <div className="homepage">
    <h1>Experience the power of real-time tracking & monitoring</h1>
       <p>Because every mile counts.</p>
       <a href="/Login"><button type="button" class="btn btn-secondary btn-lg homebutton">Get Started</button></a>
       <a href="https://www.youtube.com/channel/UCnsDJLyWpVgTgWnPNgIgNoA"><button  type="button" class="btn btn-secondary btn-lg homebutton">Watch Video</button> </a> 
   </div>
    <div id="topic1" className="description">
       <h1>We offer the best industry solutions With useful features, an intuitive interface.</h1>
       <div className="row">
       <div className="col col-sm-12 col-md-4">
          <p>Taxi fleet Uberization</p>
          <span>Engage Customers with a powerful booking application & automate the assignment process.</span>
          <p>School Transport </p>
          <span>Seamlessly stay connected & make   pick up & drop more convenient for parents.</span>
       </div>
       <div className="col col-sm-12 col-md-4">
       <p>Last Minute Delivery</p>
          <span>Increase your rider utilization rate with the help of optimization & real-time monitoring.</span>
          <p>Vehicle Fleet </p>
          <span>Explore a whole new world of telematics IoT & a highly enabled software platform.</span>
       </div>
       <div className="col col-sm-12 col-md-4">
       <p>Sales Force Tracking</p>
          <span>Grow your business with the help of metrics & performance analysis for your on-field team.</span>
          <p>Specialized Solutions</p>
          <span>See how Roadcast has transformed the way various businesses operate with the help of special tools.</span>
       </div>
       </div>
    </div>
    <div id="topic2" className="client">
       <h1>Some industry leaders & our valuable clients where we make a difference</h1>
       <div className="row">
       <div className="col col-md-4">
           <ul className="menu">
           <a href="/#"><li>Udaan</li></a>
         <a  href="/#"><li>Lithium</li></a>
         <a href="/#"><li>Zappfresh</li></a>
           </ul>
       </div>
       <div className="col col-md-4">
          <ul className="menu">
          <a href="/#"><li>TATA hitachi</li></a>
         <a href="/#"><li>Peak</li></a>
         <a href="/#"><li>Amazon</li></a>
          </ul>
       </div>
       <div className="col col-md-4">
            <ul className="menu">
            <a href="/#"><li>Toyota</li></a>
         <a href="/#"><li>Police</li></a>
         <a href="/#"><li>Adobe</li></a>
            </ul>
       </div>
       </div>
    </div>
    <div id="topic3" className="SEO">
       <h1>Create a smarter, more connected business eco-system.</h1>
       <p>Make your business smarter & more high tech by shifting to technology driven operations</p>
       <ul>
        <a>Instant data capturing</a> 
         <li>Instant data capturing With real-time information exchange, make smarter decisions in no time.</li>
       </ul>
       <ul>
         <a>Technical SEO Audit</a>
         <li>Help your business grow faster through appropriate resource allocation.</li>
       </ul>
    </div>
    <div id="topic4"  className="technology">
       <h1>We help you create value through technology.</h1>
       <p>Loop in your customers & keep them engaged through real-time visibility & feedback.</p>
       <p>Get higher ratings by building a business that guarantees higher reliability. Get more work done in the same time through monitoring & management. Get more out of your fleet. Our technology has proven to help increase efficiency by 30%.

</p>
    </div>
    <div id="topic5" className="review">
       <h1>Check testimonials for our satisfied clients</h1>
       <p>"Roadcast is one of the finest tool available to track our deliveries"</p>
    </div>
  </div>
  <div className="col col-sm-12 col-md-4 rightside">
    <ul>
      <a href="#topic1"><li>Features</li></a>
      <a href="#topic2"><li>Our Client</li></a>
      <a href="#topic3"><li>Seo</li></a>
      <a href="#topic4"><li>Technology</li></a>
      <a href="#topic5"><li>Reviews</li></a>
    </ul>
  </div>
</div>
    
</div>
</div>
  )
}

export default Home;