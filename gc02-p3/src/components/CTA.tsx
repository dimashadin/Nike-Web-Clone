import Link from "next/link";

export default function CTA() {
  return (
    <>
      <section className="overflow-hidden bg-[url(https://i.pinimg.com/736x/2e/14/d5/2e14d5ee61d062795321f7b0e4afe7c8.jpg)] bg-cover bg-top bg-no-repeat mt-2">
        <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Latest Basketball Shoes
            </h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Unleash your game with Nike Basketball Shoes! Designed for
              performance, style, and comfort—gear up and take your skills to
              the next level. Check them out now!
            </p>

            <div className="mt-4 sm:mt-8">
              <Link
                href={`/products`}
                className="inline-block rounded-full bg-white px-12 py-3 text-sm font-medium text-black transition hover:bg-gray-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
