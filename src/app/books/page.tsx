import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();
  console.log(booksData, "Books");

  return (
    <section className="container mx-auto py-17.5">
      <h2 className="text-4xl font-bold text-center my-6">All Books</h2>
      <div className="grid grid-cols-3 gap-6">
        {booksData.map((book: IBook, ind: number) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;
