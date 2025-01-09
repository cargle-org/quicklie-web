import React from "react";
import Hero from "./Hero";
// import ByCategory from "./ByCategory";
// import LatestArrivals from "./LatestArrivals";
import WhatIsQuicklie from "./WhatIsQuicklie";
import OurProducts from "./OurProducts";
// import Services from "./Services";

const Landing = () => {
  return (
    <div className="flex flex-col gap-32">
      {/* Home */}
      <Hero />
      <div className="flex flex-col gap-44 lg:w-[80%] mx-auto">
        <WhatIsQuicklie />
        <OurProducts />
        {/* <ByCategory />
        <LatestArrivals /> */}
        {/* <Services /> */}
      </div>
    </div>
  );
};

export default Landing;
