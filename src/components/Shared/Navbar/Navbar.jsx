import { Link, NavLink } from "react-router-dom";
// import { RxAvatar } from "react-icons/rx";
import useAuthContext from "../../../hooks/useAuth";
import Avatar from "../../../assets/images/user.png";

const Navbar = () => {
  const { user, handleUserLogOut } = useAuthContext();
  const navLinks = (
    <ul className='flex text-lg'>
      <li>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? "underline text-green-600 font-semibold " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? "underline text-green-600 font-semibold " : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/career'
          className={({ isActive }) =>
            isActive ? "underline text-green-600 font-semibold " : ""
          }
        >
          Career
        </NavLink>
      </li>
    </ul>
  );
  return (
    <>
      <div className='navbar bg-base-100 '>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost md:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 '
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className='navbar-end flex'>
          <ul className='menu menu-horizontal px-1 text-gray-500 '>
            {navLinks}
          </ul>
        </div>

        <div className=' dropdown dropdown-end'>
          <label tabIndex='0' className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              {user && user?.photoURL !== null ? (
                <img src={user?.photoURL} />
              ) : (
                <img src={Avatar} />
              )}
            </div>
          </label>
          <ul
            tabIndex='0'
            className='mt-1 z-[2] shadow menu menu-sm dropdown-content bg-base-100 rounded-box'
          >
            {user ? (
              <>
                <li>
                  <Link>{user?.email}</Link>
                </li>
                <li>
                  <Link onClick={handleUserLogOut}>Logout</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
