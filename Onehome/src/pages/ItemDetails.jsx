import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { properties } from "../data/fakeData";
import { motion, AnimatePresence } from "framer-motion";
import ContactPopup from "../components/ContactPopup";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';

export default function ItemDetails() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!property) {
    return <div className="text-center text-red-500">Không tìm thấy bất động sản!</div>;
  }

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // 👉 Xử lý khi nhấn ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-3 gap-6">
      {/* Cột 1 & 2: Thông tin chính */}
      <div className="col-span-2 bg-white shadow-lg rounded-lg p-6">
        {/* Hình ảnh với hiệu ứng chuyển động */}
        <div className="relative cursor-pointer" onClick={toggleFullscreen}>
          <motion.img
            key={currentImage}
            src={property.images[currentImage]}
            alt={property.name}
            className="w-full h-full object-cover rounded-lg mb-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
          <button
            onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
          >
            <ArrowBackIosIcon />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
          >
            <ArrowForwardIosIcon />
          </button>
        </div>

        {/* Tiêu đề & giá */}
        <h1 className="text-2xl font-bold">{property.name}</h1>
        <h2 className="text-xl text-gray-600">{property.project}</h2>
        <p className="text-red-500 text-xl font-bold">
          {property.price}{" "}
          {property.oldPrice && (
            <span className="text-gray-400 line-through text-lg ml-2">{property.oldPrice}</span>
          )}
        </p>

        {/* Thông tin chi tiết */}
        <div className="mt-4">
          <p className="text-gray-700">{property.description}</p>
          <p className="mt-2 text-gray-500">📍 Địa điểm: <span className="font-semibold">{property.location}</span></p>
          <p className="mt-2 text-gray-500">🛏 Số phòng ngủ: <span className="font-semibold">{property.bedrooms}</span></p>
          <p className="mt-2 text-gray-500">📏 Diện tích: <span className="font-semibold">{property.area}m²</span></p>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleFullscreen}
          >
            <motion.img
              key={currentImage}
              src={property.images[currentImage]}
              alt="Fullscreen"
              className="max-w-[80vw] max-h-[80vh] object-contain m-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
              className="absolute left-44 text-white text-2xl p-3 rounded-full"
            >
              <ArrowBackIosIcon />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
              className="absolute right-44 text-white text-2xl p-3 rounded-full"
            >
              <ArrowForwardIosIcon />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
              className="absolute top-14 right-44 text-white bg-black bg-opacity-5 p-2 rounded-full"
            >
              <CloseIcon fontSize="large" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <ContactPopup />
    </div>
  );
}
