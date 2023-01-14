import { db } from '$lib/database'
import type { Action, Actions, PageServerLoad} from './$types'
let animeId:string;
let userId:string;
enum TypeLists {
    FAVORITE = 'FAVORITE',
    COMMON = 'COMMON',
}

export const load: PageServerLoad = async ({locals, params }) => {
    if (locals.user) {
        animeId = params.id;
        userId = locals.user.id;
        // !! => return boolean value
        const exist = !!await db.list.findUnique({
            where: { 
                userId_animeId: { userId , animeId },
            },
        })
        return {
            post: {exist: exist}
        };
    }
}

const addList: Action = async () => {
    await db.list.create({
        data: {
            user: { connect: { id: userId } },
            animeId: animeId,
            typeList: { connect: { name: TypeLists.COMMON } },
        },
    })
}

const delList: Action = async () => {
    await db.list.delete({
        where: {
            userId_animeId: { userId , animeId },
        },
    })
}
export const actions: Actions = { addList, delList }