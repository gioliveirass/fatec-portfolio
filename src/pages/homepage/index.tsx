import AboutMe from "./sections/aboutMe";
import Projects from "./sections/projects";
import Services from "./sections/services";
import Start from "./sections/start";

export default function Homepage() {
  return (
    <>
      <Start />
      <AboutMe />
      <Projects />
      <Services />
    </>
  );
}
