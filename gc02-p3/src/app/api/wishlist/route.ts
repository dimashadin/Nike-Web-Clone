import { errorHandler } from "@/db/helpers/errorHandler";
import WishlistModel from "@/db/models/WishlistModel";
import { CustomErrorType } from "@/types";

export async function GET(request: Request) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) throw { message: "User not found", status: 404 };
    const wishlist = await WishlistModel.findUser(userId);
    return Response.json(wishlist);
  } catch (error) {
    return errorHandler(error as CustomErrorType);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const productId = body.productId;
    const userId = request.headers.get("x-user-id");
    if (!userId) throw { message: "User not found", status: 404 };

    await WishlistModel.createWishlist({ productId, userId });
    return Response.json({ message: "success add new wishlist" });
  } catch (error) {
    return errorHandler(error as CustomErrorType);
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const wishlistId = body.wishlistId;
    const userId = request.headers.get("x-user-id");

    if (!wishlistId) throw { message: "Wishlist ID is required", status: 400 };
    if (!userId) throw { message: "User not found", status: 404 };

    await WishlistModel.deleteWishlist(wishlistId, userId);
    return Response.json({ message: "Wishlist has been deleted" });
  } catch (error) {
    return errorHandler(error as CustomErrorType);
  }
}

