import React from "react";
import FeaturedSection from "../components/FeaturedSection";
import Banner from "../components/Banner";
import bannerData from "../data/BannerData"
export default function Home() {
  return (
    <div>

      <Banner projects={bannerData} />
      <FeaturedSection />
    </div>
  );
}
