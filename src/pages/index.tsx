import Header from "../components/Header";
import LandingHome from "../components/LandingHome";
import SlidingCarousel from "../components/SlidingCarousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <LandingHome />
      <SlidingCarousel />
    </div>
  )
}
