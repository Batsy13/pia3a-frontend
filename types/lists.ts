import * as LucideIcons from "lucide-react-native";

export type List = {
    slice(arg0: number, arg1: number): ArrayLike<any> | null | undefined;
    length: number;
    id: number;
    name: string;
    icon: string;
    places: Place[];
};

export type Place = {
    id: number;
    name: string;
    description: string;
    images: string[];
    added_at: string;
}

export type ListItemProps = {
    id: number;
    name: string;
    placesCount: number;
    icon: keyof typeof LucideIcons;
    isLast: boolean;
};