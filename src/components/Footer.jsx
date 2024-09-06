import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-4 px-6">
      <div className="mx-auto text-center md:flex md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} ShoppyGlobe. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4 md:mt-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
