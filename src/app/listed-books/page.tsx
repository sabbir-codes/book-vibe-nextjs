"use client";

import { booksContextApi } from "@/context/BooksContext";
import { useContext } from "react";


const ListedBooks = () => {

    const {readBooks, wishlist} = useContext(booksContextApi)
    console.log(readBooks, wishlist, "readbooks, wishlist");

    return (
        <div>
            Listed Books ...
        </div>
    );
};

export default ListedBooks;