import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("../landingPage/homeScreen/index"));
const About = lazy(() => import("../landingPage/aboutScreen/index"));
const ChooseScreen = lazy(() => import("./chooseScreen"));
const ServiceScreen = lazy(() => import("./serviceScreen"));
const BlockScreen = lazy(() => import("./blogScreen"));
const TeamScreen = lazy(() => import("./teamScreen"));
const SubscriptionScreen = lazy(() => import("../landingPage/subscriptionScreen/index"));
const TestimonialScreen = lazy(() => import("./testimonialScreen"));
const Header = lazy(() => import("../Header/index"));
const Footer = lazy(() => import("../Footer/index"));
const ScrollButton = lazy(() => import("../ScrollButton/Scroll"));
const MouseFollower = lazy(() => import("../Mouse/Mouse"));

function Landing() {
  return (
    <div>
      <div className="banner-background">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Home />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <ChooseScreen />
        <ServiceScreen />
        <BlockScreen />
        <TeamScreen />
        <SubscriptionScreen />
        <TestimonialScreen />
        <ScrollButton />
        <MouseFollower />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Landing;
