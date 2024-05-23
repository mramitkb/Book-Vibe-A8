import { FaRegStar } from "react-icons/fa6";
import "../../index.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { image, tags, bookName, author, category, rating } = book;
  return (
    <Link className="border p-5 rounded-xl text-left space-y-5 my-10">
      <div className="bg-[#F3F3F3] p-5 rounded-2xl">
        <img className="w-fit h-40 mx-auto" src={image} alt="" />
      </div>
      <div className="flex items-center justify-start gap-5">
        <p className="text-[#23BE0A] bg-[#F4FCF3] px-4 py-2 rounded-[30px] font-medium">
          {tags[0]}
        </p>
        <p className="text-[#23BE0A] bg-[#F4FCF3] px-4 py-2 rounded-[30px] font-medium">
          {tags[1]}
        </p>
      </div>
      <h3 className="playfair text-2xl font-bold text-[#131313]">{bookName}</h3>
      <p className="font-medium">By: {author}</p>
      <hr className="my-4 border-dashed" />
      <div className="flex items-center justify-between font-medium">
        <p>{category}</p>
        <div className="flex items-center justify-center gap-3">
          <span>{rating}</span>{" "}
          <span>
            <FaRegStar />
          </span>
        </div>
      </div>
    </Link>
  );
};
BookCard.propTypes = {
  book: PropTypes.object,
};

export default BookCard;
