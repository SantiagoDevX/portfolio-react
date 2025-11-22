import BackgroundEffect from "./components/BackgroundEffect";
import Header from "./components/Header";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <BackgroundEffect />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <About />
          <Experience />
          <Projects />
        </main>
      </div>
    </>
  );
}

export default App;

