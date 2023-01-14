import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export const load: PageServerLoad = async ({ locals }) => {
  // redirect user if not logged in
  if (!locals.user) {
    throw redirect(302, '/');
  } else if (locals.user.role == Roles.USER){
    throw redirect(302, '/');
  }
}
