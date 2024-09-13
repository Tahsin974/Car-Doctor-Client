import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Feedbacks from "../CustomerSays/feedbacks";
import Experts from "../Experts/Experts";
import Products from "../Products/Products";
import Services from "../Services/Services";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <About></About>
          <Services></Services>
          <Contact></Contact>
          <Products></Products>
          <Experts></Experts>
          <WhyChooseUs></WhyChooseUs>
          <Feedbacks></Feedbacks>
        </div>
    );
};

export default Home;