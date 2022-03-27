export interface WorkCardItem {
    icon: string;
    title: string;
    description: string;
}

export interface WorkCardsProps {
    items: WorkCardItem[];
}