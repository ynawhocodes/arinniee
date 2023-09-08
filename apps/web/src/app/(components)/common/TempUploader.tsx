"use client";

import { useState } from "react";
import { postFilmImage } from "../../_api/storage/postFilmImage";
import { postFilm } from "../../_api/film/postFilm";
import ImageUploader from "./ImageUploader";
import { getPublicImageUrl } from "../../_api/storage/getPublicImageUrl";

const TempUploader = ({ folder }: { folder: string }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const onSubmit = () => {
    if (!image) return;

    postFilmImage(image, folder, name).then(async (path) => {
      const { data } = await getPublicImageUrl(path);
      postFilm({
        thumbnailImageUrl: data.publicUrl,
        imageUrl: data.publicUrl,
        description: "",
      });
    });
  };

  return (
    <>
      <div>
        <ImageUploader defaultImageUrl="" setImageFile={setImage} />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="name"
        />
        <button onClick={() => onSubmit()}>upload</button>
      </div>
    </>
  );
};
export default TempUploader;
