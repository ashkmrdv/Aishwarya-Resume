import React from "react";
import Slider1 from "../images/PICTURE_1.png"

function Slider(){
    return(
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Slider1} class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5> First Silde label</h5>
        <p> Caption 1 abcdefg</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Slider1} class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5> second Silde label</h5>
        <p> Caption 2 abcdefg</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Slider1} class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5> Third Silde label</h5>
        <p> Caption 3 abcdefg</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );

   

}

export default Slider;