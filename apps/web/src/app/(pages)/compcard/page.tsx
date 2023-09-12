import ImageSlider from "../../(components)/ImageSlider";
import useCompcard from "../../_hooks/use-compcard";

const CompcardPage = () => {
  const { compcards } = useCompcard();
  
  return (
    <>
      <div className="flex items-center justify-center py-[120px]">
        <div>
          <img src="/images/compcard_title.png" alt="compcard" />
          <div className="flex justify-center">
            <a href="">
              <img className="p-1" src="/images/insta_icon.png" alt="insta" />
            </a>
            <a href="">
              <img className="p-1" src="/images/mail_icon.png" alt="mail" />
            </a>
            <a href="">
              <img
                className="p-1"
                src="/images/youtube_icon.png"
                alt="youtube"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <img src="/images/comingsoon.png" alt="comingsoon" />
      </div>
      <div className="flex justify-center">
        <div className="px-4 py-2.5 lg:w-3/4 w-full">
          
        </div>
      </div>
    </>
  );
};

export default CompcardPage;
