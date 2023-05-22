import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/Section";
import { HardSkills } from "../components/HardSkills";
import { NextGoals } from "../components/NextGoals";
import { Education } from "../components/Education";
import { Additional } from "../components/Additional";
import { Experience } from "../components/Experience";
import { SoftSkills } from "../components/SoftSkills";

const Main = () => {
  return (
    <>
      <Section>
        <About />
      </Section>
      <Section dark flex>
        <SectionTitle name={"Experience"} />
        <Experience />
      </Section>
      <Hero />
      <Section dark flex>
        <SectionTitle name={"Hard Skills"} />
        <HardSkills />
      </Section>
      <Section flex>
        <SectionTitle name={"Next Goals"} />
        <NextGoals />
      </Section>
      <Section dark flex>
        <SectionTitle name={"Soft Skills"} />
        <SoftSkills />
      </Section>
      <Section flex>
        <SectionTitle name={"Additional"} />
        <Additional />
      </Section>
      <Section dark flex>
        <SectionTitle name={"Education"} />
        <Education />
      </Section>
    </>
  );
};

export default Main;
