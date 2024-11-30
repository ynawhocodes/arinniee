"use client";

import { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ImageModal from "../../(components)/ImageModal";
import useCompcardPagination from "../../_hooks/use-compcard"
import Image from "next/image";

const CompcardPage = () => {
  const [page, setPage] = useState(1);
  const { compcards } = useCompcardPagination(page);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickImageIndex, setClickImageIndex] = useState(0);
  const [isCancleMode, setIsCancleMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleImageLoad = () => setIsLoaded(true);
  const handleImageClick = (index: number) => {
    handleModalOpen();
    setClickImageIndex(index);
  };

  useEffect(() => {
    if (isInView) {
      setPage(prev => prev + 1);
    }
  }, [isInView]);

  const renderSocialLinks = () => (
    <div className="flex justify-center">
      <SocialLink href="https://www.instagram.com/arinniee/" icon="/images/insta_icon_3x.png" alt="insta" width="28px" />
      <SocialLink href="mailto:arinniee@naver.com" icon="/images/mail_icon_3x.png" alt="mail" width="28px" />
      <SocialLink href="https://www.youtube.com/channel/UCecNefrimxKGErQOzZ6LhmA" icon="/images/youtube_icon_3x.png" alt="youtube" width="24px" />
    </div>
  );

  const renderHeader = () => (
    <div className="flex items-center justify-center py-[120px]">
      <div>
        <img
          className="w-[170px] mb-[10px]"
          src="/images/compcard_title_3x.png"
          alt="compcard"
        />
        {renderSocialLinks()}
      </div>
    </div>
  );

  const renderImageGrid = () => (
    <div className="flex justify-center">
      <div className="px-4 py-2.5 grid grid-cols-3 gap-1 md:gap-2.5 w-full max-w-[600px]">
        {compcards?.map((compcard, index) => (
          <div key={compcard.id} className="relative">
            <Image
              className={`aspect-[1/1] bg-gray-300 object-cover transition-opacity duration-200 ${
                isCancleMode ? 'rounded-2xl animate-wiggle' : ''} ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => handleImageClick(index)}
              src={compcard.thumbnailImageUrl}
              alt="film thumbnail"
              width={300}
              height={300}
              loading="lazy"
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
        src={compcards && clickImageIndex !== null ? compcards[Number(clickImageIndex)]?.imageUrl : ''}
      />

      {renderHeader()}
      {renderImageGrid()}
      <div ref={ref} />
    </>
  );
};

const SocialLink = ({ href, icon, alt, width }: { href: string; icon: string; alt: string; width: string }) => (
  <a href={href}>
    <img className={`p-1`} src={icon} alt={alt} style={{ width: width }} />
  </a>
);

export default CompcardPage;