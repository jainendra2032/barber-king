import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h2 className="text-white text-xl font-semibold">Barber King</h2>
          </div>
          <div className="w-full sm:w-auto">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-800" />
        <p className="text-gray-400 text-sm text-center">
          &copy; {new Date().getFullYear()} Jainendra Singh. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
