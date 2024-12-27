import React, { useState } from 'react';
import Staff from "../Images/Staff.jpg"
import Stafff from "../Images/Stafff.jpg"
interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  { src: Stafff, alt: 'School Event 1' },
  { src: Staff, alt: 'Teachers Day' },
 
];

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">📸 School Gallery</h1>
        <p className="text-lg text-gray-600 mt-2">A glimpse into our memorable moments</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => openModal(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
              <p className="text-white text-lg">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Full-Screen View */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-3xl w-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
