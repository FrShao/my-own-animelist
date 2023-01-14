import { r as redirect } from "../../../../chunks/index2.js";
const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(302, "/");
  } else if (locals.user.role == "USER") {
    throw redirect(302, "/");
  }
};
export {
  load
};
