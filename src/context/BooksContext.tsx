"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export const booksContextApi = createContext({});

interface BooksContextType {
    readBooks: [];
    setReadBooks: Dispatch<SetStateAction<[]>>;
    wishlist: [];
    setWishlist:Dispatch<SetStateAction<[]>>;
    children: ReactNode

}

const BooksContext = ({children}: BooksContextType) => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }

    return (
      <booksContextApi.Provider value={sharedData}>
        {children}
      </booksContextApi.Provider>
    );
};

export default BooksContext;