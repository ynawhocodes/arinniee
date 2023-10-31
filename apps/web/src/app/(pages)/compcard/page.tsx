"use client";

import { useState } from "react";
import ImageModal from "../../(components)/ImageModal";
import ImageSlider from "../../(components)/ImageSlider";
import useCompcard from "../../_hooks/use-compcard";
import Image from "next/image";
import TempUploader from "../../(components)/common/TempUploader";
import { deleteCompcard } from "../../_api/compcard/deleteCompard";

const CompcardPage = () => {
  const { compcards } = useCompcard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickImageIndex, setClickImageIndex] = useState(0);
  const [isCancleMode, setIsCancleMode] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ImageModal isOpen={isModalOpen} onClose={closeModal}>
        {compcards && (
          <img src={compcards[Number(clickImageIndex)]?.imageUrl} />
        )}
      </ImageModal>
      <div className="flex items-center justify-center py-[120px]">
        <div>
          <img className="w-[170px] mb-[10px]" src="/images/compcard_title_3x.png" alt="compcard" />
          <div className="flex justify-center">
            <a href="https://www.instagram.com/arinniee/">
              <img className="p-1 w-[28px]" src="/images/insta_icon_3x.png" alt="insta" />
            </a>
            <a href="mailto:arinniee@naver.com">
              <img className="p-1 w-[28px]" src="/images/mail_icon_3x.png" alt="mail" />
            </a>
            <a href="https://www.youtube.com/channel/UCecNefrimxKGErQOzZ6LhmA">
              <img
                className="p-1 w-[24px]"
                src="/images/youtube_icon_3x.png"
                alt="youtube"
              />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center ">
        <img src="/images/comingsoon.png" alt="comingsoon" />
      </div> */}

      {/* 어드민 */}
      {/* <TempUploader folder="compcard" /> */}
      {/* <button onClick={() => setIsCancleMode(!isCancleMode)}>
        게시글 삭제 모드 {isCancleMode ? 'OFF' : 'ON'}
      </button> */}
      <div className="flex justify-center">
        <div className="px-4 py-2.5 grid grid-cols-3 gap-2.5 w-full max-w-[600px]">
          {compcards?.map((compcard, index) => (
            <div key={compcard.id} className="relative">
              {isCancleMode && (
                <div
                  className="absolute top-[-10px] left-[-10px] flex items-center justify-center w-6 bg-gray-400 rounded-full aspect-square z-10"
                  onClick={async () => {
                    console.log(compcard.id);
                    // await deleteCompcard(compcard.id);
                  }}
                >
                  <p className="text-white">X</p>
                </div>
              )}
              <Image
                className={`aspect-[1/1] bg-gray-300 object-cover ${
                  isCancleMode ? `animate-wiggle` : ``
                }`}
                onClick={() => {
                  openModal();
                  setClickImageIndex(index);
                }}
                src={compcard.thumbnailImageUrl}
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

export default CompcardPage;
