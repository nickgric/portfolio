import {
  SoftSkillsBox,
  SoftSkillsItem,
  TeamworkIcon,
  CriticalIcon,
  TimeIcon,
  CommunicationIcon,
  ProblemIcon,
  StressIcon,
} from "./SoftSkillsStyled";

export const SoftSkills = () => {
  return (
    <SoftSkillsBox>
      <SoftSkillsItem
        name={"Teamwork"}
        review={
          "Highly skilled in teamwork and collaboration, with a proven track record in cultivating a productive team environment. Demonstrated experience in leveraging diverse perspectives and abilities to achieve shared goals. Expert in conflict resolution, ensuring smooth team dynamics, and fostering a culture of mutual respect and cooperation. Recognized for clear communication, adept at mediating disagreements and building consensus. Skilled in coordinating efforts across teams to maximize efficiency, meet deadlines, and deliver high-quality results."
        }
      >
        <TeamworkIcon />
      </SoftSkillsItem>
      <SoftSkillsItem
        name={"Critical Thinking"}
        review={
          "Distinguished by strong critical thinking skills, adept at analyzing complex problems, making informed decisions, and implementing effective solutions. A proven track record in independently evaluating situations, identifying underlying issues, and determining optimal courses of action. Skilled in rational thinking, employing a logical, methodical approach to problem-solving. Demonstrated ability to apply a keen understanding of intricate business processes, question assumptions, and challenge conventional thinking to drive innovation and improvement."
        }
      >
        <CriticalIcon />
      </SoftSkillsItem>
      <SoftSkillsItem
        name={"Time Management"}
        review={
          "Accomplished in time management with extensive experience in remote work settings. Skilled at balancing multiple tasks, meeting tight deadlines, and prioritizing work effectively to ensure optimal productivity. Proficient in using digital tools for task management and virtual collaboration, which promotes efficiency in remote environments. Renowned for self-discipline and a proactive approach, maintaining focus, and achieving targets while working remotely. Successfully navigated the challenges of time zone differences, and managed seamless communication with global teams."
        }
      >
        <TimeIcon />
      </SoftSkillsItem>
      <SoftSkillsItem
        name={"Communication"}
        review={
          "Exceptional communicator, adept at conveying complex ideas clearly and effectively. Proven ability to build and maintain professional relationships, negotiate, and influence others. Skilled in cross-cultural communication, adapting style and tone for diverse audiences. Demonstrated proficiency in presenting information and facilitating dialogue in a variety of formats, including written, verbal, and digital platforms. Recognized for active listening skills, empathetic responses, and ability to provide constructive feedback, fostering a respectful and collaborative environment."
        }
      >
        <CommunicationIcon />
      </SoftSkillsItem>
      <SoftSkillsItem
        name={"Problem-solving"}
        review={
          "Exceptional problem-solver with a proven ability to identify issues, analyze possible solutions, and implement effective strategies to resolve them. Skilled in thinking critically and creatively to navigate complex situations, using both analytical and innovative approaches. Recognized for resourcefulness, adaptability, and resilience, often thriving in challenging situations and turning obstacles into opportunities. Proven track record in data-driven decision making, incorporating evidence and logic to ensure optimal outcomes. Demonstrated ability to learn quickly from setbacks, continuously improving and refining strategies."
        }
      >
        <ProblemIcon />
      </SoftSkillsItem>
      <SoftSkillsItem
        name={"Stress Resilience"}
        review={
          "Highly resilient individual, proven to effectively manage and adapt to high-stress environments. Renowned for maintaining a positive attitude and productivity under pressure, with a consistent record of meeting tight deadlines while ensuring quality. Skilled in implementing stress management techniques and self-care principles to sustain personal well-being and professional performance. Strong ability to analyze stressful situations, identify stressors, and apply appropriate coping strategies. Adept at promoting a culture of resilience and supporting team members through challenging circumstances."
        }
      >
        <StressIcon />
      </SoftSkillsItem>
    </SoftSkillsBox>
  );
};
