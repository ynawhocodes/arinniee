"use client";

import { useState } from "react";
import ImageUploader from "./ImageUploader";
import { getPublicImageUrl } from "../../_api/storage/getPublicImageUrl";
import { postImageToBucket } from "../../_api/storage/postImageToBucket";
import { postImage } from "../../_api/storage/postImage";

const TempUploader = ({ folder }: { folder: string }) => {
  const [name, setName] = useState("");
  const [thumbnails, setThumbnails] = useState(null);
  const [images, setImages] = useState(null);
  const onSubmit = () => {
    if (!images) return;

    const result = [];

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const thumbnail = thumbnails[i];
      result.push({ image, thumbnail });
    }

    const upload = async () => {
      for (const item of result) {
        const thumbnailPath = await postImageToBucket(
          item.thumbnail,
          folder,
          true,
          `${name}_${item.thumbnail.name}`
        );
        const imagePath = await postImageToBucket(
          item.image,
          folder,
          false,
          `${name}_${item.image.name}`
        );
  
        const { data: thumbnailUrl } = await getPublicImageUrl(thumbnailPath);
        const { data: imageUrl } = await getPublicImageUrl(imagePath);
  
        postImage(folder, {
          thumbnailImageUrl: thumbnailUrl.publicUrl,
          imageUrl: imageUrl.publicUrl,
          description: "",
        });
      }
    };

    upload();
  };

  return (
    <>
      <div>
        <ImageUploader
          defaultImageUrl=""
          setThumbnail={setThumbnails}
          setImage={setImages}
        />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="날짜입력하기(해시값)"
        />
        <button onClick={() => onSubmit()}>업로드</button>
      </div>
    </>
  );
};
export default TempUploader;
