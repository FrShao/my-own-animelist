import { r as redirect } from "../../../../chunks/index2.js";
const load = async () => {
  throw redirect(302, "/");
};
const actions = {
  default({ cookies }) {
    cookies.set("session", "", {
      path: "/",
      expires: new Date(0)
    });
    throw redirect(302, "/login");
  }
};
export {
  actions,
  load
};
