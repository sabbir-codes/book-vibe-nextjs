import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";

interface IBookDetailsProps {
  params: Promise<{
    id: string
  }>
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const BookDetailsPage = async ({params}: IBookDetailsProps) => {
  const {id} = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook;

  return (
    <section className="min-h-screen bg-white py-6 sm:py-10">
      <div className="mx-auto flex max-w-270 flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:gap-7">
        {/* ================= LEFT: BOOK IMAGE ================= */}
        <div className="flex w-full items-center justify-center rounded-xl bg-[#f5f5f5] px-8 py-10 sm:px-12 lg:h-104 lg:w-84 lg:shrink-0 lg:px-8 lg:py-6">
          <Image
            src={book.image}
            alt={book.bookName}
            className="max-h-85 w-auto object-contain"
            width={425}
            height={565}
          />
        </div>

        {/* ================= RIGHT: BOOK INFO ================= */}
        <div className="w-full lg:pt-0">
          {/* Title */}
          <h1 className="font-serif text-2xl font-bold leading-tight text-[#1f1f1f] sm:text-3xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="mt-2 text-xs text-[#444] sm:text-sm">
            By : {book.author}
          </p>

          {/* Divider */}
          <div className="my-3 h-px bg-[#e5e5e5]" />

          {/* Category */}
          <p className="py-1 text-xs text-[#333] sm:text-sm">{book.category}</p>

          <div className="my-3 h-px bg-[#e5e5e5]" />

          {/* Review */}
          <div className="text-[11px] leading-[1.65] text-[#666] sm:text-xs">
            <p>
              <span className="font-bold text-[#333]">Review :</span>{" "}
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px]">
            <span className="font-bold text-[#333]">Tag</span>

            <span className="">
              {book.tags.map((tag) => (
                <span
                  className="rounded-full bg-[#effbea] px-3 py-1 text-[#43a833] mr-2"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </span>
          </div>

          <div className="my-3 h-px bg-[#e5e5e5]" />

          {/* ================= BOOK INFORMATION ================= */}
          <div className="space-y-2 text-[11px] sm:text-xs">
            <div className="grid grid-cols-[145px_1fr]">
              <span className="text-[#777]">Number of Pages:</span>
              <span className="font-bold text-[#333]">{book.totalPages}</span>
            </div>

            <div className="grid grid-cols-[145px_1fr]">
              <span className="text-[#777]">Publisher:</span>
              <span className="font-bold text-[#333]">{book.publisher}</span>
            </div>

            <div className="grid grid-cols-[145px_1fr]">
              <span className="text-[#777]">Year of Publishing:</span>
              <span className="font-bold text-[#333]">
                {book.yearOfPublishing}
              </span>
            </div>

            <div className="grid grid-cols-[145px_1fr]">
              <span className="text-[#777]">Rating:</span>
              <span className="font-bold text-[#333]">{book.rating}</span>
            </div>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-5 flex gap-2">
            <ReadButton book={book} />

            <WishlistButton book={book} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;
