import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import lock from '../assets/lock.svg';
import { Link } from 'react-router-dom';
import './styles.css';
import { CgProfile } from "react-icons/cg";

const Navbar = ({ userData }) => {
  const [data, setData] = useState(false);

  useEffect(() => {
    setData(userData)
  }, [userData]);

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('userData');
    localStorage.removeItem('token');

    // Redirect to the login page
    window.location.reload();
  };

  return (
    <div>
      <div className='w-full h-[96px] bg-white shadow-sm'>
        <div className='p-10 md:max-w-[1080px] max-w-[450px] mx-auto w-full h-full flex justify-between items-center'>
          <img src={logo} alt="" srcset="" className='w-[12%] mt-5 rounded-full' />
          <Link to={'/'}><button className='text-3xl mr-80 font-bold'>WI$E</button></Link>
          <div className="flex items-center">
            <ul className='hidden md:flex gap-4 list-unstyled fw-bold fs-5'>
              <li className="text-lg">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="px-5 text-lg">
                <Link to={"/About"}>About</Link>
              </li>
            </ul>
          </div>
          {!data.success ? (
            <div className='md:flex hidden'>
              <Link to={"/login"}><button className='flex justify-content-between items-center bg-transparent px-6'>
                <img src={lock} alt='lock' />
                Login
              </button></Link>
              <Link to={"/signup"}>
                <button className='px-8 bg-[#64e764] h-8 ml-10 border-r-10'>SignUp</button>
              </Link>
            </div>
          ) : (
            <div className='flex items-center'>
              <CgProfile className='mt-0 mr-2 h-10 w-10' />
              <button className='h-8'>{data.name}</button>
              <Link to={"/login"}><button className='flex justify-content-between items-center bg-transparent px-6'>
                <img src={lock} alt='lock' />
                Login Again
              </button></Link>
              <button onClick={handleLogout} className='flex justify-content-between items-center bg-transparent px-6 ml-4'>
                <img src={lock} alt='lock' />
                    Logout
            </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState, useEffect } from 'react';
// import logo from '../assets/logo.svg';
// import lock from '../assets/lock.svg';
// import './styles.css';
// import { CgProfile } from "react-icons/cg";

// const Navbar = ({ userData }) => {
//   const [data, setData] = useState(false);

//   useEffect(() => {
//     setData(userData)
//   }, [userData]);

//   const handleLogout = () => {
//     // Clear user data from local storage
//     localStorage.removeItem('userData');
//     // Redirect to the login page
//     window.location.reload();
//   };

//   return (
//     <div>
//       <div className='w-full h-[96px] bg-white shadow-sm'>
//       <div className='p-10 md:max-w-[1080px] max-w-[450px] mx-auto w-full h-full flex justify-between items-center'>
//           <img src={logo} alt="" srcset="" className='w-[12%] mt-5 rounded-full' />
//           <Link to={'/'}><button className='text-3xl mr-80 font-bold'>WI$E</button></Link>
//           <div className="flex items-center">
//             <ul className='hidden md:flex gap-4 list-unstyled fw-bold fs-5'>
//               <li className="text-lg">
//                 <Link to="/dashboard">Dashboard</Link>
//               </li>
//               <li className="px-5 text-lg">About</li>
//             </ul>
//           </div>
//           {!data.success ? (
//             <div className='md:flex hidden'>
//               <Link to={"/login"}><button className='flex justify-content-between items-center bg-transparent px-6'>
//                 <img src={lock} alt='lock' />
//                 Login
//               </button></Link>
//               <Link to={"/signup"}>
//                 <button className='px-8 bg-[#64e764] h-8 ml-10 border-r-10'>SignUp</button>
//               </Link>
//             </div>
//           ) : (
//             <div className='flex items-center'>
//               <CgProfile className='mt-2 mr-2 h-6 w-6' />
//               <button className='h-8'>{data.name}</button>
//               <button onClick={handleLogout} className='flex justify-content-between items-center bg-transparent px-6 ml-4'>
//                 <img src={lock} alt='lock' />
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
