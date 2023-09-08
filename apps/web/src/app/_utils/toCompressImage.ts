import imageCompression from "browser-image-compression";

const toCompressImage = async (file: File) => {
  const options = {
    maxSizeMB: 2,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  const newFile = await imageCompression(file, options);
  const result = new File([newFile], file.name.split(".")[0] + ".webp", {
    type: "image/webp",
    lastModified: new Date().getTime(),
  });

  return result;
};

export { toCompressImage };
