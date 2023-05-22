import {
  EducationBox,
  EducationItem,
  FrontendDeveloperIcon,
  MasterEnglishIcon,
  PhDIcon,
  EconomicsIcon,
} from "./EducationStyled";

export const Education = () => {
  return (
    <EducationBox>
      <EducationItem
        year={"2022-2023"}
        name={"GoIT Academy (Ukraine, Kyiv)"}
        position={"Frontend Developer"}
        review={
          "Completed intensive Frontend Developer program at GoIT Academy, focusing on mastering JavaScript and React. Acquired strong coding skills and learned best practices for modern web development. Developed proficiency in building dynamic, user-friendly websites and applications, utilizing React to create efficient, reusable components. Successfully completed multiple projects to demonstrate and hone my skills."
        }
      >
        <FrontendDeveloperIcon />
      </EducationItem>
      <EducationItem
        year={"2017-2019"}
        name={
          "Bogdan Khmelnitsky Melitopol State Pedagogical University (Ukraine)"
        }
        position={"Master in English Language and Literature"}
        review={
          "Completed a Master's degree in English Language and Literature at Bogdan Khmelnitsky Melitopol State Pedagogical University. Acquired in-depth knowledge of English linguistic structures and literature, alongside developing strong communication and analytical skills. Achieved a high level of proficiency in written and spoken English, and demonstrated the ability to critically analyze and interpret literary works."
        }
      >
        <MasterEnglishIcon />
      </EducationItem>
      <EducationItem
        year={"2012-2015"}
        name={"Institute of Agrarian Economics (Ukraine)"}
        position={"PhD in Economics"}
        review={
          "Attained a PhD in Economics from the Institute of Agrarian Economics, focusing on the in-depth study of innovative processes. Collaborated closely with professors and industry professionals, exchanging ideas and defending hypotheses. Displayed a high level of analytical thinking, research capabilities, and the ability to contribute original insights to the field of economics."
        }
      >
        <PhDIcon />
      </EducationItem>
      <EducationItem
        year={"2008-2011"}
        name={"Tavria State Agrotechnological University, TSATU (Ukraine)"}
        position={"Master in Economics"}
        review={
          "Acquired a Master's degree in Economics from Tavria State Agrotechnological University, TSATU. Specialized in innovative economic processes, applying theoretical knowledge to practical scenarios. Developed strong analytical skills and a deep understanding of modern economic principles, contributing to a comprehensive economic perspective. Excelled in academic research, offering fresh insights into economic trends."
        }
      >
        <EconomicsIcon />
      </EducationItem>
    </EducationBox>
  );
};
