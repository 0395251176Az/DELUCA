'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Golf Fashion 1',
    description:
      'Hòa mình vào thế giới thời trang chơi gôn với sự tinh tế ',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'react js',
    name: 'Golf Fashion 2',
    description:
      'Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'next js',
    name: 'Golf Fashion 2',
    description:
      'Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'next js',
    name: 'Golf Fashion 3',
    description:
      'Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'next js',
    name: 'Golf Fashion 4',
    description:
      'Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'next js',
    name: 'Golf Fashion 5',
    description:
      'Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'fullstack',
    name: 'Golf Fashion 6',
    description:
      'Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'fullstack',
    name: 'Golf Fashion 7',
    description:
      'Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'fullstack',
    name: 'Golf Fashion 8',
    description:
      'Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.',
    link: '/',
    github: '/',
  },
];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>New Projects</h2>
          <p className='subtitle mb-8'>
            Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.
          </p>
          <Link href='/projects'>
            <Button>All DELUCA</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
