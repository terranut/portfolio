export interface MenuItem {
    id: string | number;
    path: string;
    display: string;
}
export interface MenuProps {
    items: MenuItem[];
}
