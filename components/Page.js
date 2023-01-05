import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <nav className="bg-white">
        <div className=" mx-auto flex items-center justify-center">
          <Image src="/brother.jpg" width={150} height={80} alt="" />
          <div className="text-sm"></div>
        </div>
      </nav>
      <main className="container mx-auto py-20 flex-1">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">
          Brothers Group Of Industries
        </h1>
        <p className="text-xl text-gray-600 mx-auto w-3/4 mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          molestie, urna a tristique fermentum, ipsum est posuere leo, eu
          sollicitudin tellus odio at odio. Aliquam erat volutpat. Vivamus
          fermentum, quam a condimentum tincidunt, purus velit porta tortor, in
          auctor enim purus eu libero.
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/2 px-4 mb-8">
            <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">About</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                molestie, urna a tristique fermentum, ipsum est posuere leo, eu
                sollicitudin tellus odio at odio.
              </p>
              <Link
                href="/about"
                className="inline-block px-4 py-2 font-bold text-white bg-teal-500 rounded-full"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="w-1/2 px-4 mb-8">
            <div className="bg-gray-300 p-6 rounded-lg ">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                molestie, urna a tristique fermentum, ipsum est posuere leo, eu
                sollicitudin tellus odio at odio.
              </p>
              <Link
                href="/contact"
                className="inline-block px-4 py-2 font-bold text-white bg-teal-500 rounded-full"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
