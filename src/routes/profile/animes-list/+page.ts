/*import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ locals }) => {
    console.log(locals.post.animes)

}

export const load: PageLoad = async ({ locals }) => {
    return {}
}


export async function getAllInfos(animes){
    for(let i=0; i<animes.length; i++){
        if(i%3 == 0 && i>0){
            setTimeout(()=> 100);
        }
        animes.push(await getInfos(`anime/${animes[i].animeId}`));
    }
    getAllInfos(animes);
    return {
        post: {animes: animes}
    };
}

async function getInfos(dynamicPart:string) {
    const res = await fetch(`https://api.jikan.moe/v4/${dynamicPart}`);
    if (!res.ok || res.status === 404) return [];
    if (!res.ok || res.status === 429) console.log('totot');
    let json = await res.json();
    return json.data;
};*/