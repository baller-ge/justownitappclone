import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-[#999999] pt-10 px-5 sm:px-20">
      <div className="flex flex-row justify-between items-center w-full">
        <p className="text-sm">© 2023 Just Own It. All Rights Reserved.</p>
        <div>
          <ul className="flex flex-row gap-5">
            <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;