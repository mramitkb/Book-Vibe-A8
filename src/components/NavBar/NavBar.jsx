import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 px-0 mt-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Listed Books</a>
            </li>
            <li>
              <a>Pages to Read</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-[28px] font-extrabold text-[#131313]">
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg gap-6">
          <div>
            <NavLink to="/" className={({isActive})=> isActive ? "text-[#23BE0A] font-semibold" : ""}>Home</NavLink>
          </div>
          <div>
            <NavLink to="/listed-books" className={({isActive})=> isActive ? "text-[#23BE0A] font-semibold" : ""}>Listed Books</NavLink>
          </div>
          <div>
            <NavLink to="/pages-to-read" className={({isActive})=> isActive ? "text-[#23BE0A] font-semibold" : ""}>Pages to Read</NavLink>
          </div>
        </ul>
      </div>
      {/* buttons */}
      <div className="navbar-end gap-5">
        <div>
          <button className="px-6 py-3 bg-[#23BE0A] rounded-lg text-white font-semibold text-lg">
            Sign In
          </button>
        </div>
        <div>
          <button className="px-6 py-3 bg-[#59C6D2] rounded-lg text-white font-semibold text-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
