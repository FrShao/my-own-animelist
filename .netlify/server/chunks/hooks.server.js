import { d as db } from "./database.js";
const handle = async ({ event, resolve }) => {
  const session = event.cookies.get("session");
  if (!session) {
    return await resolve(event);
  }
  const user = await db.user.findUnique({
    where: { userAuthToken: session },
    select: { id: true, username: true, role: true }
  });
  if (user) {
    event.locals.user = {
      id: user.id,
      name: user.username,
      role: user.role.name
    };
  }
  return await resolve(event);
};
export {
  handle
};
