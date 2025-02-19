"use client";

import { CustomErrorType } from "@/types";
import Swal from "sweetalert2";

export default function AddToWishlistButton({
  productId,
}: {
  productId: string | undefined;
}) {
  const addWishlist = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`, {
        method: "POST",
        body: JSON.stringify({
          productId: productId,
        }),
      });

      if (!res.ok) throw await res.json();

      Swal.fire({
        title: "Success",
        text: "Success add to wishlist",
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

  return (
    <>
      <button onClick={async ()=>{
        await addWishlist()
      }} className="btn btn-outline w-full px-4 py-3 border border-black text-black font-medium rounded-lg hover:bg-white ">
        Add to wishlist
      </button>
    </>
  );
}
