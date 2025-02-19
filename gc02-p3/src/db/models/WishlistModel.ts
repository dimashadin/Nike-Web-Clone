import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";

class WishlistModel {
  static collection() {
    return database.collection("wishlist");
  }

  static async findUser(userId: string) {
    const agg = [
      {
        $match: {
          userId: new ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "wishlist",
        },
      },
      {
        $unwind: {
          path: "$wishlist",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "user",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: {
          path: "$user",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          "user.password": false,
        },
      },
    ];
    const wishlist = await this.collection().aggregate(agg).toArray();
    return wishlist;
  }

  static async createWishlist({
    userId,
    productId,
  }: {
    userId: string;
    productId: string;
  }) {
    await this.collection().insertOne({
      userId: new ObjectId(userId),
      productId: new ObjectId(productId),
    });

    return "success add new wishlist";
  }

  static async deleteWishlist(wishlistId: string, userId: string) {
     await this.collection().deleteOne({ 
      _id: new ObjectId(wishlistId),
      userId: new ObjectId(userId)
    });
    return "Wishlist has been deleted";
  }
}

export default WishlistModel;
