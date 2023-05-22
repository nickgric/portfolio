import {
  ExperienceBox,
  ExperienceItem,
  DeveloperIcon,
  AuthorIcon,
} from "./ExperienceStyled";

export const Experience = () => {
  return (
    <ExperienceBox>
      <ExperienceItem
        year={"Jan 2022 - today"}
        name={"Self-employed"}
        position={"Frontend Developer"}
        review={
          "Since 2022, serving as a Frontend Developer, primarily focused on JavaScript and React. Initiated and actively developed several personal projects, most notably, MoviePocket - a movie search engine. Continuously honing skills and capabilities through practical application, demonstrating a strong ability to learn, innovate, and deliver effective web solutions."
        }
      >
        <DeveloperIcon />
      </ExperienceItem>
      <ExperienceItem
        year={"Apr 2013 - today"}
        name={"Self-employed"}
        position={"IT Journalist"}
        review={
          "Since 2013, served as an IT Journalist, writing over 7000 articles on diverse topics including Apple products, hi-tech, lifestyle, new gadgets, software, science, cars, and space. Contributed to prominent platforms like iPhones, Trashbox, re:Store, and other renowned media outlets. Demonstrated ability to translate complex technical concepts into accessible content, and kept abreast of latest industry trends."
        }
      >
        <AuthorIcon />
      </ExperienceItem>
    </ExperienceBox>
  );
};
