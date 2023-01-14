import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-198b4bcb.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-198b4bcb.js","_app/immutable/chunks/index-9fb6ca3a.js","_app/immutable/chunks/stores-8f0fbf1c.js","_app/immutable/chunks/singletons-9c29f4fc.js","_app/immutable/chunks/forms-419a0a86.js","_app/immutable/chunks/sticky-c899b1a3.js"];
export const stylesheets = ["_app/immutable/assets/_layout-68fc5c19.css"];
