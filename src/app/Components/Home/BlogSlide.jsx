"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';







const BlogSlide = () => {
  return (
    <div className='ourContainer '>
      <div className='md:flex justify-between items-center'>
        <h1 className='font-extrabold out-text uppercase'>TCL MUMBAI - BlogSlide</h1>

        <div className="btnCon flex justify-start md:justify-between items-center gap-5">
          <p className='bg-red-600 p-2 my-1 Tabarrow-right cursor-pointer'>L</p>
          <p className='bg-red-600 p-2 my-1 Tabarrow-left cursor-pointer'>R</p>
        </div>
      </div>


        <main className='mt-7'>
            <Swiper
            navigation={{ nextEl: ".Tabarrow-right", prevEl: ".Tabarrow-left" }}
            modules={[FreeMode, Navigation]}
          allowTouchMove={true}
          spaceBetween={30} 
            breakpoints={{
              320: {
                slidesPerView: 1, // For mobile devices
              },
              768: {
                slidesPerView: 2.2, // For tablets
              },
              1024: {
                slidesPerView: 3.1, // For desktops
              },
            }}
            >
                <SwiperSlide>
                  <div className='bg-slate-500 h-[600px]'>
                    <div className="h-[50%]">
                      <img src="/aboutImages/ab1.jpg" className='h-full w-full object-conver' alt="" />
                    </div>
                    <div className="px-3 flex flex-col justify-around">
                      <h1 className='text-xl font-medium py-2'>heading 1</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nulla esse. Vel voluptatum rerum omnis, dolor a reprehenderit vitae possimus, quae, harum asperiores voluptatem? Laudantium beatae cupiditate delectus corporis veritatis eum error sapien</p>

                      <a className='pt-14'>Read more</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='bg-slate-500 h-[600px]'>
                    <div className="h-[50%]">
                      <img src="/aboutImages/ab1.jpg" className='h-full w-full object-conver' alt="" />
                    </div>
                    <div className="px-3 flex flex-col justify-around">
                      <h1 className='text-xl font-medium py-2'>heading 2</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nulla esse. Vel voluptatum rerum omnis, dolor a reprehenderit vitae possimus, quae, harum asperiores voluptatem? Laudantium beatae cupiditate delectus corporis veritatis eum error sapien</p>

                      <a className='pt-14'>Read more</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='bg-slate-500 h-[600px]'>
                    <div className="h-[50%]">
                      <img src="/aboutImages/ab1.jpg" className='h-full w-full object-conver' alt="" />
                    </div>
                    <div className="px-3 flex flex-col justify-around">
                      <h1 className='text-xl font-medium py-2'>heading 3</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nulla esse. Vel voluptatum rerum omnis, dolor a reprehenderit vitae possimus, quae, harum asperiores voluptatem? Laudantium beatae cupiditate delectus corporis veritatis eum error sapien</p>

                      <a className='pt-14'>Read more</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='bg-slate-500 h-[600px]'>
                    <div className="h-[50%]">
                      <img src="/aboutImages/ab1.jpg" className='h-full w-full object-conver' alt="" />
                    </div>
                    <div className="px-3 flex flex-col justify-around">
                      <h1 className='text-xl font-medium py-2'>heading 4</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nulla esse. Vel voluptatum rerum omnis, dolor a reprehenderit vitae possimus, quae, harum asperiores voluptatem? Laudantium beatae cupiditate delectus corporis veritatis eum error sapien</p>

                      <a className='pt-14'>Read more</a>
                    </div>
                  </div>
                </SwiperSlide>
            </Swiper>
        </main>

    </div>
  )
}

export default BlogSlide