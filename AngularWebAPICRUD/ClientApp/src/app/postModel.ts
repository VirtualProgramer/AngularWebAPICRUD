export class Blog {
  BlogId: number;
  Url: string;
}

export class Post {
  PostId: number;
  Title: string;
  Content: string;
  BlogId: number;
}
