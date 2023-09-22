"use client";

import { useState } from "react";
import SideModal from "./SideModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-50 h-10 p-4">
      <button onClick={toggleModal}>
        <img className="w-[20px]" src="/images/bar_3x.png" alt="bar" />
      </button>
      <SideModal isOpen={isOpen} toggleModal={toggleModal} />
    </nav>
  );
};

export default Header;
