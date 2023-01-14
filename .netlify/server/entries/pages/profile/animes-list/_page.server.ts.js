import { d as db } from "../../../../chunks/database.js";
import { r as redirect } from "../../../../chunks/index2.js";
async function getInfos(dynamicPart, delay = 0) {
  const res = await fetch(`https://api.jikan.moe/v4/${dynamicPart}`);
  if (!res.ok || res.status === 404)
    return [];
  let json = await res.json();
  await wait(delay);
  return json.data;
}
async function getMultipleInfos(dynamicParts) {
  let multipleInfos = [];
  for (let dynamicPart in dynamicParts) {
    multipleInfos.push(getInfos(dynamicPart, 334));
  }
}
function wait(microsecondTime) {
  return new Promise((resolve) => setTimeout(resolve, microsecondTime));
}
const load = async ({ locals }) => {
  if (locals.user) {
    const animesIds = await db.list.findMany({
      where: {
        userId: locals.user.id
      },
      select: {
        animeId: true
      }
    });
    let animes = getMultipleInfos(animesIds.map((animeId) => `anime/${animeId}`));
    return {
      post: { animes }
    };
  } else {
    throw redirect(302, "/");
  }
};
const delList = async ({ locals, request }) => {
  let userid = locals.user.id;
  const data = await request.formData();
  const animeId = data.get("anime-id");
  await db.list.delete({
    where: {
      userId_animeId: { userId: userid, animeId }
    }
  });
};
const actions = { delList };
export {
  actions,
  load
};
