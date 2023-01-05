import { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import ContactGadget from "../components/ContactGadget";
import Feedbacks from "../components/Feedbacks";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingHome from "../components/LandingHome";
import Loading from "../components/Loading";
import MenuHamburger from "../components/MenuHamburger";
import Projects from "../components/Projects";
import SlidingCarousel from "../components/SlidingCarousel";
import WhatIDo from "../components/WhatIDo";

export default function Home() {
  const [mySkills, setMySkills] = useState<any>(null)

  useEffect(() => {
    fetch('/api/skills')
    .then(resp => resp.json())
    .then(setMySkills)
  }, []);

  return (
    <div>
      {!mySkills ? (
        <Loading />
      ) : (
        <div className="flex flex-col">
          <Header />
          <MenuHamburger />
          <LandingHome />
          <SlidingCarousel />
          <ContactGadget />
          <Projects />
          <AboutMe />
          <WhatIDo />
          <Feedbacks />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  )
}
