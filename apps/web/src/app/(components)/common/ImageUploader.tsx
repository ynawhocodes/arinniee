"use client";

import { memo, useEffect } from "react";
import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { toCompressImage } from "../../_utils/toCompressImage";
import { postFilmImage } from "../../_api/storage/postFilmImage";

interface IsProfileImageUploader {
  defaultImageUrl: string;
  setImageFile: (file: File | null) => void;
}

const ImageUploader = ({
  defaultImageUrl,
  setImageFile,
}: IsProfileImageUploader) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [attachment, setAttachment] = useState<string | ArrayBuffer | null>();

  useEffect(() => {
    if (defaultImageUrl) {
      setAttachment(defaultImageUrl);
    }
  }, [defaultImageUrl]);

  const onUploadImage = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const { files, value } = event.target;
      console.log(files, value);
      if (!files) {
        return;
      }

      const file = files[0];

      if (file.size > 4 * 1024 * 1024) {
        alert("파일의 크기가 4mb를 초과했습니다");
        return;
      }

      const theFile = await toCompressImage(file);
      console.log(theFile);

      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        setAttachment(result);
      };
      reader.readAsDataURL(theFile);

      await setImageFile(theFile);
    },
    [setImageFile]
  );

  const onClearAttachment = () => {
    setImageFile(null);
    setAttachment(null);
    if (!inputRef.current) return;
    inputRef.current.value = "";
  };

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) return;
    inputRef.current.click();
  }, []);



  return (
      <div className="relative">
        <div className="bg-white" onClick={onUploadImageButtonClick}>
          <input
            className="hidden"
            type="file"
            ref={inputRef}
            accept="image/*"
            onChange={onUploadImage}
          />
          <div>
            <div className="w-[80px] h-[80px] bg-grey rounded-full relative cursor-pointer">
              <div className="absolute bottom-[-6px] right-[-9px]">
                {!attachment && <p>HERE</p>}
              </div>
            </div>
          </div>
        </div>
        {attachment && (
          <Image
            className="object-cover rounded-full absolute-full"
            onClick={onClearAttachment}
            src={typeof attachment === "string" ? attachment : ""}
            alt="Preview Image"
            width={140}
            height={140}
            priority={true}
          />
        )}
      </div>
  );
};

export default memo(ImageUploader);
