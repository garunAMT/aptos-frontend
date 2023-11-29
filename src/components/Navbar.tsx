import { useState } from "react";
import logo from "../assets/Logo.png";

function Navtwo() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-black">
        <div className="justify-between pr-4 mx-auto  lg:items-center lg:flex">
          <div>
            <div className="flex items-center justify-between lg:block">
              {/* LOGO */}
              <a href="/">
                <img
                  src={logo}
                  alt="logo"
                  className="cursor-pointer text-xl w-20 py-2 px-2"
                />
              </a>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? "p-4 lg:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen lg:h-auto items-center justify-center lg:flex ">

                <li className="my-4">
                  <a
                    href="/"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600 rounded-md"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Home
                  </a>
                </li>

                <li className="my-4">
                  <a
                    href="/people"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600 rounded-md"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Explore
                  </a>
                </li>


                {/* -----------------ENDED HERE----------------- */}

                <li className="my-4">
                  <a
                    href="/projects"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600 rounded-md"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Contact
                  </a>
                </li>

                <li className="my-4">
                  <a
                    href="/technologies-developed"
                    className="text-xl text-white py-2 px-6 mx-1 text-center bg-indigo-500 rounded-md"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Sign up
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navtwo;