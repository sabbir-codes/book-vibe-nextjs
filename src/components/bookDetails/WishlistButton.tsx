"use client";

import { booksContextApi } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";

const WishlistButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(booksContextApi);

  const handleReadBook = () => {
    setWishlist([...wishlist, book]);
  };

  return (
    <button
      onClick={() => {
        handleReadBook();
      }}
      className="h-8.75 rounded-md border border-[#d8d8d8] bg-white px-4 text-xs font-bold text-[#222] transition hover:bg-gray-100 cursor-pointer"
    >
      Wishlist
    </button>
  );
};

export default WishlistButton;
