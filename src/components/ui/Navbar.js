import { Link } from "react-router-dom";
import "@fontsource/libre-baskerville/700.css"; // Bold

const Navbar = () => {
  return (
    <nav>
      <nav className="w-full py-6 relative">
        <h1 className="text-[18.2vw] text-center font-bold leading-none flex justify-center items-center">
          LUMNOS
        </h1>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-between xl:px-12 items-center absolute bottom-4">
          <div className="flex flex-col sm:flex-row sm:gap-5 md:gap-10 lg:gap-[215px]">
            <Link href="#" className="text-2xl whitespace-nowrap text-[#C9D6DF] font-[600]">
              ABOUT
            </Link>
            <Link href="#" className="text-2xl whitespace-nowrap text-[#C9D6DF] font-[600]">
              WORK
            </Link>
            <Link href="#" className="text-2xl whitespace-nowrap text-[#C9D6DF] font-[600]">
              CONTACT
            </Link>
          </div>
          <Link className="text-2xl whitespace-nowrap text-[#C9D6DF] font-[600]">
            WEB DESIGN STUDIO
          </Link>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
