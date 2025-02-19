import { errorHandler } from "@/db/helpers/errorHandler";
import ProductModel from "@/db/models/ProductModel";
import { CustomErrorType } from "@/types";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const slug = (await params).slug;
    const productBySlug = await ProductModel.getBySlug(slug);

    return Response.json(productBySlug);
  } catch (error) {
    return errorHandler(error as CustomErrorType);
  }
}
