export interface IThreadCard {
    id: number;
    picture: string;
    fullName: string;
    username: string;
    image?: string;
    content: string;
    posted_at: string;
    likes_count: number;
    liked: boolean;
    replies_count: number;
}