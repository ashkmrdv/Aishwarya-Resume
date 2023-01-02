import React from 'react';
import {Link} from 'react-router-dom';
import "../../App.css";

function Navbar(){
    return(
      <div className="m-2">
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-transparent shadow p-3 mb-5 bg-body rounded fs-5 ">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand fs-3 fw-bold">My Portfolio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item"> 
          <Link to="/" class="nav-link active fw-bold "aria-current="page" ><span className="blue ">HOME</span></Link>
        </li>
        <li class="nav-item">
          <Link to="/skills" class="nav-link active fw-bold"aria-current="page" ><span className="blue">SKILLS</span></Link>
        </li>
        <li class="nav-item"> 
          <Link to="/about" class="nav-link active fw-bold"aria-current="page" ><span className="blue">ABOUT</span></Link>
        </li>
        <li class="nav-item">
          <Link to="/work" class="nav-link active fw-bold"aria-current="page" ><span className="blue">PROJECT</span></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
        
    );
}

export default Navbar;