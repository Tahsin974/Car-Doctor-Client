import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="hero bg-white min-h-screen my-32">
      <div className="hero-content grid lg:grid-cols-2 grid-cols-1  lg:gap-x-14 gap-y-14 justify-items-center items-center">
        <div className=" relative lg:mb-0 mb-32">
        <img
          src={person}
          className="w-4/5 rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="w-3/5 rounded-lg shadow-2xl absolute top-1/2 right-8 border-8 border-white"
        />
        </div>
        <div id='about'>
        <h4 className='lg:text-3xl text-2xl text-red-500 font-bold mb-3 text-center lg:text-left'>About Us</h4>
          <h1 className="lg:text-5xl text-4xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p className="py-6">
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  
          </p>
          <button className="btn btn-md  text-white font-bold bg-red-500 border-red-500 hover:bg-red-500 hover:border-red-500">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
