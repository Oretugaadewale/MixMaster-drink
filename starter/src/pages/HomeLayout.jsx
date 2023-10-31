import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => { 
  // global loading
  const navigation = useNavigation();
  // console.log(navigation)
  const isPageLoading = navigation.state === 'loading';
  // const value = 'some value';
  return (
    <>
          <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading" /> :
          <Outlet  />}
              </section>
    </>
  );
};

export default HomeLayout;
