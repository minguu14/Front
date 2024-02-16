import { Tag } from "./tag";

export interface Note {
    id: string;
    title: string;
    content: string;
    tags: Tag[];
    color: string;
    priority: string;
    isPinned: boolean;
    isRead: boolean;
    date: string;
    createdTime: number;
    editedTime: number | null;
}