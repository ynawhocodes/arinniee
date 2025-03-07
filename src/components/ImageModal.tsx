"use client";

import React, { useEffect, useState } from "react";
import { SanityImageMetadata } from "@sanity/types/sanity.types";
import { SanityImage } from "./SanityImage";
import { cn } from "@01works/tw";

interface ModalProps {
  image: {
    ref?: string;
    metadata: SanityImageMetadata | null;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = ({ isOpen, onClose, image }: ModalProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsImageLoaded(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const aspectRatio = image.metadata?.dimensions?.aspectRatio || 1;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label="모달 닫기"
      />
      {!isImageLoaded && (
        <svg
          className="absolute animate-bounce"
          viewBox="0 0 200 200"
          width="70"
          height="70"
        >
          <ellipse cx="100" cy="110" rx="40" ry="25" fill="#FFD700" />
          <circle cx="100" cy="70" r="30" fill="#FFD700" />
          <circle cx="110" cy="65" r="5" fill="#000000" />
          <polygon points="129,65 129,80 142,72.5" fill="#FFA500" />
        </svg>
      )}

      <SanityImage
        image={image}
        onLoad={() => setIsImageLoaded(true)}
        className={cn(
          "object-contain transition-opacity duration-700",
          isImageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-lg",
          aspectRatio < 1
            ? "max-w-[90vw] max-h-[80vh] w-auto h-full"
            : "max-h-[90vh] max-w-[80vw] h-auto w-full"
        )}
        size={1200}
        alt="Image"
      />
    </div>
  );
};

export default ImageModal;
