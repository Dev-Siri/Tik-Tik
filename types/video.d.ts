interface PostedBy {
    _id: string;
    _ref: string;
    image: string;
    userName: string;
}

export interface Comment {
    _key: string;
    comment: string;
    postedBy: PostedBy;
}

export interface Like {
    _key: string;
    _ref: string;
    _type: string;
}

export default interface Video {
    _id: string;
    caption: string;
    comments: Comment[];
    postedBy: PostedBy;
    likes: Like[];
    userId: string;
    video: {
        asset: {
            _id: string;
            url: string;
        }
    }
}