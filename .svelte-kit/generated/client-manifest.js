export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')];

export const server_loads = [0];

export const dictionary = {
	"/": [2],
	"/(protected)/admin": [~6],
	"/(protected)/admin/user-management": [~7],
	"/animes": [8],
	"/animes/[id]": [~9],
	"/(auth)/login": [~3],
	"/(auth)/logout": [~4],
	"/mangas": [10],
	"/mangas/[id]": [11],
	"/profile": [~12],
	"/profile/animes-list": [~13],
	"/(auth)/register": [~5],
	"/search": [14],
	"/upload": [~15]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};