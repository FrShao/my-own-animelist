import { v2 } from "cloudinary";
v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
async function uploadImage(file) {
  const buffer = Buffer.from(await file.arrayBuffer());
  return new Promise((resolve, reject) => {
    v2.uploader.upload_stream(
      { resource_type: "image", folder: process.env.CLOUD_FOLDER },
      async function(error, result) {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    ).end(buffer);
  });
}
export {
  uploadImage as u
};
