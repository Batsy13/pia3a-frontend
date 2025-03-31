export type List = {
    slice(arg0: number, arg1: number): ArrayLike<any> | null | undefined;
    length: number;
    id: number;
    name: string;
    places: { id: number; name: string }[];
    type?: string;
};

export type ListItemProps = {
    name: string;
    placesCount: number;
    type?: string;
    isLast: boolean;
};