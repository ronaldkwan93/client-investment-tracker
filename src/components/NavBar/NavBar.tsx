import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavBar = () => {
  let navigate = useNavigate();
  return (
    <div className="flex justify-between px-10 py-6 border-b border-gray-200 select-none shadow-sm">
      <div>
        <img className="w-15" src={logo} alt="logo" />
      </div>
      <div className="flex gap-5 items-center ">
        <ul
          className="border p-1 shadow-sm rounded-md cursor-pointer transform transition-transform duration-200 
               hover:-translate-y-1 bg-sky-200"
          onClick={() => navigate("/")}
        >
          Dashboard
        </ul>
        <ul
          className="border p-1 rounded-md cursor-pointer transform transition-transform duration-200 
               hover:-translate-y-1 bg-gray-200 shadow-lg"
          onClick={() => navigate("/investments")}
        >
          Investments
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
