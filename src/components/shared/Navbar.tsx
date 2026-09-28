import Image from "next/image";
import logo from "@/assets/book.ico";

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="flex gap-4 text-xl">
            <Image src={logo} alt="Book Vibe" width={30} />{" "}
            <h2 className="text-2xl font-bold">Book Vibe</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="btn btn-outline btn-success">Home</a>
            </li>
            <li>
              <a>Listed Books</a>
            </li>
            <li>
              <a>Pages to Read</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <button className="btn bg-[#12c20b] text-white">Sign In</button>
          <button className="btn btn-accent text-white">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
