import budget from "../../assets/budget.png";
import menu from "../../assets/image.png";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="z-9999 flex py-5 justify-between px-5 sm:px-10 items-center text-white backdrop-blur-lg bg-white/20 sticky top-0 w-full">
      <div className="flex gap-4 items-center">
        <span className="text-2xl text-blue-500 font-bold">PennyFlow</span>{" "}
        <img className="h-6 sm:h-8" src={budget} alt="" />
      </div>

      <ul className="hidden sm:flex gap-5 md:gap-10 md:text-lg text-gray-500 font-medium">
        <li className="hover:text-blue-500">
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className="hover:text-blue-500">
          <NavLink to="/income">Income</NavLink>
        </li>
        <li className="hover:text-blue-500">
          <NavLink to="/expense">Expense</NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
          className="
              sm:hidden
            "
        >
          <img
            src={menu}
            alt=""
            className="
                w-10
              "
          />
        </button>
        <div className="flex gap-2 items-center text-xl bg-blue-500 px-4 py-2 rounded-2xl">
          <FaRegUserCircle />
        </div>
      </div>

      <div
        className={`
            inset-y-0
            flex overflow-hidden flex-col
            h-screen
            text-white
            bg-blue-500
            transition-all
            fixed top-0
            right-0
            sm:hidden
            ${showMenu ? "w-45 px-10" : "w-0 px-0"}
          `}
      >
        <button
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
          className="
              ml-auto
              mb-10
              text-4xl
            "
        >
          &#215;
        </button>

        <ul
          className="
              flex flex-col
              font-medium
              gap-4
            "
        >
          <li>
            <NavLink
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}
              to="/"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}
              to="/income"
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}
              to="/expense"
            >
              Expense
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
