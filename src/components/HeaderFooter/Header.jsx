import { HeaderFooterBox, Logo, Contacts, Divider } from "./HeaderFooterStyled";
import { Container } from "../Container";

export const Header = () => {
  return (
    <>
      <Container>
        <HeaderFooterBox>
          <Logo name={"Mykola Hrytsaienko"} color={"primary"} />
          <Contacts
            mail={"mailto:nickgric@gmail.com"}
            phone={"tel:+12499894999"}
            github={"https://github.com/nickgric"}
            linkedin={"https://www.linkedin.com/in/nickgric"}
            color={"primary"}
          />
        </HeaderFooterBox>
      </Container>
      <Divider />
    </>
  );
};
