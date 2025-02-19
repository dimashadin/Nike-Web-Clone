
import AddToWishlistButton from "@/components/AddToWishlistButton";
import { ProductType } from "@/types";
import { Metadata } from "next";



type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = (await params).slug;

  const product: ProductType = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`
  ).then((res) => res.json());

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: ["/some-specific-page-image.jpg", product.thumbnail],
    },
  };
}

export default async function Detail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`);
  const product: ProductType = await data.json();

  return (
    <>
    
      <div className="container mx-36 mt-8 p-6">
        <div className="grid grid-cols-12 gap-4">
          {/* Sidebar Image Thumbnails */}
          <div className=" flex flex-col gap-1">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                className="h-16 w-16 object-cover rounded-lg cursor-pointer border border-gray-300 hover:border-blue-500"
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>

          {/* Main Product Section */}
          <div className="col-span-10 grid grid-cols-12 gap-4">
            {/* Main Image */}
            <div className="col-span-7">
              <img
                src={product.thumbnail}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                alt="Product Thumbnail"
              />
            </div>

            {/* Product Details */}
            <div className="col-span-5">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-500 text-sm mb-4">Basketball Shoes</p>
              <p className="text-2xl font-semibold text-blue-600 mb-4">Rp {product.price.toLocaleString()}</p>

              {/* Size Selection */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Select Size</h2>
                <div className="grid grid-cols-4 gap-1">
                  {["EU 40", "EU 40.5", "EU 41", "EU 42", "EU 42.5", "EU 43", "EU 44", "EU 44.5", "EU 45", "EU 46", "EU 47.5"].map((size) => (
                    <button
                      key={size}
                      className="px-3 py-2 border rounded-lg text-center text-sm hover:bg-gray-100"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 mb-6">
                <button className="w-full px-4 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800">
                  Add to Bag
                </button>
               <AddToWishlistButton productId={product._id} />
              </div>

              {/* Product Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
