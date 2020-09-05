export interface Post {
    id: number;
    imageUrl: string;
    type: string;
    tags: Array<any>;
    uploadedOn: string;
    likesCount: number;
    commentCount: number;
}