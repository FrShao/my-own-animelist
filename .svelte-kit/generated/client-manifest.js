export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/animes": [3],
	"/animes/[id]": [4],
	"/mangas": [5],
	"/mangas/[id]": [6],
	"/search": [7]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};