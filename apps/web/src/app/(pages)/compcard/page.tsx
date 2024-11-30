"use client";

import { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ImageModal from "../../(components)/ImageModal";
import { useCompcard, useCompcardPagination } from "../../_hooks/use-compcard"
import Image from "next/image";

const CompcardPage = () => {
  const [page, setPage] = useState(1);
  const [allCompcards, setAllCompcards] = useState([]);
  // const { compcards } = useCompcardPagination(page);
  const { compcards } = useCompcard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickImageIndex, setClickImageIndex] = useState(0);
  const [isCancleMode, setIsCancleMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
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
    if (compcards) {
      if (compcards.length === 0) {
        setHasMore(false);
        return;
      }
      
      // 중복 제거를 위해 Set 사용
      const uniqueCompcards = [...new Set([...allCompcards, ...compcards].map(card => JSON.stringify(card)))].map(str => JSON.parse(str));
      setAllCompcards(uniqueCompcards);
      setIsLoading(false);
    }
  }, [compcards]);

  useEffect(() => {
    if (isInView && !isLoading && hasMore) {
      setIsLoading(true);
      setTimeout(() => {
        setPage(prev => prev + 1);
      }, 1000);
    }
  }, [isInView, isLoading, hasMore]);

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
      <div className="px-4 py-2.5 grid grid-cols-3 gap-1 md:gap-2.5 w-full max-w-[600px] min-h-screen">
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
        src={allCompcards && clickImageIndex !== null ? allCompcards[Number(clickImageIndex)]?.imageUrl : ''}
      />

      {renderHeader()}
      {renderImageGrid()}
      <div ref={ref} className="h-[10px]" />
    </>
  );
};

const SocialLink = ({ href, icon, alt, width }: { href: string; icon: string; alt: string; width: string }) => (
  <a href={href}>
    <img className={`p-1`} src={icon} alt={alt} style={{ width: width }} />
  </a>
);

export default CompcardPage;