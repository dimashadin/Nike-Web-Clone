import Link from "next/link";

export default function StartingContent() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8  lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="bg-gray-300 p-10 w-full">
              <div className="mx-auto max-w-xl ">
                <h2 className="text-4xl font-bold text-black">LEBRON XXII</h2>

                <p className="hidden text-black sm:mt-4 sm:block">
                  LeBron isnt slowing down any time soon. The open-court
                  nightmare is as fast and spry as ever. But even Bron needs
                  support when he is at full throttle. That is why we levelled up
                  the LeBron 22. Newly implemented saddle wings offer optimal
                  midfoot stability. They complement the heel and forefoot Air
                  Zoom units, so the King can keep pushing the sport forwards.
                  This version nods to LeBron ability to shine bright on the
                  big stage. With its extra-durable rubber outsole, this version
                  gives you traction for outdoor courts.
                </p>

                <div className="mt-4 md:mt-8">
                  <Link
                    href={`/products`}
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-black transition hover:bg-transparent hover:text-black focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2 ">
              <img
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70593e99-00cc-4b6f-aa1a-503de2a6a86f/LEBRON+XXII+EP.png"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />

              <img
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5c4950bd-4760-44c8-9f12-93e10ca877cf/LEBRON+XXII+XMAS+EP.png"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
