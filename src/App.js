import "./css/custom.scss"; 
import "./App.css";
import "./css/style.css";
import "./css/responsive.css";

import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';

// Lazy load components
const Landing = lazy(() => import("./components/landingPage/index"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const Contact = lazy(() => import("./components/ContactUs/index"));
const Blog = lazy(() => import("./components/Blog"));
const BlogDetail = lazy(() => import("./components/BlogDetail/index"));
const Service = lazy(() => import("./components/Service/index"));
const ServiceDetail = lazy(() => import("./components/ServiceDetail/index"));
const Pages = lazy(() => import("./components/Pages/index"));
const ProjectDetail = lazy(() => import("./components/ProjectDetails"));
const Faq = lazy(() => import("./components/FaqPage/index"));
const PageNotFound = lazy(() => import("./components/404/index"));
const ScrollButton = lazy(() => import("./components/ScrollButton/Scroll"));
const Mouse = lazy(() => import("./components/Mouse/Mouse"));
const ScrollToTop = lazy(() => import("./components/landingPage/ScroolTop/Scrool"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollButton />
        <Mouse />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetail />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service-details" element={<ServiceDetail />} />
          <Route path="/project" element={<Pages />} />
          <Route path="/project-details" element={<ProjectDetail />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
