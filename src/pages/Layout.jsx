import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Newsletter from '../components/Newsletter';
import CategoryBanner from '../components/CategoryBanner';
import DealsOffers from '../components/Dealsoffers';
import HomeOutdoor from '../components/Homeoutdoor';
import Electronics from '../components/Electronics';
import SupplierRequest from '../components/supplier';
import RecommendedItems from '../components/Items';
import ExtraServices from '../components/ExtraServices';
import SuppliersByRegion from '../components/SupplierbyRegion';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
      <CategoryBanner/>
      <DealsOffers/>
      <HomeOutdoor/>
      <Electronics/>
      <SupplierRequest/>
      <RecommendedItems/>
      <ExtraServices/>
      <SuppliersByRegion/>
      <Newsletter/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
