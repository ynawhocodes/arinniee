"use client";

import { useState } from "react";
import ImageModal from "@/components/ImageModal";
import { CompcardQueryResult } from "@sanity/types/sanity.types";
import { SanityImage } from "@/components/SanityImage";
import { urlForRatio } from "@sanity/lib/image";

interface CompcardPageProps {
  compcard: CompcardQueryResult;
}

export default function Compcard({ compcard }: CompcardPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickImageIndex, setClickImageIndex] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderSocialLinks = () => (
    <div className="flex justify-center">
      <SocialLink
        href="https://www.instagram.com/arinniee/"
        icon="/images/insta_icon_3x.png"
        alt="insta"
        width="28px"
      />
      <SocialLink
        href="mailto:arinniee@naver.com"
        icon="/images/mail_icon_3x.png"
        alt="mail"
        width="28px"
      />
      <SocialLink
        href="https://www.youtube.com/channel/UCecNefrimxKGErQOzZ6LhmA"
        icon="/images/youtube_icon_3x.png"
        alt="youtube"
        width="24px"
      />
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
        {compcard?.images?.map((compcard, index) => (
          <div
            key={compcard.image?._ref}
            className="cursor-pointer"
            onClick={() => {
              openModal();
              setClickImageIndex(index);
            }}
          >
            <SanityImage
              className={`aspect-[1/1] bg-gray-300 object-cover transition-opacity duration-200`}
              image={{ ref: compcard.image?._ref, metadata: compcard.metadata }}
              alt="film thumbnail"
              size={400}
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
        onClose={closeModal}
        src={
          urlForRatio(
            compcard?.images?.[Number(clickImageIndex)]?.image?._ref || "",
            800
          ) || ""
        }
      />

      {renderHeader()}
      {renderImageGrid()}
    </>
  );
}

const SocialLink = ({
  href,
  icon,
  alt,
  width,
}: {
  href: string;
  icon: string;
  alt: string;
  width: string;
}) => (
  <a href={href}>
    <img className={`p-1`} src={icon} alt={alt} style={{ width: width }} />
  </a>
);
