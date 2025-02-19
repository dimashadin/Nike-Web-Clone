"use client";

import { handleLogout } from "@/action";

export default function LogoutButton() {
  return (
    <>
      <a
        onClick={() => {
          handleLogout();
        }}
        className="btn btn-outline"
      >
        LOGOUT
      </a>
    </>
  );
}
