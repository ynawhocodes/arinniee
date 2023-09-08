"use client";

import useNavigation from "../../_hooks/use-navigation";
import useShop from "../../_hooks/use-shop";

const ShopPage = () => {
  const { onLink } = useNavigation();
  const { shops } = useShop();

  return (
    <>
      <div className="flex items-center justify-center py-[120px]">
        <img src="/images/shop_title.png" alt="compcard" />
      </div>
      <div className="flex justify-center">
        <div className="px-4 py-2.5 grid grid-cols-2 gap-2.5 lg:w-1/2 w-full">
          <div className="aspect-[2/3] flex items-center justify-center">
            <img src="/images/comingsoon.png" alt="comingsoon" />
          </div>
          {shops?.map((shop) => (
            <div
              className="relative group"
              key={shop.id}
              onClick={() => onLink(`/shop/${shop.id}`)}
            >
              <img
                className="aspect-[2/3] bg-gray-300 group-hover:blur-sm"
                src={shop.thumbnailImageUrl}
              />
              {shop.isSoldout && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <p className="text-white title-sm">SOLD OUT</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopPage;
