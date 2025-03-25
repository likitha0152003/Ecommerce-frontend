import React from 'react'

export const Products = () => {
  return (
    <div>
     <div id="carouselExampleAutoplaying" class="carousel slide pt-20px" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img1.jpg" class="d-block w-100px" height="100px" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img2.jpeg" class="d-block w-100" height="100px"alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img3.jpeg" class="d-block w-100" height="100px" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img4.jpg" class="d-block w-100" height="100px" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img5.jpg" class="d-block w-100" height="100px" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
  )
}

export default Products
