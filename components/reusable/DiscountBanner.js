import React from "react";

const DiscountBanner = () => {
  return (
    <div className="bg-defaultBorder p-1 text-center">
      <h6 className="text-sm font-medium text-black hover:text-black">
        <span className="font-bold">LIMITED TIME OFFER:&nbsp;&nbsp;</span>
        Get 20% off this template! &nbsp;&nbsp;&nbsp;&nbsp;Use code&nbsp;
        <span className="font-black text-purple">EARLYBIRD30</span>&nbsp;at
        checkout.
      </h6>
    </div>
  );
};

export default DiscountBanner;
