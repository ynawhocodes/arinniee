"use client";

import { useState } from "react";
import ImageModal from "@/components/ImageModal";
import { ArtworkQueryResult } from "@sanity/types/sanity.types";
import { SanityImage } from "@/components/SanityImage";

interface ArtworkProps {
  artwork: ArtworkQueryResult;
}

const ArtworkPage = ({ artwork }: ArtworkProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickImageIndex, setClickImageIndex] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={{
          ref: artwork?.images?.[Number(clickImageIndex)]?.image?._ref || "",
          metadata:
            artwork?.images?.[Number(clickImageIndex)]?.metadata || null,
        }}
      />
      <div className="flex items-center justify-center py-[120px]">
        <img
          className="w-[100px]"
          src="/images/artwork_title_3x.png"
          alt="artwork"
        />
      </div>
      <div className="flex justify-center">
        <div className="px-4 py-2.5 w-full max-w-[600px]">
          {artwork?.images?.map((item, index) => (
            <div
              key={item.image?._ref}
              className="cursor-pointer"
              onClick={() => {
                openModal();
                setClickImageIndex(index);
              }}
            >
              <SanityImage
                className="aspect-[2/1] mb-1 md:mb-2 bg-gray-300 object-cover w-full"
                image={{ ref: item.image?._ref, metadata: item.metadata }}
                alt="film thumbnail"
                size={800}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtworkPage;
