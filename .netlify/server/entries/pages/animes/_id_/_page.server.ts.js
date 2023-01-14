import { d as db } from "../../../../chunks/database.js";
let animeId;
let userId;
const load = async ({ locals, params }) => {
  if (locals.user) {
    animeId = params.id;
    userId = locals.user.id;
    const exist = !!await db.list.findUnique({
      where: {
        userId_animeId: { userId, animeId }
      }
    });
    return {
      post: { exist }
    };
  }
};
const addList = async () => {
  await db.list.create({
    data: {
      user: { connect: { id: userId } },
      animeId,
      typeList: { connect: { name: "COMMON" } }
    }
  });
};
const delList = async () => {
  await db.list.delete({
    where: {
      userId_animeId: { userId, animeId }
    }
  });
};
const actions = { addList, delList };
export {
  actions,
  load
};
