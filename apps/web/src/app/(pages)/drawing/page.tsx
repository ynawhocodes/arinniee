"use client";

import Image from "next/image";
import TempUploader from "../../(components)/common/TempUploader";
import ImageModal from "../../(components)/ImageModal";
import { useState } from "react";
import useDrawing from "../../_hooks/use-drawing";

const DrawingPage = () => {
  const { drawings } = useDrawing();
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
        {drawings && <img src={drawings[Number(clickImageIndex)]?.thumbnailImageUrl}/>}
      </ImageModal>
      <div className="flex items-center justify-center py-[120px]">
        <img className="w-[140px]" src="/images/drawing_title_3x.png" alt="drawing" />
      </div>
      <div className="flex justify-center">
        <div className="px-4 py-2.5 grid grid-cols-3 gap-2.5 w-full max-w-[600px]">
          {drawings?.map((drawing, index) => (
            <div key={drawing.id} onClick={() => {openModal(); setClickImageIndex(index);}}>
              <Image
                className="aspect-[1/1] bg-gray-300"
                src={drawing.thumbnailImageUrl}
                alt="drawing thumbnail"
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

export default DrawingPage;
