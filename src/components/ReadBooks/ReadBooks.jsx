import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const ReadBooks = () => {
  const [books, setBooks] = useState([]);
  console.log(books);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="my-8">
      <div className="">
        {books.map((book, idx) => (
          <div key={idx} className="p-2">
            {/* container */}
            <div className="flex items-center justify-around w-[80%] mx-auto gap-5 rounded-xl border p-4">
              <div className="bg-[#F3F3F3] p-5 rounded-2xl">
                <img className="w-fit h-40 mx-auto" src={book.image} alt="" />
              </div>
              <div className="space-y-3">
                <h3 className="playfair text-2xl font-bold text-[#131313]">
                  {book.bookName}
                </h3>
                <p className="font-medium">By: {book.author}</p>

                {/* tags */}
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center justify-center gap-3">
                    Tag:
                    <span className="text-[#23BE0A] bg-[#F4FCF3] px-4 py-2 rounded-[30px] font-medium">
                      {book.tags[0]}
                    </span>
                    <span className="text-[#23BE0A] bg-[#F4FCF3] px-4 py-2 rounded-[30px] font-medium">
                      {book.tags[1]}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <CiLocationOn />
                    </span>
                    <p>Year of Publishing: {book.yearOfPublishing}</p>
                  </div>
                </div>
                {/* publisher */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <LuUsers2 />
                    </span>
                    <p>Publisher: {book.publisher}</p>
                  </div>
                  {/* page */}
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <MdOutlineContactPage />
                    </span>
                    <p>Page: {book.totalPages}</p>
                  </div>
                </div>
                <hr className="my-4"/>
                {/* category */}
                <div className="flex items-center justify-around gap-3">
                    <p className="bg-[#DFEFFE] text-[#328EFF] px-4 py-2 rounded-[30px] font-medium">Category: {book.category}</p>
                    <p className="bg-[#FFF2E1] text-[#FFAC33] px-4 py-2 rounded-[30px] font-medium">Rating: {book.rating}</p>
                    <div>
                        <Link className="bg-[#23BE0A] text-white px-4 py-2 rounded-[30px] font-medium"><button>View Details</button></Link>
                    </div>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadBooks;
