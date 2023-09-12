"use client";

import { useState } from "react";
import ImageUploader from "./ImageUploader";
import { getPublicImageUrl } from "../../_api/storage/getPublicImageUrl";
import { postImageToBucket } from "../../_api/storage/postImageToBucket";
import { postImage } from "../../_api/storage/postImage";

const TempUploader = ({ folder }: { folder: string }) => {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [image, setImage] = useState(null);
  const onSubmit = () => {
    if (!image) return;

    const upload = async () => {
      const thumbnailPath = await postImageToBucket(
        thumbnail,
        folder,
        true,
        name
      );
      const imagePath = await postImageToBucket(
        image,
        folder,
        false,
        name
      );

      const { data: thumbnailUrl } = await getPublicImageUrl(thumbnailPath);
      const { data: imageUrl } = await getPublicImageUrl(imagePath);

      postImage(folder, {
        thumbnailImageUrl: thumbnailUrl.publicUrl,
        imageUrl: imageUrl.publicUrl,
        description: "",
      });
    };

    upload();
  };

  return (
    <>
      <div>
        <ImageUploader
          defaultImageUrl=""
          setThumbnail={setThumbnail}
          setImage={setImage}
        />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="file name"
        />
        <button onClick={() => onSubmit()}>upload</button>
      </div>
    </>
  );
};
export default TempUploader;
