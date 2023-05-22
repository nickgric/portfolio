import { Flex } from "@chakra-ui/react";
import { secondaryColor } from "../../styles/variables";

export const SectionBox = ({ children, dark }) => {
  return (
    <Flex
      as={"div"}
      display={"flex"}
      w={"100%"}
      px={"15px"}
      py={"30px"}
      backgroundColor={dark && secondaryColor}
    >
      {children}
    </Flex>
  );
};
