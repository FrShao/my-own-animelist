import type { Handle } from '@sveltejs/kit'
import { db } from '$lib/database'

export const handle: Handle = async ({ event, resolve }) => {
  // get cookies from browser
  const session = event.cookies.get('session')

  if (!session) {
    // if there is no session load page as normal
    return await resolve(event)
  }

  // find the user based on the session
  const user = await db.user.findUnique({
    where: { userAuthToken: session },
    select: { id:true, username: true, role: true },
  })

  // if `user` exists set `events.local`
  if (user) {  
    event.locals.user = {
      id: user.id,
      name: user.username,
      role: user.role.name,
    }
  }

  // load page as normal
  return await resolve(event)
}
