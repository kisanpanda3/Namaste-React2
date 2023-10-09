import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-300 shadow-lg h-28">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-8">
          <li className="px-4">
            Online Status : {onlineStatus ? "Green" : "Red"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 ">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 ">Cart</li>
          <button
            className="bg-brown-700"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
