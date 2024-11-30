"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}

const ImageModal = ({ isOpen, onClose, src }: ModalProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  useEffect(() => {
    if (!isOpen) {
      setIsImageLoaded(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = isOpen ? "hidden" : "";
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="flex fixed inset-0 z-50 justify-center items-center"> 
      <div className="fixed inset-0 bg-black/50"
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label="모달 닫기"
      />
      {!isImageLoaded && (
        <svg className="fixed animate-bounce" viewBox="0 0 200 200" width="70" height="70">
          <ellipse cx="100" cy="110" rx="40" ry="25" fill="#FFD700" />
          <circle cx="100" cy="70" r="30" fill="#FFD700" />
          <circle cx="110" cy="65" r="5" fill="#000000" />
          <polygon points="129,65 129,80 142,72.5" fill="#FFA500" />
        </svg>
      )}
      <div className="relative z-50 w-4/5 max-w-[400px]">
        <Image
          src={src} 
          onLoad={() => setIsImageLoaded(true)} 
          className={`
            transition-all duration-700 
            ${isImageLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'}
          `}
          width={1000} 
          height={1000}
          alt="compcard"
        />
      </div>
    </div>
  );
};

export default ImageModal;
