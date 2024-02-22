import React from "react";
import ImageGallery from "@/components/image-gallery";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  // Add more image paths as needed
];

const Home: React.FC = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default Home;
