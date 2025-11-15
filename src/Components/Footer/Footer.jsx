import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import icon from '../../assets/icons8-earth-48.png';

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <img className="text-sky-700 text-center text-2xl font-bold" src={icon} alt="" />
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <div className="max-w-2xl">
        <p>Join hands to keep our neighborhoods clean! Our platform empowers communities to report, organize, and participate in local cleaning initiatives for a healthier, greener environment.</p>
      </div>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaXTwitter className="text-2xl" />
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
      
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Earth Clean.org
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
