import React from 'react';
import Footer from './footer';
import Header from './header';
import Newsletter from './Newsletter';
import CategoryBanner from './CategoryBanner';
import DealsOffers from './Dealsoffers';
import HomeOutdoor from './Homeoutdoor';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CategoryBanner/>
      <DealsOffers/>
      <HomeOutdoor/>
      <main className="flex-grow">
        {/* Your main content goes here */}
      </main>
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default Layout;
