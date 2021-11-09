import styles from "./App.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Containers/Home";
import About from "./Containers/About";
import Projects from "./Containers/Projects";

function App() {
  return (
    <Router className={styles.App}>
      <NavBar />
      <Routes>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
