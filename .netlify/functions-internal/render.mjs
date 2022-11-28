import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","main.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-62fcef69.js","imports":["_app/immutable/start-62fcef69.js","_app/immutable/chunks/index-cf589771.js","_app/immutable/chunks/singletons-54628cba.js","_app/immutable/chunks/preload-helper-b21cceae.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/animes",
				pattern: /^\/animes\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/animes/[id]",
				pattern: /^\/animes\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				optional: [false],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/mangas",
				pattern: /^\/mangas\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/mangas/[id]",
				pattern: /^\/mangas\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				optional: [false],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
