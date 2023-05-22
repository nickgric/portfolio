import { SectionBox } from "./SectionStyled";
import { Container } from "../Container";

export const Section = ({ children, dark, flex }) => {
  return (
    <SectionBox dark={dark}>
      <Container flex={flex}>{children}</Container>
    </SectionBox>
  );
};
