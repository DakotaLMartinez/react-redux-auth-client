import React from "react";
import { ImSpinner3 } from "react-icons/im";

const LoadingSpinner = () => {
  return (
    <div className='fixed top-0 flex items-center loadingtop-0 w-screen h-screen z-20 bg-gray-700 bg-opacity-70'>
      <div className='text-5xl text-white text-center w-10 mx-auto'>
        <ImSpinner3 className='animate-spin' />
      </div>
    </div>
  );
};

export default LoadingSpinner;
