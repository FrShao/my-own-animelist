import { r as redirect, i as invalid } from "../../../../chunks/index2.js";
import bcrypt from "bcrypt";
import { d as db } from "../../../../chunks/database.js";
const load = async ({ locals }) => {
  if (locals.user) {
    throw redirect(302, "/");
  }
};
const register = async ({ request }) => {
  const data = await request.formData();
  const username = data.get("username");
  const password = data.get("password");
  if (typeof username !== "string" || typeof password !== "string" || !username || !password) {
    return invalid(400, { invalid: true });
  }
  const user = await db.user.findUnique({
    where: { username }
  });
  if (user) {
    return invalid(400, { user: true });
  }
  await db.user.create({
    data: {
      username,
      passwordHash: await bcrypt.hash(password, 10),
      userAuthToken: crypto.randomUUID(),
      role: { connect: { name: "USER" } },
      profilePicture: { connect: { publicId: `${process.env.CLOUD_FOLDER}/default` } }
    }
  });
  throw redirect(303, "/login");
};
const actions = { register };
export {
  actions,
  load
};
