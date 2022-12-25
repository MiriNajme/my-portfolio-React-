import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/homepage/homepage.component";
import Navigation from "./routes/navigation/navigation.component";
import Projects from "./components/projects/projects.component";

import "./App.css";
import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer";
import { Fragment } from "react";

const App = () => (
  <Fragment>
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="checkout" element={<Checkout />} /> */}
      </Route>
    </Routes>

    <Footer />
  </Fragment>
);

export default App;
