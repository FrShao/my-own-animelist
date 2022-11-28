export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","main.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-5070ec01.js","imports":["_app/immutable/start-5070ec01.js","_app/immutable/chunks/index-b9562cd0.js","_app/immutable/chunks/singletons-6668f37d.js","_app/immutable/chunks/preload-helper-3988aedc.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
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
};
