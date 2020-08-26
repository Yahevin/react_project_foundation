interface IPageRoute {
    id: number,
    path: string,
    name: string,
}

const PAGE_ROUTES: IPageRoute[] = [
    {
        id: 0,
        path: '/',
        name: 'Home',
    },
    {
        id: 1,
        path: '/events',
        name: 'EventPreview',
    },
    {
        id: 2,
        path: '/memo',
        name: 'MemoHook',
    },
];

export default PAGE_ROUTES;