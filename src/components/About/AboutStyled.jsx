import { Text, Flex, Link, Box } from "@chakra-ui/react";
import { primaryFont } from "../../styles/variables";

export const AboutBox = ({ children }) => {
  return (
    <Flex gap={"20px"} flexDirection={{ base: "column", tabMax: "row" }}>
      {children}
    </Flex>
  );
};

export const AboutText = ({ text, hard }) => {
  return (
    <Text
      fontFamily={primaryFont}
      fontWeight={hard && "700"}
      fontSize={hard ? "22px" : "18px"}
      lineHeight={"1.5"}
    >
      {text}
    </Text>
  );
};

export const AboutInfoBox = ({ children }) => {
  return (
    <Flex as={"div"} flexDirection={"column"} gap={"20px"}>
      {children}
    </Flex>
  );
};

export const Me = () => {
  return (
    <Link href={"https://github.com/nickgric"}>
      <Box
        as={"div"}
        backgroundImage={"https://i.ibb.co/q1Vxf9v/me.jpg"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        h={{
          base: "100%",
          mobMax: "420px",
          tab: "618px",
          tabMax: "400px",
          desk: "500px",
        }}
        w={{
          base: "100%",
          mobMax: "420px",
          tab: "618px",
          tabMax: "400px",
          desk: "500px",
        }}
      />
    </Link>
  );
};
