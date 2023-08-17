const SideModal = ({ isOpen, toggleModal }) => {
  return (
    <div>
      {isOpen && (
        <>
          <div
            onClick={toggleModal}
            className="fixed inset-0 blur-background pointer-events-auto transition-opacity duration-300"
          />
          <div className="fixed inset-0 backdrop-blur-sm pointer-events-none" />
        </>
      )}

      <div
        className={`fixed inset-y-0 left-0 w-1/3 bg-white shadow-lg transform transition-transform duration-300 p-5 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="grid gap-3">
          <button onClick={toggleModal}>
            <img src="/images/close.png" alt="close" />
          </button>
          <button className="mt-7">
            <img src="/images/artwork.png" alt="artwork" />
          </button>
          <button>
            <img src="/images/film.png" alt="film" />
          </button>
          <button>
            <img src="/images/drawing.png" alt="drawing" />
          </button>
          <button className="mb-7">
            <img src="/images/shop.png" alt="shop" />
          </button>
          <button>
            <img src="/images/home.png" alt="home" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideModal;
