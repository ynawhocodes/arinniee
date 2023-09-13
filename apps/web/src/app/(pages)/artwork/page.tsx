"use client";

import { useState } from "react";
import TempUploader from "../../(components)/common/TempUploader";
import ImageModal from "../../(components)/ImageModal";
import Image from "next/image";
import useArtwork from "../../_hooks/use-artwork";

const ArtworkPage = () => {
  const { artworks } = useArtwork();
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
      <ImageModal isOpen={isModalOpen} onClose={closeModal}>
        {artworks && (
          <img src={artworks[Number(clickImageIndex)]?.thumbnailImageUrl} />
        )}
      </ImageModal>
      <div className="flex items-center justify-center py-[120px]">
        <img src="/images/artwork_title.png" alt="artwork" />
      </div>
      <div className="flex justify-center">
        <div className="px-4 py-2.5  w-full max-w-[600px]">
          {artworks?.map((film, index) => (
            <div
              key={film.id}
              onClick={() => {
                openModal();
                setClickImageIndex(index);
              }}
            >
              <Image
                className="aspect-[2/1] mb-2 bg-gray-300 object-cover w-full"
                src={film.thumbnailImageUrl}
                alt="film thumbnail"
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtworkPage;
