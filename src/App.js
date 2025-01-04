import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Main />
      {/* <MusicPlayer /> */}
    </>
  );
}

export default App;
