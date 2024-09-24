import "./App.css";
import Layout from "./components/layout";
import Home from "./components/Home";
import Contact from "./components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeBuilder from "./components/ResumeBuilder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="resumebuilder" element={<ResumeBuilder />} />
          <Route
            exact
            path="resumebuilder/template/:templateNumber"
            element={<ResumeBuilder />}
          />
          <Route exact path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
