import React from 'react';

const Main = () => {
    return (
      <div id='home' className='w-full  p-2 flex flex-col items-center py-20'>
        <div className='max-w-[1240px] m-auto' >
          <div className='text-center py-4'>
            <h2>Ryan Dagley presents</h2>
          </div>
          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-102 duration-300'>
            <img
              className='rounded-xl'
              src="https://ai-nihonga-media.s3.us-west-2.amazonaws.com/public/ainihongabg.png"
              alt="/"
            />
          </div>
          <div className='text-center py-4 text-gray-600'>
            <p>
              Crimson blooms take flight,<br />
              Cherry blossoms in the breeze,<br />
              Spring's red-winged delight.
            </p>
          </div>
        </div>
        
      </div>
    );
  };
  

export default Main