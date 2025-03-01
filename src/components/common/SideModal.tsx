"use client";

import Link from "next/link";

interface SideModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const SideModal = ({ isOpen, toggleModal }: SideModalProps) => {
  return (
    <div>
      {isOpen && (
        <>
          <div
            onClick={toggleModal}
            className="fixed inset-0 transition-opacity duration-300 pointer-events-auto blur-background"
          />
          <div className="fixed inset-0 pointer-events-none backdrop-blur-sm" />
        </>
      )}

      <div
        className={`fixed inset-y-0 left-0 w-[48%] bg-white shadow-lg transform transition-transform duration-300 p-5 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="grid">
          <button type="button" onClick={toggleModal} aria-label="닫기">
            <img
              className="w-[15px] mb-[20px]"
              src="/images/close_3x.png"
              alt="close"
            />
          </button>
          <Link
            href="/compcard"
            className="mt-7 py-2 block"
            onClick={toggleModal}
            prefetch
          >
            <img
              className="w-[72px]"
              src="/images/compcard_3x.png"
              alt="compcard"
            />
          </Link>
          <Link
            href="/artwork"
            className="py-2 block"
            onClick={toggleModal}
            prefetch
          >
            <img
              className="w-[55px]"
              src="/images/artwork_3x.png"
              alt="artwork"
            />
          </Link>
          <Link href="/film" className="py-2 block" onClick={toggleModal}>
            <img className="w-[33px]" src="/images/film_3x.png" alt="film" />
          </Link>
          <Link
            href="/drawing"
            className="py-2 block"
            onClick={toggleModal}
            prefetch
          >
            <img
              className="w-[55px]"
              src="/images/drawing_3x.png"
              alt="drawing"
            />
          </Link>
          <Link
            href="/shop"
            className="mb-7 py-2 block"
            onClick={toggleModal}
            prefetch
          >
            <img className="w-[34px]" src="/images/shop_3x.png" alt="shop" />
          </Link>
          <Link href="/" onClick={toggleModal} prefetch>
            <img
              className="w-[45px] mt-[20px]"
              src="/images/home_3x.png"
              alt="home"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideModal;
