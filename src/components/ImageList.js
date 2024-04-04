import React from "react";
import ImageItem from "./ImageItem";

export default function ImageList({ images }) {
  return (
    <div className="image-list">
      {images.map((image) => (
        <ImageItem key={image.id} image={image.urls.small} />
      ))}
    </div>
  );
}
