export default function Navbar() {
  return (
    <nav className="border-gray-200 bg-gray-800">
      <div className="flex flex-wrap items-center justify-between p-4">
        <h1 className="pl-10 text-white font-inter text-3xl font-extrabold float-right">
          baheer.dev
        </h1>
        <ul class="flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 text-white">
          <li className="sm:inline-block">
            <a href="#">About Me</a>
          </li>
          <li className="sm:inline-block pr-10">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
