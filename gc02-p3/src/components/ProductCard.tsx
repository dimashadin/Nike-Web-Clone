import { ProductType } from "@/types";
import Link from "next/link";
import TombolHati from "./TombolHati";

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <>
      <div className="relative">
        <TombolHati productId={product._id} />
        <Link href={`/products/${product.slug}`} className="group block">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="h-[300px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 sm:h-[250px]"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 bg-gray-50 rounded-b-lg">
            <h1 className="text-lg font-semibold text-gray-800 group-hover:text-gray-500">
              {product.name}
            </h1>

            <h3 className="mt-1 text-sm text-gray-500">Basketball Shoes</h3>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-lg font-bold text-gray-800">
                Rp. {product.price.toLocaleString()}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
