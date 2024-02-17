import React, { useRef, useState } from "react";
import "./all.css";

const Home = () => {
  const latestRef = useRef(null);
  const popularRef = useRef(null);
  const contactRef = useRef(null);
  const forYouRef = useRef(null);
  const welcomeRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [welcomeRef, forYouRef, latestRef, popularRef, contactRef];

  const handleScrollUp = () => {
    if (currentSection) {
      sections[currentSection - 1].current.scrollIntoView({
        behavior: "smooth",
      });
      setCurrentSection(currentSection - 1);
    }
  };

  const handleScrollDown = () => {
    if (currentSection < sections.length - 1) {
      sections[currentSection + 1].current.scrollIntoView({
        behavior: "smooth",
      });
      setCurrentSection(currentSection + 1);
    }
  };

  const scrollToSection = (index) => {
    sections[index].current.scrollIntoView({ behavior: "smooth" });
    setCurrentSection(index);
  };
  return (
    //sections
    <div className="font-main overflow-auto">
      <section
        className="scroll h-screen flex items-center justify-center"
        ref={welcomeRef}
      >
        <h1>Welcome</h1>
      </section>
      <section
        className="bg-white h-screen flex items-center justify-center"
        ref={forYouRef}
      >
        <h1>Welcome</h1>
      </section>
      <section
        className="bg-gray-100 h-screen flex items-center justify-center"
        ref={latestRef}
      >
        <h1>Welcome</h1>
      </section>
      <section
        className="bg-white h-screen flex items-center justify-center"
        ref={popularRef}
      >
        <h1>Welcome</h1>
      </section>
      <section
        className="bg-gray-100 h-screen flex items-center justify-center"
        ref={contactRef}
      >
        <h1>Welcome</h1>
      </section>{" "}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2024 Myvet. All rights reserved.</p>
      </footer>
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
        <button
          className={`bg-primary text-white px-4 py-2 rounded-lg ${
            currentSection === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleScrollUp}
        >
          Scroll Up
        </button>
        {currentSection < sections.length - 1 ? (
          <button
            className={`bg-primary text-white px-4 py-2 rounded-lg ${
              currentSection === sections.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={handleScrollDown}
          >
            Scroll Down
          </button>
        ) : (
          <button
            className="bg-primary text-white px-4 py-2 rounded-lg"
            onClick={() => scrollToSection(0)}
          >
            Go Back Up
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
