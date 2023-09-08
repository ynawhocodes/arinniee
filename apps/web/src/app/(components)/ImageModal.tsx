"use client"

import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ImageModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>
      <div className="z-50 w-4/5 shadow-lg lg:w-1/3">
        {children}
        {/* <button
          className="absolute p-2 text-white bg-red-500 rounded-full top-2 right-2 hover:bg-red-600 focus:outline-none"
          onClick={handleClose}
        >
          닫기
        </button> */}
      </div>
    </div>
  ) : null;
};

export default ImageModal;
