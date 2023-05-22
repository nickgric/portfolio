import {
  AdditionalBox,
  AdditionalItem,
  EducatorIcon,
  MarketingIcon,
  EconomistIcon,
  EngineerIcon,
} from "./AdditionalStyled";

export const Additional = () => {
  return (
    <AdditionalBox>
      <AdditionalItem
        year={"2015-2022"}
        name={"Tavria State Agrotechnological University, TSATU (Ukraine)"}
        position={"Educator (Full-time, On-site)"}
        review={
          "Served as an Educator at TSATU, developing and delivering engaging curriculum to diverse student groups. Skilled at utilizing innovative teaching techniques to optimize student understanding. Demonstrated ability in managing classroom dynamics, assessing student progress, and providing feedback for improvement. Recognized for fostering a positive, inclusive learning environment."
        }
      >
        <EducatorIcon />
      </AdditionalItem>
      <AdditionalItem
        year={"2011-2014"}
        name={"NT Union (Ukraine)"}
        position={"Marketing Manager (Full-time, On-site)"}
        review={
          "As a Marketing Manager at NT Union, I successfully led and executed comprehensive marketing strategies, driving growth and brand awareness. Proven expertise in managing multi-channel campaigns, conducting market research, and leveraging data analytics for decision-making. Recognized for fostering cross-functional collaboration and managing stakeholder relationships."
        }
      >
        <MarketingIcon />
      </AdditionalItem>
      <AdditionalItem
        year={"2010-2011"}
        name={"MelCherry (Ukraine)"}
        position={"Economist (Full-time, On-site)"}
        review={
          "Served as an Economist at MelCherry, analyzing economic data and trends to provide strategic business insights. Successfully utilized statistical methods to forecast market trends and guide financial planning. Recognized for presenting complex economic concepts in a clear, understandable manner to influence business decisions. Proven track record in delivering data-driven solutions."
        }
      >
        <EconomistIcon />
      </AdditionalItem>
      <AdditionalItem
        year={"2009-2010"}
        name={"Melitopolvodstroy (Ukraine)"}
        position={"Engineer (Full-time, On-site)"}
        review={
          "As an Engineer at Melitopolvodstroy, I effectively managed and executed a variety of construction projects. Recognized for designing efficient systems and processes, troubleshooting issues, and maintaining high safety standards. Proven ability to collaborate with diverse teams, deliver projects on time and within budget while ensuring top quality."
        }
      >
        <EngineerIcon />
      </AdditionalItem>
    </AdditionalBox>
  );
};
