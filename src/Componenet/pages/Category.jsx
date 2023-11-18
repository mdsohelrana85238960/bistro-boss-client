import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../../src/assets/home/slide1.jpg';
import img2 from '../../../src/assets/home/slide2.jpg';
import img3 from '../../../src/assets/home/slide3.jpg';
import img4 from '../../../src/assets/home/slide4.jpg';
import img5 from '../../../src/assets/home/slide5.jpg';
import SecTitle from './SecTitle';
import Bistro from './Bistro';


const Category = () => {
    return (
        <div className='my-16'>
            <SecTitle
            subHeading={'From 11.00am to 10.00pm'}
            heading={'Order Online'} 
            ></SecTitle>
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        
      </Swiper>
      <Bistro></Bistro>
        </div>
    );
};

export default Category;