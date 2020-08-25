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
        path: '/btn',
        name: 'BtnPreview',
    },
    {
        id: 2,
        path: '/events',
        name: 'EventPreview',
    },
];

export default PAGE_ROUTES;