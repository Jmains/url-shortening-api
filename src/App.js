import "./App.css";
import ShortenUrl from "./components/shorten-url/ShortenUrl";
import Hero from "./sections/Hero/Hero";
import Statistics from "./sections/Statistics/Statistics";

function App() {
  return (
    <>
      <Hero />
      <ShortenUrl />
      <Statistics />
    </>
  );
}

export default App;
