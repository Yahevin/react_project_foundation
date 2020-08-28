import ROUTES from "@/constants/Routes";

interface IPageRoute {
    id: number,
    path: string,
    name: string,
}

const PAGE_LINKS: IPageRoute[] = [];

let counter = 0;
for(let item in ROUTES) {
    if(ROUTES.hasOwnProperty(item) && typeof item === 'string') {
        // @ts-ignore
        const path: string = ROUTES[item];

        PAGE_LINKS.push({
            id: counter,
            path: path,
            name: item,
        });
        counter++;
    }
}

export default PAGE_LINKS;