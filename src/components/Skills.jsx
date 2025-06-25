import "./Skills.css"
import algoritm from "../assets/algoritm.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


function Skills() {
    return (
        <div className="Skills">
            <h2>My <span>Skills</span></h2>
            <Swiper slidesPerView={5} spaceBetween={10} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper">
                <SwiperSlide><div className="skills-img"><img src={algoritm} /></div></SwiperSlide>
                <SwiperSlide><div className="skills-img"><img src={algoritm} /></div></SwiperSlide>
                <SwiperSlide><div className="skills-img"><img src={algoritm} /></div></SwiperSlide>
                <SwiperSlide><div className="skills-img"><img src={algoritm} /></div></SwiperSlide>
                <SwiperSlide><div className="skills-img"><img src={algoritm} /></div></SwiperSlide>
                <SwiperSlide><div className="skills-img"><img src={algoritm} /></div></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Skills