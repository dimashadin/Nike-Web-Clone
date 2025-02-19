import CardProfileImg from "@/components/CardProfileImg";
import CTA from "@/components/CTA";
import DisplayProductCard from "@/components/DisplayProductCard";
import Footer from "@/components/Footer";

import StartingContent from "@/components/StartingContent";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <CTA />

      <StartingContent />

      <p className="mt-5 mb-2 ml-5 font-bold " style={{ fontSize: "30px" }}>
        Featured Shoes
      </p>

      <DisplayProductCard />
      <div className="flex justify-end">
        <Link
          href={"/products"}
          className="btn btn-outline mr-5 mb-2 mt-2 "
          style={{ fontSize: "15px" }}
        >
          See More ...
        </Link>
      </div>

      <p className="mt-5 mb-2 ml-5 font-bold " style={{ fontSize: "30px" }}>
        Signature Athletes
      </p>
      <CardProfileImg />

      <Footer />
    </>
  );
}
