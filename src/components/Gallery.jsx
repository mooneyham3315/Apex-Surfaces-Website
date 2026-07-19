import React from 'react';
import './Gallery.css'; // Make sure to import your CSS file

function Gallery() {
  return (
    <div className="gallery-grid">
      <div className="gallery-item">
        <img src="/pressure-washing/driveway1before.jpeg" alt="Driveway before cleaning" width="300" />
        <p>Driveway before cleaning</p>
      </div>
      <div className="gallery-item">
        <img src="/pressure-washing/driveway1after.jpeg" alt="Driveway after Apex Surfaces cleaning" width="300" />
        <p>Driveway after Apex Surfaces cleaning</p>
      </div>
      <div className="gallery-item">
        <img src="/pressure-washing/porchbefore.jpeg" alt="Porch before cleaning" width="300" />
        <p>Porch before cleaning</p>
      </div>
      <div className="gallery-item">
        <img src="/pressure-washing/porch-after.jpeg" alt="Porch after Apex Surfaces cleaning" width="300" />
        <p>Porch after Apex Surfaces cleaning</p>
      </div>
      <div className="gallery-item">
        <img src="/pressure-washing/sidingbefore.JPG" alt="Siding before cleaning" width="300" />
        <p>Siding before cleaning</p>
      </div>
      <div className="gallery-item">
        <img src="/pressure-washing/sidingafter.jpeg" alt="Siding after Apex Surfaces cleaning" width="300" />
        <p>Siding after Apex Surfaces cleaning</p>
      </div>
    </div>
  );
}

export default Gallery;