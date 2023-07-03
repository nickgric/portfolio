import { Box } from "@chakra-ui/react";
import { AboutBox, AboutText, AboutInfoBox, Me } from "./AboutStyled";

export const About = () => {
  return (
    <AboutBox>
      <Me />
      <AboutInfoBox>
        <AboutText text={"Fullstack Developer | Toronto, ON, Canada"} hard />
        <AboutText
          text={
            "Seasoned IT professional with extensive experience in the tech industry, now a proficient Fullstack Developer. Passionate about new technologies and their transformative potential. Expert in React JS and Node JS, as gained from the rigorous Fullstack Developer program at GoIT Academy. Excels in creating user-friendly websites and dynamic applications. Strong critical thinking and problem-solving skills enhance the ability to overcome technical challenges, while excellent communication and teamwork skills facilitate effective collaboration. Renowned for resilience under pressure and adept time management in remote work settings. Leverages the background as an IT journalist to articulate complex technical concepts clearly and engagingly. Still thrilled by the tech world, now contributing to its evolution directly."
          }
        />
      </AboutInfoBox>
    </AboutBox>
  );
};
