const FilmPage = () => {
  return (
    <>
      <div className="flex items-center justify-center py-[120px]">
        <img src="/images/film_title.png" alt="film" />
      </div>
      <div className="flex justify-center">
        <div className="px-4 py-2.5 grid grid-cols-3 gap-2.5 lg:w-3/4 w-full">
          <div className="aspect-[1/1] bg-gray-300"></div>
          <div className="aspect-[1/1] bg-gray-300"></div>
          <div className="aspect-[1/1] bg-gray-300"></div>
          <div className="aspect-[1/1] bg-gray-300"></div>
          <div className="aspect-[1/1] bg-gray-300"></div>
        </div>
      </div>
    </>
  );
};

export default FilmPage;
