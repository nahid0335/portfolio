import React from 'react'

const SubHome = () => {
  return (
    <div className='w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-brown'>
        <p className='md:block sm:hidden'>
            Fast Learner
        </p>
        <p>
            Team Work
        </p>
        <p className='md:block sm:hidden'>
            Detail Master
        </p>
    </div>
  );
};

export default SubHome;