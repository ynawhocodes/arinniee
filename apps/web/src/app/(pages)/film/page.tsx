"use client";

import Image from "next/image";
import TempUploader from "../../(components)/common/TempUploader";
import useFilm from "../../_hooks/use-film";
import ImageModal from "../../(components)/ImageModal";
import { useState } from "react";

const FilmPage = () => {
  const { films } = useFilm();
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
        {films && (
          <img src={films[Number(clickImageIndex)]?.thumbnailImageUrl} />
        )}
      </ImageModal>
      <div className="flex items-center justify-center py-[120px]">
        <img src="/images/film_title.png" alt="film" />
      </div>
      <div className="flex justify-center">
        <div className="px-4 py-2.5 grid grid-cols-3 gap-2.5 w-full max-w-[600px]">
          {films?.map((film, index) => (
            <div
              key={film.id}
              onClick={() => {
                openModal();
                setClickImageIndex(index);
              }}
            >
              <Image
                className="aspect-[1/1] bg-gray-300"
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

export default FilmPage;
