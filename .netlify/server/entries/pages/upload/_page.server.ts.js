import { u as uploadImage } from "../../../chunks/cloudinary.js";
import { d as db } from "../../../chunks/database.js";
import { r as redirect } from "../../../chunks/index2.js";
const upload = async ({ request }) => {
  const data = await request.formData();
  const image = data.get("image");
  const imageData = await uploadImage(image);
  const imageUrl = `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/upload/v${imageData.version.toString()}/${imageData.public_id}.${imageData.format}`;
  await db.profilePicture.create({
    data: {
      publicId: imageData.public_id,
      url: imageUrl,
      format: imageData.format,
      version: imageData.version.toString()
    }
  });
  throw redirect(302, "/");
};
const actions = { upload };
export {
  actions
};
