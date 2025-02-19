import { database } from "../config/mongodb";

class ProductModel {
  static collection() {
    return database.collection("products");
  }

  static async GetAllProducts({
    page,
    search,
  }: {
    page: string;
    search: string;
  }) {
    const limit = 9;
    const offset = limit * (Number(page) - 1);

    const queries = search.split(" ").map((el) => {
      return {
        name: {
          $regex: el,
          $options: "i",
        },
      };
    });

    const products = this.collection()
      .find({
        $and: queries,
      })
      .skip(offset)
      .limit(limit)
      .toArray();

    return products;
  }

  static async getBySlug(slug: string) {
    const productBySlug = await this.collection().findOne({ slug });

    return productBySlug;
  }
}

export default ProductModel;
