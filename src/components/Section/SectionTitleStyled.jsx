import { Flex, Text } from "@chakra-ui/react";
import { primaryColor, primaryFont, invertColor } from "../../styles/variables";

export const SectionTitleBox = ({ children }) => {
  return (
    <Flex
      as={"div"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={primaryColor}
      h={"50px"}
      w={{ base: "100%", tabMax: "300px" }}
      py={"45px"}
    >
      {children}
    </Flex>
  );
};

export const SectionTitleText = ({ name }) => {
  return (
    <Text
      as={"h2"}
      fontFamily={primaryFont}
      fontSize={"36px"}
      lineHeight={"1.3"}
      fontWeight={"700"}
      color={invertColor}
    >
      {name}
    </Text>
  );
};
