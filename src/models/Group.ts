export interface Group {
    items: string[],
    heading: string,
    onSelectItem: (item: string) => void;
}