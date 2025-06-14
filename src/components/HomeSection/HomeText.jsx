import React from 'react'

const HomeText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
        <h2 className='lg:text-2xl sm:text-xl uppercase text-cyan'>
            Embedded System Engineer
        </h2>
        <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange'>
            Tamzid Nahid
        </h1>
        <p className='text-lg mt-4 text-white'>
            Passionate Embedded System Engineer<br />
            and Full Stack Developer with 2+ years<br />
            of experience designing and implementing <br />
            efficient, real-time solutions across<br />
            embedded platforms and full-stack web technologies.
        </p>
    </div>
  );
};

export default HomeText;