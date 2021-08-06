import React from 'react';
import { NavLink } from 'react-router-dom';


function Error404(){
  return(
    <div>
      <div className="text-center bgtext">
       <h1>WE ARE SORRY, PAGE NOT FOUND!</h1>
       <p>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR ITS TEMPORARILY UNAVAILABLE</p>
       <NavLink  to="/"><button type="button" class="btn btn-secondary"> BACK TO HOMEPAGE</button></NavLink>
    </div>
    </div>
  )
}

export default Error404;