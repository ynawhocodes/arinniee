"use client";

import { useState } from "react";
import ImageModal from "../../(components)/ImageModal";
import useCompcard from "../../_hooks/use-compcard";
import Image from "next/image";
import TempUploader from "../../(components)/common/TempUploader";
import { postOrderNumCompard } from "../../_api/compcard/postOrderNumCompard";
import { deleteCompcard } from "../../_api/compcard/deleteCompard";

const CompcardPage = () => {
  const { compcards } = useCompcard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickImageIndex, setClickImageIndex] = useState(0);
  const [isCancleMode, setIsCancleMode] = useState(false);
  const [isOrderMode, setIsOrderMode] = useState(false);
  const [orderNum, setOrderNum] = useState(0);

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
          <img src={compcards[Number(clickImageIndex)]?.imageUrl || ""} />
        )}
      </ImageModal>
      <div className="flex items-center justify-center py-[120px]">
        <div>
          <img
            className="w-[170px] mb-[10px]"
            src="/images/compcard_title_3x.png"
            alt="compcard"
          />
          <div className="flex justify-center">
            <a href="https://www.instagram.com/arinniee/">
              <img
                className="p-1 w-[28px]"
                src="/images/insta_icon_3x.png"
                alt="insta"
              />
            </a>
            <a href="mailto:arinniee@naver.com">
              <img
                className="p-1 w-[28px]"
                src="/images/mail_icon_3x.png"
                alt="mail"
              />
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

      {/* ----------어드민---------- */}
      <div className="flex items-end justify-center py-4 my-4 border-[2px] border-[black]">
        <TempUploader folder="compcard" />
        <button
          className="bg-[#EEE] px-4 py-1 rounded-md shadow-lg w-[175px] ml-2"
          onClick={() => setIsCancleMode(!isCancleMode)}
        >
          게시글 삭제 모드
          <span
            className={`font-bold ml-1 ${
              isCancleMode ? `text-red-500` : `text-green-500`
            }`}
          >
            {isCancleMode ? "OFF" : "ON"}
          </span>
        </button>
        <button
          className="bg-[#EEE] px-4 py-1 rounded-md shadow-lg w-[175px] ml-2"
          onClick={() => setIsOrderMode(!isOrderMode)}
        >
          순서 재배치 모드
          <span
            className={`font-bold ml-1 ${
              isOrderMode ? `text-red-500` : `text-green-500`
            }`}
          >
            {isOrderMode ? "OFF" : "ON"}
          </span>
        </button>
      </div>
      {/* ----------어드민---------- */}
      <div className="flex justify-center">
        <div className="px-4 py-2.5 grid grid-cols-3 gap-2.5 w-full max-w-[600px]">
          {compcards &&
            compcards?.map((compcard, index) => (
              <div key={compcard.id} className="relative">
                {isOrderMode && (
                  <div className="absolute top-2 left-2">
                    <input
                      className="w-10"
                      type="number"
                      value={compcard.orderNum}
                      onChange={(e) => setOrderNum(Number(e.target.value))}
                    ></input>
                    <button
                      className="w-10 bg-white/50 hover:bg-black/50 hover:text-white"
                      onClick={() =>
                        postOrderNumCompard(Number(compcard.id), orderNum)
                      }
                    >
                      완료
                    </button>
                  </div>
                )}
                {isCancleMode && (
                  <div
                    className="cursor-pointer absolute top-[-10px] left-[-10px] flex items-center justify-center w-6 bg-gray-400 rounded-full aspect-square z-10"
                    onClick={async () => {
                      console.log(compcard.id);
                      const isConfirmed = window.confirm("지우는 거 맞지요~?");
                      if (isConfirmed) {
                        await deleteCompcard(compcard.id);
                      } else {
                        setIsCancleMode(false);
                      }
                    }}
                  >
                    <p className="text-white">X</p>
                  </div>
                )}
                <Image
                  className={`aspect-[1/1] bg-gray-300 object-cover ${
                    isCancleMode ? `animate-wiggle rounded-2xl` : ``
                  }`}
                  onClick={() => {
                    openModal();
                    setClickImageIndex(index);
                  }}
                  src={compcard.thumbnailImageUrl || ""}
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
