import logo from "../assets/more/logo1.png";

const NavBar = () => {
  return (
    <div className="flex py-2
     bg-nav-img bg-center bg-no-repeat bg-cover justify-center items-center">
      <img className="w-12" src={logo} alt="" />
      <h2 className="text-4xl font-medium text-white font-rancho-font">
        Espresso Emporium
      </h2>
    </div>
  );
};

export default NavBar;
