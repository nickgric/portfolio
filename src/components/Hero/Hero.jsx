import { Container } from "../Container";

import {
  HeroBox,
  CarouselBox,
  CarouselItem,
  MoviePocket,
  Wallet,
  ProjectAbout,
  VSCodeIcon,
  HtmlIcon,
  CssIcon,
  MarkdownIcon,
  JsIcon,
  ReactIcon,
  GitIcon,
  WordPressIcon,
  ChatGPT,
  NodeIcon,
  PhoneBook,
  WebStudio,
} from "./HeroStyled";

export const Hero = () => {
  return (
    <HeroBox>
      <Container>
        <CarouselBox>
          <CarouselItem>
            <MoviePocket />
            <ProjectAbout
              title={"MoviePocket"}
              year={"2023"}
              version={"alpha"}
              about={
                "Developed an alpha-version of MoviePocket, a personal project serving as a movie-searching app, leveraging TMDB data. Built using React and styled with the Chakra UI library, demonstrating proficiency in modern frontend technologies and UI design. The project underscores the ability to create functional, user-friendly web applications."
              }
              live={"https://moviepocket.netlify.app/"}
              github={"https://github.com/nickgric/moviepocket"}
            >
              <VSCodeIcon />
              <HtmlIcon />
              <CssIcon />
              <JsIcon />
              <ReactIcon />
              <GitIcon />
            </ProjectAbout>
          </CarouselItem>
          <CarouselItem>
            <Wallet />
            <ProjectAbout
              title={"Wallet"}
              year={"2023"}
              version={"beta"}
              about={
                "Collaborated on a team pet-project, Wallet - a beta-version personal expenses and income control app. As the Frontend Developer, used React and Chakra UI for an intuitive user interface. Worked closely with the backend team utilizing Node.js and MongoDB for data management. The project highlights teamwork, as well as full-stack development understanding."
              }
              live={"https://wallet-goit-fsv.netlify.app/"}
              github={"https://github.com/Sergeyfilatyev/wallet-goit-ui"}
            >
              <VSCodeIcon />
              <HtmlIcon />
              <CssIcon />
              <JsIcon />
              <ReactIcon />
              <NodeIcon />
              <GitIcon />
            </ProjectAbout>
          </CarouselItem>
          <CarouselItem>
            <PhoneBook />
            <ProjectAbout
              title={"PhoneBook"}
              year={"2023"}
              version={"alpha"}
              about={
                "Six months ago, developed a alpha version of PhoneBook, a React-based project styled with Material UI. This project represents my ongoing growth as a developer and showcases my ability to create functional, interactive applications. Envisaged as a future application for managing customer contact data, this project reflects my forward-thinking approach and potential for delivering business-focused solutions."
              }
              live={"https://nickgric.github.io/goit-react-hw-08-phonebook/"}
              github={"https://github.com/nickgric/goit-react-hw-08-phonebook"}
            >
              <VSCodeIcon />
              <HtmlIcon />
              <CssIcon />
              <JsIcon />
              <ReactIcon />
              <GitIcon />
            </ProjectAbout>
          </CarouselItem>
          <CarouselItem>
            <WebStudio />
            <ProjectAbout
              title={"WebStudio"}
              year={"2022"}
              version={"demo"}
              about={
                "A year ago, developed a website, WebStudio, for a budding studio using only HTML and CSS. This project signified the starting point of my web development journey, laying a strong foundation in essential frontend technologies. The growth since then has been exponential, advancing to complex libraries and frameworks such as React, and delivering more sophisticated, dynamic web applications today."
              }
              live={"https://nickgric.github.io/goit-markup-hw-08/"}
              github={"https://github.com/nickgric/goit-markup-hw-08"}
            >
              <VSCodeIcon />
              <HtmlIcon />
              <CssIcon />
              <GitIcon />
            </ProjectAbout>
          </CarouselItem>
        </CarouselBox>
      </Container>
    </HeroBox>
  );
};
