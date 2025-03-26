export type List = {
    id: number;
    name: string;
    places: { id: number; name: string }[];
    type?: string;
};

export type ListItemProps = {
    name: string;
    placesCount: number;
    type?: string;
};