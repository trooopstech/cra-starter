import Button from "components/elements/Button";
import logo from "assets/full_logo_white.png";

const Navbar = () => {
  return (
    <div className="lg:px-20 px-4 md:px-15 bg-transparent bg-gray-800 w-screen fixed top-0 left-0 h-16 flex items-center z-10">
      <div className="w-full">
        <img
          src={logo}
          alt="logo"
          className="w-1/2 md:w-1/5 lg:w-1/4"
          style={{ minWidth: "50px", maxWidth: "120px" }}
        />
      </div>
      <div className="w-full flex justify-end">
        <>
          <div className="m-2">
            <Button variant="text" small>
              Masuk
            </Button>
          </div>
          <div className="mt-2 ml-2 mb-2">
            <Button variant="primary" small>
              Daftar
            </Button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Navbar;
