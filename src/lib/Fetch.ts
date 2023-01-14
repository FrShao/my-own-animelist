
export async function getInfos(dynamicPart:string, delay:number=0) {
    const res = await fetch(`https://api.jikan.moe/v4/${dynamicPart}`);
    if (!res.ok || res.status === 404) return [];
    let json = await res.json();
    await wait(delay);
    return json.data;
};

export async function getMultipleInfos(dynamicParts:string[]) {
    let multipleInfos = [];
    for (let dynamicPart in dynamicParts) {
        multipleInfos.push(getInfos(dynamicPart, 334))
    }
};

export function wait(microsecondTime:number) {
    return new Promise(resolve => setTimeout(resolve, microsecondTime));
}