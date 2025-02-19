export type ProductType = {
  _id?: string;
  id: number;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export type CustomErrorType = {
  message: string;
  status: number;
};

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type WishlistType = {
  _id: string;
  user: UserType;
  wishlist: ProductType;
  productId: string;
  userId: string;
};
