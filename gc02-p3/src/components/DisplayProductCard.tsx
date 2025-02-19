"use client";

import { ProductType } from "@/types";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function DisplayProductCard() {
  const [products, setProducts] = useState<ProductType[]>([]);

  const fetchAllProducts = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
    const products: ProductType[] = await data.json();

    setProducts(products.slice(0, 7));
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="flex justify-center items-center mx-5">
      <div className="flex overflow-x-auto space-x-4">
        {products.map((el) => (
          <div
            key={el.id}
            className="shadow-lg rounded-lg overflow-hidden bg-white flex-shrink-0 w-64"
          >
            <ProductCard product={el} />
          </div>
        ))}
      </div>
    </div>
  );
}
