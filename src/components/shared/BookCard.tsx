import { IBook } from "@/types/books.type";
import Image from "next/image";

interface IBookCardProps {
    book: IBook
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-2.5 shadow-sm">
      {/* Book Image */}
      <div className="flex h-56.25 items-center justify-center rounded-xl bg-[#f3f3f3] p-6">
        <Image
          src={book.image}
          alt={book.bookName}
          width={180}
          height={190}
          className="h-45 w-auto object-contain"
        />
      </div>

      {/* Tags */}
      <div className="mt-6 flex gap-3">
        {book.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#f0fbea] px-4 py-2 text-sm font-medium text-[#20b526]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Name */}
      <h2 className="mt-5 line-clamp-1 font-serif text-[22px] font-bold text-gray-900">
        {book.bookName}
      </h2>

      {/* Author */}
      <p className="mt-3 text-[15px] text-gray-600">
        By : <span>{book.author}</span>
      </p>
      <button className="btn bg-[#12c20b] w-full mt-3 text-white">View Details</button>

      {/* Bottom Info */}
      <div className="mt-5 flex items-center justify-between border-t border-dashed border-gray-300 pt-5">
        <span className="text-[15px] text-gray-700">{book.category}</span>

        <div className="flex items-center gap-3">
          <span className="text-[15px] text-gray-700">{book.rating}</span>

          <span className="text-2xl leading-none text-gray-600">☆</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;