'use client';

import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Richard Thompson',
    job: 'Golfer',
    review:
      'Tôi cực kỳ yêu thích chiếc áo polo DELUCA của tôi. Nó thoáng khí và giúp tôi mát mẻ, ngay cả dưới ánh nắng mặt trời!',
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Evelyn Anderson',
    job: 'Golfer',
    review:
      'Độ vừa vặn và thoải mái của áo sơ mi DELUCA là không gì sánh bằng. Hoàn hảo để mặc cả ngày trên sân',
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'John Doe',
    job: 'Golfer',
    review:
      'Độ co giãn của những chiếc áo sơ mi này thật tuyệt vời. Cho phép tôi thực hiện đầy đủ các chuyển động khi thực hiện cú đánh gôn.',
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Emily Smith',
    job: 'Golfer',
    review:
      'Thật sự đánh giá cao những vật liệu thân thiện với môi trường mà DELUCA sử dụng. Hiệu suất tuyệt vời và tốt cho hành tinh!',
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Oliver Taylor',
    job: 'Golfer',
    review:
      'Ấn tượng với chất lượng. Sau nhiều lần giặt, chiếc áo DELUCA của tôi vẫn trông như mới!',
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Mason Wilson',
    job: 'Golfer',
    review:
      'Vải than tre là yếu tố thay đổi cuộc chơi. Cảm giác mềm mại và khả năng chống tia cực tím là một điểm cộng lớn.',
  },
];

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className='h-[350px]'
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    <div className='flex items-center gap-x-4'>
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=''
                        priority
                      />
                      {/* name */}
                      <div className='flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
