import { db } from "$lib/database";
import { invalid, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "../$types";
import bcrypt from 'bcrypt';
import { uploadImage } from "$lib/cloudinary";
enum Roles {
    ADMIN = 'ADMIN',
    USER = 'USER',
}

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.user) {
        if(locals.user.role == Roles.ADMIN){
            const defaultPP = await db.profilePicture.findMany({where: { publicId: process.env.DEFAULT_PP_PUBLICID}, select: { url: true } });
            const users = await db.user.findMany({
                include: {
                    role: {
                        select: {
                            name: true,
                            color: true,
                        }
                    },
                    profilePicture: {
                        select: {
                            url: true,
                        }
                    }
                },
                orderBy: {roleId: 'asc'}});
            const roles = await db.roles.findMany();
            const tmp = await db.user.findMany({select: {createdAt: true}})
            return {
                    default_pp_url: defaultPP,
                    users: users,
                    roles: roles,
                    tmp: tmp,
            };
        }else{
            throw redirect(302, '/');
        }
    }else{
      throw redirect(302, '/');
    }
}
const createUser: Action = async ({ request }) => {
    const data = await request.formData()
    const username = data.get('username')
    const password = data.get('password')
    const role = data.get('role');
    const profilePicture = data.get("profile-picture");
    if (
        typeof username !== 'string' ||
        typeof password !== 'string' ||
        !username ||
        !password
    ) {
        return invalid(400, { invalid: true })
    }

    const user = await db.user.findUnique({
        where: { username },
    })

    if (user) {
        return invalid(400, { user: true })
    }

    await db.user.create({
        data: {
        username,
        passwordHash: await bcrypt.hash(password, 10),
        userAuthToken: crypto.randomUUID(),
        role: { connect: { name: role } },
        profilePicture: { connect: { publicId: process.env.DEFAULT_PP_PUBLICID } },
        },
    })
}

const editUser: Action = async ({ request }) => {
    const data = await request.formData();
    const oldUser = JSON.parse(data.get('user'));
    const username = data.get('username');
    let password = data.get('password');
    const role = data.get('role');
    const profilePicture = data.get("profile-picture");
    if (
        typeof username !== 'string' ||
        typeof password !== 'string'
    ) {
        console.log(typeof password)
        return invalid(400, { invalid: true })
    }
    if(password == ""){
        password = oldUser.password;
    }else{
        password = await bcrypt.hash(password, 10);
    }
    if(username != oldUser.username){
        const user = await db.user.findUnique({
            where: { username },
        })

        if (user) {
            console.log('error already exist')
            return invalid(400, { user: true })
        }
    }
    await db.user.update({
        where: {
            id: oldUser.id
        },
        data: {
            username,
            passwordHash: password,
            role: { connect: { name: role } },
        },
    })
    if(profilePicture.size != 0){
        const imageData = await uploadImage(profilePicture);
        const imageUrl = `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/upload/v${imageData.version.toString()}/${imageData.public_id}.${imageData.format}`;
        const profilePictureInfos = await db.profilePicture.create({
          data: {
            publicId: imageData.public_id,
            url: imageUrl,
            format: imageData.format,
            version: imageData.version.toString(),
          },
        });

        await db.user.update({
            where: {
                id: oldUser.id
            },
            data: {
                profilePicture: { connect: { publicId: profilePictureInfos.publicId } }
            },
        })
    }
}

const deleteUser: Action = async ({ request }) => {
    const data = await request.formData();
    const userId = data.get('user-id');
    await db.user.delete({
        where: {
            id: userId,
        },
    });

}
export const actions: Actions = { createUser, editUser, deleteUser }