export default function Navbar() {
  return (
    <nav className="border-gray-200 bg-gray-800">
      <div className="flex flex-wrap items-center justify-between p-4">
        <h1 className="pl-8 text-white font-inter text-xl font-extrabold">
          baheer.dev
        </h1>
        <ul className="flex flex-col p-2 text-white pr-8 font-medium">
          <li className="sm:inline-block">
            <a href="#">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
