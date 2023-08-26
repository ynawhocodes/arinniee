const ShopPage = () => {
  return (
    <>
      <div className="flex items-center justify-center py-[120px]">
        <img src="/images/shop_title.png" alt="compcard" />
      </div>
      <div className="flex justify-center">
        <div className="px-4 py-2.5 grid grid-cols-2 gap-2.5 lg:w-3/4 w-full">
          <div className="aspect-[2/3] bg-gray-300"></div>
          <div className="aspect-[2/3] flex items-center justify-center">
            <img src="/images/comingsoon.png" alt="comingsoon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
