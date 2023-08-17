"use client";

import { useState } from "react";
import SideModal from "./SideModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 h-10 p-4">
      <button onClick={toggleModal}>
        <img src="/images/bar.png" alt="bar" />
      </button>
      <SideModal isOpen={isOpen} toggleModal={toggleModal} />
    </nav>
  );
};

export default Header;
