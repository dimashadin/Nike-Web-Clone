"use client";

import { CustomErrorType, WishlistType } from "@/types";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistType[]>([]);

  const handleDelete = async (wishlistId: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`, {
        method: "DELETE",
        body: JSON.stringify({
          wishlistId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw await res.json();

      setWishlist((prev) => prev.filter((item) => item._id !== wishlistId));
      Swal.fire({
        title: "Success",
        text: "Delete Wishlist",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: (error as CustomErrorType).message,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`);
        if (!res.ok) throw await res.json();
        const result = await res.json();

        setWishlist(result);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: (error as CustomErrorType).message,
          icon: "error",
        });
      }
    };
    fetchWishlist();
  }, []);

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex items-center space-x-3 mb-8">
        <p className="text-4xl font-bold text-gray-500">
          {wishlist[0]?.user?.username}
        </p>
        <p className="text-4xl font-bold">Wishlist</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlist.map((item) => (
          <div
            key={item._id}
            className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <figure className="bg-gray-100">
              <img
                src={item.wishlist.thumbnail}
                alt={item.wishlist.name}
                className="object-cover w-full h-48"
              />
            </figure>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.wishlist.name}
              </h2>
              <p className="text-gray-600 mt-2">{item.wishlist.description}</p>
              <p className="text-lg font-bold text-blue-600 mt-4">
                Rp {item.wishlist.price.toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(item._id)}
                className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
