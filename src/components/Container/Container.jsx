import { ContainerBox } from "./ContainerStyled";

export const Container = ({ children, flex }) => {
  return <ContainerBox flex={flex}>{children}</ContainerBox>;
};
