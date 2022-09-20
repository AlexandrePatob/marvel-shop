export interface MarvelInfo {
  id: number;
  title: string;
  thumbnail: Thumbnail;
  creators: {
    items: Creators[];
  };
}

export interface Creators {
  name: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}
