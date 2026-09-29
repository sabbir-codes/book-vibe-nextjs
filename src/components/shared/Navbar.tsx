import Image from "next/image";
import logo from "@/assets/book.ico";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <Link href={'/'} className="flex gap-4 text-xl">
            <Image src={logo} alt="Book Vibe" width={30} />{" "}
            <h2 className="text-2xl font-bold">Book Vibe</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={'/'} className="btn btn-outline btn-success">Home</Link>
            </li>
            <li>
              <Link href={'/books'}>Books</Link>
            </li>
            <li>
              <Link href={'/listed-books'}>Listed Books</Link>
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
