import { Flex, Icon, Text } from "@chakra-ui/react";
import { primaryFont } from "../../styles/variables";

export const NextGoalsBox = ({ children }) => {
  return (
    <Flex
      gap={"15px"}
      alignItems={"center"}
      flexWrap={"wrap"}
      justifyContent={{ base: "space-around", tabMax: "flex-start" }}
      w={{ base: "100%", tabMax: "auto" }}
    >
      {children}
    </Flex>
  );
};

export const TsIcon = () => {
  return (
    <Flex
      as={"div"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      w={"110px"}
      h={"140px"}
    >
      <Icon width="90px" height="90px" viewBox="0 0 32 32">
        <path
          d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z"
          fill="#007acc"
        />
      </Icon>
      <Text
        fontFamily={primaryFont}
        fontWeight={"700"}
        fontSize={"24px"}
        lineHeight={"1.5"}
      >
        TypeScript
      </Text>
    </Flex>
  );
};

export const NodeIcon = () => {
  return (
    <Flex
      as={"div"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      w={"110px"}
      h={"140px"}
    >
      <Icon width="90px" height="90px" viewBox="0 0 32 32">
        <path
          d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z"
          fill="#8CC84B"
        />
        <path
          d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z"
          fill="#8CC84B"
        />
      </Icon>
      <Text
        fontFamily={primaryFont}
        fontWeight={"700"}
        fontSize={"24px"}
        lineHeight={"1.5"}
      >
        Node JS
      </Text>
    </Flex>
  );
};

export const DockerIcon = () => {
  return (
    <Flex
      as={"div"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      w={"110px"}
      h={"140px"}
    >
      <Icon width="90px" height="90px" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="14" fill="#1794D4" />
        <path d="M18 7H16V9H18V7Z" fill="white" />
        <path d="M10 10H12V12H10V10Z" fill="white" />
        <path
          d="M6.00155 16.9414C6.17244 19.8427 7.90027 24 14 24C20.8 24 23.8333 19 24.5 16.5C25.3333 16.5 27.2 16 28 14C27.5 13.5 25.5 13.5 24.5 14C24.5 13.2 24 11.5 23 11C22.3333 11.6667 21.3 13.4 22.5 15C22 16 20.6667 16 20 16H6.9429C6.41342 16 5.97041 16.4128 6.00155 16.9414Z"
          fill="white"
        />
        <path d="M9 13H7V15H9V13Z" fill="white" />
        <path d="M10 13H12V15H10V13Z" fill="white" />
        <path d="M15 13H13V15H15V13Z" fill="white" />
        <path d="M16 13H18V15H16V13Z" fill="white" />
        <path d="M21 13H19V15H21V13Z" fill="white" />
        <path d="M15 10H13V12H15V10Z" fill="white" />
        <path d="M16 10H18V12H16V10Z" fill="white" />
      </Icon>
      <Text
        fontFamily={primaryFont}
        fontWeight={"700"}
        fontSize={"24px"}
        lineHeight={"1.5"}
      >
        Docker
      </Text>
    </Flex>
  );
};

export const NextIcon = () => {
  return (
    <Flex
      as={"div"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      w={"110px"}
      h={"140px"}
    >
      <Icon width="90px" height="90px" viewBox="0 0 32 32" fill="#000000">
        <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z" />
      </Icon>
      <Text
        fontFamily={primaryFont}
        fontWeight={"700"}
        fontSize={"24px"}
        lineHeight={"1.5"}
      >
        Next JS
      </Text>
    </Flex>
  );
};

export const VueIcon = () => {
  return (
    <Flex
      as={"div"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      w={"110px"}
      h={"140px"}
    >
      <Icon width="90px" height="90px" viewBox="0 0 32 32" fill="#000000">
        <path d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z" fill="#41B883" />
        <path
          d="M7.5 4L16 18.5L24.5 4H19.5L16.0653 10.0126L12.5 4H7.5Z"
          fill="#35495E"
        />
      </Icon>
      <Text
        fontFamily={primaryFont}
        fontWeight={"700"}
        fontSize={"24px"}
        lineHeight={"1.5"}
      >
        Vue JS
      </Text>
    </Flex>
  );
};

export const AngularIcon = () => {
  return (
    <Flex
      as={"div"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      w={"110px"}
      h={"140px"}
    >
      <Icon width="90px" height="90px" viewBox="0 0 32 32" fill="none">
        <path d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z" fill="#DD0031" />
        <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F" />
        <path
          d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z"
          fill="white"
        />
      </Icon>
      <Text
        fontFamily={primaryFont}
        fontWeight={"700"}
        fontSize={"24px"}
        lineHeight={"1.5"}
      >
        Angular
      </Text>
    </Flex>
  );
};