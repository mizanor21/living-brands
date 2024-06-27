import logo from "../../../assets/images/logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar border-b flex justify-center items-center">
        <div className="">
          <img className="w-20" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
