import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const Books = () => {    

    const [books, setBooks] = useState([]);
    console.log(books)

    // event handler
    // const handleBooksCard = () =>{

    // }

    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="mt-12 text-center">
            <h2 className="text-[40px] font-bold text-[#131313]">Books</h2>
            {/* book card */}
            <div className="grid grid-cols-3 gap-5">
                {
                    books.map((book)=><BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;