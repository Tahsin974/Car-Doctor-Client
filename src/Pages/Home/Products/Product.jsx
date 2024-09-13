import { FaStar } from "react-icons/fa";
import { ImStarEmpty } from "react-icons/im";
import Rating from "react-rating";

const Product = ({ product }) => {
  const { title, price, img,rating } = product;
  return (
    <div className="card bg-white shadow-xl border border-[#E8E8E8]">
      <figure>
        <img src={img} alt="Products" className="h-[215px]" />
      </figure>
      <div className="card-body text-center items-center">
        <div className="text-xl text-yellow-500">
          <Rating
          initialRating={rating}
          readonly
            emptySymbol={
              <ImStarEmpty />

            }
            fullSymbol={
              <FaStar />

            }
          />
        </div>
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="font-bold text-red-500 text-lg">Price: ${price}</p>
      </div>
    </div>
  );
};

export default Product;
