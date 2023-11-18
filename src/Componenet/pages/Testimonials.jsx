import SecTitle from "./SecTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { BiSolidQuoteLeft } from 'react-icons/Bi';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

// console.log(reviews)
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className="my-16">
            <SecTitle heading={'TESTIMONIALS'}
            subHeading={'What Our Clients Say'} ></SecTitle>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
   {
    reviews.map(review =>  <SwiperSlide key={review._id}>
        <div className="m-24 text-center w-[800px] mx-auto">
        
   <div className="flex flex-col m-16  items-center">
   <Rating
        
        style={{ maxWidth: 180 }}
        value={review.rating}
        readOnly
      />
   </div>
    
    <div className="text-8xl text-center mb-8 flex justify-center items-center ">
    <BiSolidQuoteLeft></BiSolidQuoteLeft>
    </div>
  
            <p>{review.details}</p>
            <h2 className=" mt-4 text-2xl uppercase text-yellow-400">{review.name}</h2>
        </div>
        
        </SwiperSlide>)
   }
      </Swiper>
            
        </div>
    );
};

export default Testimonials;