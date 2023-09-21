import Navbar from "./components/Navbar/navbar"
import Intro from "./components/Intro/intro"
import Skills from "./components/Skills/skill"
import Works from "./components/Works/work"
import Contact from "./components/Contacts/contact"



function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
