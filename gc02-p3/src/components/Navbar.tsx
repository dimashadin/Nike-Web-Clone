import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get("Authorization");

  return (
    <div className="navbar bg-base-100 shadow-md">
      {/* Navbar Start */}
      <div className="navbar-start">
        <Link href="/">
          <svg
            width="100px"
            height="50px"
            viewBox="0 0 192.756 192.756"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fillRule="evenodd" clipRule="evenodd">
              <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z" />

              <path d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z" />
            </g>
          </svg>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center">
        <ul className="mx-5">Men</ul>
        <ul className="mx-5">Women</ul>
        <ul className="mx-5">Kids</ul>
        <ul className="mx-5">Sale</ul>
        <Link href={'/products'} className="mx-5">SNKRS</Link>
      </div>

      {/* Navbar End */}

      <div className="navbar-end flex gap-2">
        <Link href="/wishlist">
          <div className="btn btn-ghost btn-circle" aria-label="Wishlist">
            <div className="indicator">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="#000000"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </Link>

        {token?.value ? (
          <LogoutButton />
        ) : (
          <Link href={"/login"} className="btn btn-outline">
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
}
