
import Rating from 'react-rating';
import quote from '../../../assets/icons/quote.svg'
import { ImStarEmpty } from 'react-icons/im';
import { FaStar } from 'react-icons/fa';

const Feedback = ({ feedback }) => {
  const { name, img, profession, ratings, description } = feedback;
  return (
    <div className="card bg-white  shadow-xl border p-12 ">
      
      <div className="grid grid-cols-4 gap-x-5 items-center">
      <figure className='rounded-full w-[60px] '>
        <img
          src={img}
          alt="Shoes"
          
        />
      </figure>
        <div className='col-span-2'>
        <h2 className="card-title">{name}</h2>
        <p className="font-bold text-gray-400">{profession}</p>
        </div>
        <img src={quote} alt="" className='w-[56px] ml-8 ' />
      </div>
      
      <p className='my-5'>
        {description}
      </p>
      <div className="text-xl text-yellow-500">
          <Rating
          initialRating={ratings}
          readonly
            emptySymbol={
              <ImStarEmpty />

            }
            fullSymbol={
              <FaStar />

            }
          />
        </div>
    </div>
  );
};

export default Feedback;
