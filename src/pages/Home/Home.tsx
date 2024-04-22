import Banner from "../../components/HomeComponents/Banner/Banner";
import Diagram from "../../components/HomeComponents/Diagram/Diagram";
import Features from "../../components/HomeComponents/Features/Features";


export default function Home() {
  return (
    <div className="container max-w-5xl mx-auto">
      <Banner />
      <Features />
      <Diagram />
    </div>
  )
}
