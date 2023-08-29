import About from "./components/Home/About";
import Banner from "./components/Home/Banner";
import CountDown from "./components/Home/CountDown";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <CountDown></CountDown>
    </div>
  )
}
