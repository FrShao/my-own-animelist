import { db } from '$lib/database'
import type { Action, Actions, PageServerLoad} from './$types'
import { redirect } from '@sveltejs/kit'
import { getMultipleInfos} from '$lib/Fetch'

enum TypeLists {
    FAVORITE = 'FAVORITE',
    COMMON = 'COMMON',
}

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.user) {
        const animesIds = await db.list.findMany({
            where: { 
                userId: locals.user.id,
            },
            select: {
                animeId: true,
            }
        })
        let animes = getMultipleInfos(animesIds.map((animeId)=> `anime/${animeId}`))

        return {
            post: {animes: animes}
        };
    }else{
      throw redirect(302, '/')
    }
}

const delList: Action = async ({locals, request}) => {
    let userid = locals.user.id

    const data = await request.formData()
    const animeId:string = data.get('anime-id')

    await db.list.delete({
        where: {
            userId_animeId: { userId: userid , animeId },
        },
    })
}

const remove = (id) => {
    items = items.filter((value) => value.id !== id);
  
    if (adjustAfterRemove) {
      items = gridHelp.adjust(items, COLS);
    }
};
export const actions: Actions = { delList }