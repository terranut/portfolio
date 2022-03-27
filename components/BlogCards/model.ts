export interface BlogCardItem {
    image: string;
    title: string;
    description: string;
    url:string;
}

export interface BlogCardsProps {
    items: BlogCardItem[];
}