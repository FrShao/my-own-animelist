import { uploadImage } from "$lib/cloudinary";
import { db } from '$lib/database'
import { redirect } from "@sveltejs/kit";
import type { Action, Actions } from "../$types";

const upload: Action = async ({ request }) => {
  const data = await request.formData()
  const image = data.get('image')
  const imageData = await uploadImage(image);
  const imageUrl = `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/upload/v${imageData.version.toString()}/${imageData.public_id}.${imageData.format}`;
  await db.profilePicture.create({
    data: {
      publicId: imageData.public_id,
      url: imageUrl,
      format: imageData.format,
      version: imageData.version.toString(),
    },
  });
  throw redirect(302, '/');
}
export const actions: Actions = { upload }