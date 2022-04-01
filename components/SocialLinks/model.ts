export interface SocialLinksProps {
    items: SocialLinkItem[];
    size?: string;
    color?: string;
    showTitle?: boolean;
}
export interface SocialLinkItem {
    icon: string;
    title: string;
    url: string;
    size?: string;
    color?: string;
    showTitle?: boolean;
}