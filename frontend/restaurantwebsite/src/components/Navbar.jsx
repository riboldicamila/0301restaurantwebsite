
export function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="text-4xl font-cursive italic">
          <span className="text-white">Reston.</span>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="hover:text-gray-300">
            HOME
          </a>
          <a href="#" className="hover:text-gray-300">
            ABOUT US
          </a>
          <a href="#" className="hover:text-gray-300">
            MENU
          </a>
          <a href="#" className="hover:text-gray-300">
            PAGES
          </a>
          <a href="#" className="hover:text-gray-300">
            BLOG
          </a>
          <a href="#" className="hover:text-gray-300">
            SHOP
          </a>
          <a href="#" className="hover:text-gray-300">
            CONTACT US
          </a>
          <a
            href="#"
            className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors"
          >
            FIND A TABLE
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </>
  );
}
