import { SectionTitleBox, SectionTitleText } from "./SectionTitleStyled";

export const SectionTitle = ({ name }) => {
  return (
    <SectionTitleBox>
      <SectionTitleText name={name} />
    </SectionTitleBox>
  );
};
