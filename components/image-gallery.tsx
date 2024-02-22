"use client";

import React, { useState } from "react";

const ImageGallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const openImage = (imageUrl: string) => {
    setExpandedImage(imageUrl);
  };

  const closeImage = () => {
    setExpandedImage(null);
  };

  return (
    <div>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-box">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => openImage(image)}
              className="w-16 h-16"
            />
          </div>
        ))}
      </div>
      {expandedImage && (
        <div className="expanded-image-overlay" onClick={closeImage}>
          <div className="expanded-image-container">
            <img src={expandedImage} alt="Expanded Image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
