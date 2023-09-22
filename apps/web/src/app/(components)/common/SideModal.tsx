import useNavigation from "../../_hooks/use-navigation";

const SideModal = ({ isOpen, toggleModal }) => {
  const { onLink } = useNavigation();
  
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
          <button onClick={toggleModal}>
            <img className="w-[15px] mb-[20px]" src="/images/close_3x.png" alt="close" />
          </button>
          <button
            className="mt-7 py-2"
            onClick={() => {
              onLink("/compcard");
              toggleModal();
            }}
          >
            <img className="w-[72px]" src="/images/compcard_3x.png" alt="compcard" />
          </button>
          <button
            className="py-2"
            onClick={() => {
              onLink("/artwork");
              toggleModal();
            }}
          >
            <img className="w-[55px]" src="/images/artwork_3x.png" alt="artwork" />
          </button>
          <button
            className="py-2"
            onClick={() => {
              onLink("/film");
              toggleModal();
            }}
          >
            <img className="w-[33px]" src="/images/film_3x.png" alt="film" />
          </button>
          <button
            className="py-2"
            onClick={() => {
              onLink("/drawing");
              toggleModal();
            }}
          >
            <img className="w-[55px]" src="/images/drawing_3x.png" alt="drawing" />
          </button>
          <button
            className="mb-7 py-2"
            onClick={() => {
              onLink("/shop");
              toggleModal();
            }}
          >
            <img className="w-[34px]" src="/images/shop_3x.png" alt="shop" />
          </button>
          <button
            onClick={() => {
              onLink("/");
              toggleModal();
            }}
          >
            <img className="w-[45px] mt-[20px]" src="/images/home_3x.png" alt="home" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideModal;
