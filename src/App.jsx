import BackgroundEffect from "./components/BackgroundEffect";
import Header from "./components/Header";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

import "./App.css";

function App() {
  return (
    <>
      <BackgroundEffect />
      <div className="container">
        <Header />
        <main className="main">
          <About />
          <Experience />
          <Projects />
        </main>
      </div>
    </>
  );
}

export default App;
