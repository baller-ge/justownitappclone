import React from 'react';
import { SvgIcon } from '@mui/material';

const Services = () => {
  return (
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-y-10 justify-between items-center shadow-md bg-white rounded-md w-full md:divide-x-2 mt-5 sm:p-10 p-5 text-secondary">
      <div className="flex flex-row justify-start flex-auto items-center gap-7 ">
        <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1yecw8b" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalShippingTwoToneIcon">
          <path d="M3 15h.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H15V6H3v9z" opacity=".3"></path>
          <path d="M17 8V4H3c-1.1 0-2.9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4h-3zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1.45 1 1-.45 1-1 1zm9-3H8.22c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1.45 1 1-.45 1-1 1zm-1-6V9.5h2.5l1.96 2.5H17z"></path>
        </SvgIcon>
        <div className="">
          <p className="font-semibold text-lg">Pick-up &amp; Drop-Off Delivery</p>
          <p className="text-gray-500 text-sm">Free shipping on all order</p>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center flex-auto gap-7 md:pl-7">
        <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1yecw8b" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SecurityTwoToneIcon">
          <path d="M12 3.19 5 6.3V12h7v8.93c3.72-1.15 6.47-4.82 7-8.94h-7v-8.8z" opacity=".3"></path>
          <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 19.93V12H5V6.3l7-3.11v8.8h7c-.53 4.12-3.28 7.79-7 8.94z"></path>
        </SvgIcon>
        <div className="">
          <p className="text-md font-semibold capitalize text-lg">Secure Payments</p>
          <p className="text-gray-500 text-sm">Secure, seamless transactions on all orders</p>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center flex-auto gap-7 md:pl-7">
        <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1yecw8b" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CachedTwoToneIcon">
          <path d="m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path>
        </SvgIcon>
        <div className="">
          <p className="text-md font-semibold">Online Support 24/7</p>
          <p className="text-gray-500 text-sm">Reliable customer support at any time</p>
        </div>
      </div>
    </div>
  );
};

export default Services;