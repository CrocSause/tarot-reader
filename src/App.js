import TarotReading from "./components/TarotReading";
import DreamyBackground from "./components/DreamyBackground";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="container">
        <TarotReading />
      </div>
      <DreamyBackground />
    </>
  );
}
