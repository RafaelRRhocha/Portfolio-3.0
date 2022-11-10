import { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import ContactGadget from "../components/ContactGadget";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingHome from "../components/LandingHome";
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
        <picture className="h-full w-full bg-black">
          <img
            src="https://user-images.githubusercontent.com/99758843/185761535-b0fe5cf6-49e2-44f8-bd35-64100d247654.gif"
            alt="loading"
            className='h-[200px] w-[200px] m-auto mt-[10%]'
          />
        </picture>
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
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  )
}
