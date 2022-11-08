import { useEffect, useState } from "react";
import ContactGadget from "../components/ContactGadget";
import Header from "../components/Header";
import LandingHome from "../components/LandingHome";
import SlidingCarousel from "../components/SlidingCarousel";

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
          <LandingHome />
          <SlidingCarousel />
          <ContactGadget />
        </div>
      )}
    </div>
  )
}
