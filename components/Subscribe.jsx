import React from 'react';

function Subscribe()
{
  return (
    <div className="relative bg-custom-blue flex flex-col items-baseline justify-center p-40 gap-4 rounded-md">
        <h2  className="text-2xl text-white font-bold">Subscribe for Updates</h2>
        <div className="relative">
          <div className="relative flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 pl-4 pr-32 border border-white rounded-full"
            />
            <button className="absolute right-1 top-1 bg-black text-white text-custom-blue p-2 pl-6 pr-6 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        <p className="text-white">Be the first to hear about our newest product updates!</p>
    </div>
  );
};

export default Subscribe;