import React from 'react';

const Promo = () => (
  <div className="w-full my-5 rounded-md">
    <div className="flex flex-row justify-between items-center bg-[#080805] p-4 rounded-t-md">
      <h1 className="text-lg text-[#f3f1f0] font-medium">Promo</h1>
      <div className="flex flex-row items-center transition-all ease cursor-pointer hover:text-primary justify-start">
      </div>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mt-5 gap-1 md:gap-4">
      <a className="relative card-wrap flex flex-col rounded-md items-stretch justify-center hover:border-orange-500 transition-all ease cursor-pointer bg-white border" href="/products/aa4cb4d4-4be1-4ba1-f058-08dbf0d31dba">
        <div className="overflow-hidden">
          <img
            loading="lazy"
            src="https://store.tdafrica.com/pub/media/catalog/product/u/p/uploaded_1c214b9fe6a65ee3cc7e14d840ce89dc.jpg"
            alt="SAMSUNG GALAXY BUDs 2 GRAPHITE."
            className="w-full h-52 hover:scale-105 transition-all ease object-contain"
          />
        </div>
        <div className="xs:pl-4 pt-4 p-5 text-md">
          <p className="text-sm md:text-md mb-4">
            SAMSUNG GALAXY BUDs 2 GRAPHITE...
          </p>
          <span className="sm:text-xl text-md text-[#FF6000] font-medium sm:font-semibold">
            <span className="text-xs font-light sm:font-medium sm:text-sm">₦</span>134,670.9
          </span>
          <p className="text-sm text-gray-500 line-through">
                    ₦150,000
                  </p>
        </div>
      </a>
      <a className="relative card-wrap flex flex-col rounded-md items-stretch justify-center hover:border-orange-500 transition-all ease cursor-pointer bg-white border">
        <div className="overflow-hidden">
          <img
            loading="lazy"
            src="https://store.tdafrica.com/pub/media/catalog/product/i/p/iphone_15_plus_blue_1.png"
            alt="iPhone 15 Plus 256GB Blue"
            className="w-full h-52 hover:scale-105 transition-all ease object-contain"
          />
        </div>
        <div className="xs:pl-4 pt-4 p-5 text-md">
          <p className="text-sm md:text-md mb-4">iPhone 15 Plus 256GB Blue</p>
          <span className="sm:text-xl text-md text-[#FF6000] font-medium sm:font-semibold">
            <span className="text-xs font-light sm:font-medium sm:text-sm">₦</span>1,485,714.15
          </span>
          <p className="text-sm text-gray-500 line-through">
                    ₦1,500,000
                  </p>
        </div>
      </a>
      <a className="relative card-wrap flex flex-col rounded-md items-stretch justify-center hover:border-orange-500 transition-all ease cursor-pointer bg-white border">
        <div className="overflow-hidden">
          <img
            loading="lazy"
            src="https://store.tdafrica.com/pub/media/catalog/product/w/1/w1a78a.png"
            alt="HP Color LaserJet Pro M479fnw"
            className="w-full h-52 hover:scale-105 transition-all ease object-contain"
          />
        </div>
        <div className="xs:pl-4 pt-4 p-5 text-md">
          <p className="text-sm md:text-md mb-4">HP Color LaserJet Pro M479fnw</p>
          <span className="sm:text-xl text-md text-[#FF6000] font-medium sm:font-semibold">
            <span className="text-xs font-light sm:font-medium sm:text-sm">₦</span>681,585.3
          </span>
          <p className="text-sm text-gray-500 line-through">
                    ₦750,000
                  </p>
        </div>
      </a>
      <a className="relative card-wrap flex flex-col rounded-md items-stretch justify-center hover:border-orange-500 transition-all ease cursor-pointer bg-white border">
        <div className="overflow-hidden">
          <img
            loading="lazy"
            src="https://store.tdafrica.com/pub/media/catalog/product/s/c/screenshot_48_.png"
            alt="SAMSUNG GALAXY BUDs PRO BLACK"
            className="w-full h-52 hover:scale-105 transition-all ease object-contain"
          />
        </div>
        <div className="xs:pl-4 pt-4 p-5 text-md">
          <p className="text-sm md:text-md mb-4">SAMSUNG GALAXY BUDs PRO BLACK</p>
          <span className="sm:text-xl text-md text-[#FF6000] font-medium sm:font-semibold">
            <span className="text-xs font-light sm:font-medium sm:text-sm">₦</span>123,286.8
          </span>
          <p className="text-sm text-gray-500 line-through">
                    ₦150,000
                  </p>
        </div>
      </a>
      <a className="relative card-wrap flex flex-col rounded-md items-stretch justify-center hover:border-orange-500 transition-all ease cursor-pointer bg-white border">
        <div className="overflow-hidden">
          <img
            loading="lazy"
            src="https://store.tdafrica.com/pub/media/catalog/product/p/i/pimg_2-270x270.jpg"
            alt="OPPO RENO 8 T 4G BLACK (256+8) CPH2481"
            className="w-full h-52 hover:scale-105 transition-all ease object-contain"
          />
        </div>
        <div className="xs:pl-4 pt-4 p-5 text-md">
          <p className="text-sm md:text-md mb-4">OPPO RENO 8 T 4G BLACK (256+8)...</p>
          <span className="sm:text-xl text-md text-[#FF6000] font-medium sm:font-semibold">
            <span className="text-xs font-light sm:font-medium sm:text-sm">₦</span>232,050
          </span>
          <p className="text-sm text-gray-500 line-through">
                    ₦250,000
                  </p>
        </div>
      </a>
    </div>
  </div>
);

export default Promo;