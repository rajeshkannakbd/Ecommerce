import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900   text-white px-4 pt-6">
      {/* Top Footer Grid */}
      <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-6 lg:gap-0 mx-auto py-10 px-10">
        {/* Column 1 */}
        <div className="min-w-[200px]">
          <h1 className="text-slate-500 mb-2 text-lg font-normal">About</h1>
          <ul className="space-y-1 text-sm font-medium">
            <li>Contact us</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Shopcart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="min-w-[200px]">
          <h1 className="text-slate-500 mb-2 text-lg font-normal">Group Companies</h1>
          <ul className="space-y-1 text-sm font-medium">
            <li>XXX Company</li>
            <li>YYY Company</li>
            <li>ZZZ Company</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="min-w-[200px]">
          <h1 className="text-slate-500 mb-2 text-lg font-normal">Help</h1>
          <ul className="space-y-1 text-sm font-medium">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="min-w-[200px]">
          <h1 className="text-slate-500 mb-2 text-lg font-normal">Customer Policy</h1>
          <ul className="space-y-1 text-sm font-medium">
            <li>Cancellation & Returns</li>
            <li>Terms of use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Site Map</li>
            <li>EPR Compliance</li>
          </ul>
        </div>

        {/* Column 5 - Mail Us */}
        <div className="min-w-[200px] border-t lg:border-t-0 lg:border-l border-slate-700 pt-4 lg:pt-0 lg:pl-4">
          <h1 className="text-slate-500 mb-2 text-lg font-normal">Mail Us</h1>
          <ul className="space-y-1 text-sm font-medium">
            <li>Shop Cart India Private Limited</li>
            <li>Building Alyssa, Begonia &</li>
            <li>Clove Embassy, Tech Village</li>
            <li>Trichy-620013</li>
            <li>TamilNadu, India</li>
          </ul>
          <div className="mt-4">
            <ul className="flex gap-4 text-sm">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Youtube</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        {/* Column 6 - Registered Office */}
        <div className="min-w-[200px]">
          <h1 className="text-slate-500 mb-2 text-lg font-normal">
            Registered Office Address:
          </h1>
          <ul className="space-y-1 text-sm font-medium">
            <li>Shop Cart Private Limited</li>
            <li>Building Alyssa, Begonia &</li>
            <li>Clove Embassy, Tech Village</li>
            <li>Trichy-620013</li>
            <li>TamilNadu, India</li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-slate-700" />

      {/* Bottom Footer Links */}
      <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300 pb-6">
        <span>Become A Seller</span>
        <span>Advertise</span>
        <span>Gift Cards</span>
        <span>Help Center</span>
        <span>© 2025 ShopCart.com</span>
        <span>RazorPay</span>
      </div>
    </div>
  );
};

export default Footer;
