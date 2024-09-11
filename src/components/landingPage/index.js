import React from "react";

import Home from "../landingPage/homeScreen/index";
import About from "../landingPage/aboutScreen/index";
import Header from "../landingPage/homeScreen/Header";
import Footer from "../landingPage/homeScreen/Footer";
import ChooseScreen from "./chooseScreen";
import ServiceScreen from "./serviceScreen";
import BlockScreen from "./blogScreen";
import TeamScreen from "./teamScreen";
import SubscriptionScreen from "../landingPage/subscriptionScreen/index";
import TestimonialScreen from "./testimonialScreen";
function Landing() {
  return (
    <div >
      <div className="banner-background">
      <Header />
      <Home />
      </div>

    
      
      <About />
      <ChooseScreen />
      <ServiceScreen />
      <BlockScreen />
      <TeamScreen />
      <SubscriptionScreen />
      <TestimonialScreen />
      <Footer />
    </div>
  );
}

export default Landing;
