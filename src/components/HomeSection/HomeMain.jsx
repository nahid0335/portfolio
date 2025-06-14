import React from 'react'
import HomeText from './HomeText'
import HomePic from './HomePic'

const HomeMain = () => {
  return (
    <div className=" pt-40 pb-16">
        <div className="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
            <HomeText/>
            <HomePic/>
        </div>
    </div>
  );
};

export default HomeMain;