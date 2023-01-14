import { r as redirect, i as invalid } from "../../../../chunks/index2.js";
import bcrypt from "bcrypt";
import { d as db } from "../../../../chunks/database.js";
const load = async ({ locals }) => {
  if (locals.user) {
    throw redirect(302, "/");
  }
};
const login = async ({ cookies, request }) => {
  const data = await request.formData();
  const username = data.get("username");
  const password = data.get("password");
  if (typeof username !== "string" || typeof password !== "string" || !username || !password) {
    return invalid(400, { invalid: true });
  }
  const user = await db.user.findUnique({ where: { username } });
  if (!user) {
    return invalid(400, { credentials: true });
  }
  const userPassword = await bcrypt.compare(password, user.passwordHash);
  if (!userPassword) {
    return invalid(400, { credentials: true });
  }
  const authenticatedUser = await db.user.update({
    where: { username: user.username },
    data: { userAuthToken: crypto.randomUUID() }
  });
  cookies.set("session", authenticatedUser.userAuthToken, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30
  });
  throw redirect(302, "/");
};
const actions = { login };
export {
  actions,
  load
};
