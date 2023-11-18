import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularManu from "./PopularManu";
import Testimonials from "./Testimonials";
import CartNum from "./CartNum";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularManu></PopularManu>
            <CartNum></CartNum>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;