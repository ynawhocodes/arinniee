"use client";

import useProduct from "../../../_hooks/use-product";

const ShopDetailPage = ({ params }: { params: { id: number } }) => {
  const { product } = useProduct(params.id);
  return (
    <>
      <div className="flex justify-center">
        <div className="py-[120px] lg:w-1/2 w-3/4">
          {product && <img src={product[0]?.thumbnailImageUrl} alt="product" />}
        </div>
        </div>
        <div className="flex justify-center">
          <div className="px-4 py-2.5 lg:w-1/2 w-full">
            {product && <img src={product[0]?.imageUrl} alt="product_detail" />}
          </div>
        </div>
    </>
  );
};

export default ShopDetailPage;
