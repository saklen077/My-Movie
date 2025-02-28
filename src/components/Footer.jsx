import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center  border-t-2 border-white-500 text-white bg-[#000000]  rounded p-5">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Saklen Mujawar
          </p>
        </aside>
      </footer>
    </>
  );
}
