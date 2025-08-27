import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-between px-10 py-2 border-b border-gray-200">
      <div>
        <img className="w-20" src={logo} alt="logo" />
      </div>
      <div className="flex gap-5 items-center ">
        <ul className="border p-1 rounded-md">Dashboard</ul>
        <ul className="border p-1 rounded-md">Investments</ul>
      </div>
    </div>
  );
};

export default NavBar;
