export type BookType = {
  id: number;
  author?: string;
  name: string;
  books?: BookType[];
  price: number;
};
