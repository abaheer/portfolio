"use client";

export default function Navbar() {
  return (
    <nav className="">
      <div className="flex flex-wrap items-center justify-between p-4">
        <h1 className="pl-8 text-white font-inter text-xl font-extrabold">
          abaheer.com
        </h1>
        <ul className="flex flex-col p-2 text-white pr-8 font-medium">
          <li className="sm:inline-block">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#my-projects");
              }}
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
