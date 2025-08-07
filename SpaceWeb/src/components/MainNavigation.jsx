import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg"; // replace with your actual logo path

export default function MainNavigation() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 absolute top-0 left-0 w-full z-50">
      {/* Logo and line */}
      <div className="flex items-center gap-8">
        <img src={logo} alt="Logo" className="w-10" />
        <div className="h-px w-40 bg-gray-600 hidden md:block" />
      </div>

      {/* Navigation bar with glass effect and extended left background */}
      <div className="relative">
        <div className="absolute left-[-4rem] right-0 top-0 bottom-0 bg-white/10 backdrop-blur-md rounded-md z-0" />

        <ul className="relative z-10 flex gap-8 px-8 py-4 text-white tracking-widest uppercase text-sm">
          {["home", "destination", "crew", "technology"].map((item, i) => (
            <li key={item}>
              <NavLink
                to={item === "home" ? "/" : `/${item}`}
                className={({ isActive }) =>
                  `relative px-2 py-1 ${
                    isActive
                      ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white"
                      : "hover:text-gray-300"
                  }`
                }
              >
                <span className="font-bold">0{i}</span> {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
