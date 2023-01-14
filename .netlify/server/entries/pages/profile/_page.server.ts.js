import { r as redirect, i as invalid } from "../../../chunks/index2.js";
import bcrypt from "bcrypt";
import { d as db } from "../../../chunks/database.js";
const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(302, "/");
  }
};
const editUser = async ({ request, locals }) => {
  const data = await request.formData();
  const username = data.get("username");
  let password = await bcrypt.hash(data.get("password"), 10);
  if (password == " ") {
    password = await db.user.findUnique({
      where: {
        username: locals.user.name
      }
    }).passwordHash;
  }
  if (typeof username !== "string" || typeof password !== "string" || !username || !password) {
    return invalid(400, { invalid: true });
  }
  const user = await db.user.findUnique({
    where: { username }
  });
  if (user) {
    return invalid(400, { user: true });
  }
  await db.user.update({
    where: {
      username: locals.user.name
    },
    data: {
      username,
      passwordHash: password
    }
  });
  throw redirect(303, "/login");
};
const uploadFile = async ({ request, locals }) => {
};
const actions = { editUser, uploadFile };
export {
  actions,
  load
};
