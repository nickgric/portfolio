import { Container } from "../Container";
import { HeaderFooterBox, Logo, Contacts } from "./HeaderFooterStyled";

export const Footer = () => {
  return (
    <Container>
      <HeaderFooterBox>
        <Logo color={"secondary"} copyright />
        <Contacts
          mail={"mailto:nickgric@gmail.com"}
          phone={"tel:+12499894999"}
          github={"https://github.com/nickgric"}
          linkedin={"https://www.linkedin.com/in/nickgric"}
          color={"secondary"}
          text
        />
      </HeaderFooterBox>
    </Container>
  );
};
