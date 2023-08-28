const ArtworkPage = () => {
  return (
    <>
      <div className="flex items-center justify-center py-[120px]">
        <img src="/images/artwork_title.png" alt="artwork" />
      </div>
      <div className="flex justify-center">
        <div className="px-4 py-2.5 lg:w-3/4 w-full">
          <div className="aspect-[2.5/1] mb-2 bg-gray-300"></div>
          <div className="aspect-[2.5/1] mb-2 bg-gray-300"></div>
          <div className="aspect-[2.5/1] mb-2 bg-gray-300"></div>
        </div>
      </div>
    </>
  );
};

export default ArtworkPage;
