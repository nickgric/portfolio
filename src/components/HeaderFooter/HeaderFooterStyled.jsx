import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {
  primaryColor,
  secondaryColor,
  primaryFont,
  accentColorBlue,
  accentColorGreen,
  accentColorYellow,
  accentColorRed,
} from "../../styles/variables";

export const HeaderFooterBox = ({ children }) => {
  return (
    <Flex
      as={"div"}
      w={"100%"}
      py={"15px"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      {children}
    </Flex>
  );
};

export const Logo = ({ name, color, copyright }) => {
  return (
    <Flex
      as={Link}
      to={"/"}
      gap={"5px"}
      alignItems={"center"}
      justifyContent={"center"}
      fill={primaryColor}
      _hover={{ fill: accentColorBlue, color: accentColorBlue }}
      color={primaryColor}
    >
      {copyright && (
        <Icon width="20px" height="20px" viewBox="0 0 22 22">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12.24 15.25C13.02 15.25 13.79 14.96 14.38 14.44C14.69 14.17 15.17 14.2 15.44 14.51C15.71 14.82 15.68 15.3 15.37 15.57C14.5 16.34 13.39 16.76 12.24 16.76C9.62 16.76 7.49 14.63 7.49 12.01C7.49 9.39 9.62 7.26 12.24 7.26C13.39 7.26 14.51 7.68 15.37 8.45C15.68 8.72 15.71 9.2 15.44 9.51C15.16 9.82 14.69 9.85 14.38 9.58C13.79 9.06 13.03 8.77 12.24 8.77C10.45 8.77 8.99 10.23 8.99 12.02C8.99 13.81 10.45 15.25 12.24 15.25Z" />
        </Icon>
      )}
      <Text
        fontFamily={primaryFont}
        fontWeight={"700"}
        fontSize={"25px"}
        lineHeight={"1.5"}
      >
        {name}
      </Text>
    </Flex>
  );
};

export const Contacts = ({ mail, phone, github, linkedin, color, text }) => {
  return (
    <Flex
      as={"div"}
      gap={"15px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box as={"a"} href={mail}>
        {text ? (
          <Text
            fontFamily={primaryFont}
            fontWeight={"700"}
            fontSize={"20px"}
            lineHeight={"1.5"}
            fill={color === "primary" ? primaryColor : secondaryColor}
            _hover={{ color: accentColorYellow }}
          >
            mail
          </Text>
        ) : (
          <Icon
            width="24px"
            height="24px"
            viewBox="0 0 22 22"
            fill={color === "primary" ? primaryColor : secondaryColor}
            _hover={{ fill: accentColorYellow }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.272 6.365C2 6.9 2 7.6 2 9v6c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 19 4.6 19 6 19h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 17.1 22 16.4 22 15V9c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 5 19.4 5 18 5H6c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093zM4.647 7h14.706a.5.5 0 0 1 .278.916l-7.075 4.732a1 1 0 0 1-1.112 0L4.369 7.916A.5.5 0 0 1 4.647 7z"
            />
          </Icon>
        )}
      </Box>
      <Box as={"a"} href={phone}>
        {text ? (
          <Text
            fontFamily={primaryFont}
            fontWeight={"700"}
            fontSize={"20px"}
            lineHeight={"1.5"}
            fill={color === "primary" ? primaryColor : secondaryColor}
            _hover={{ color: accentColorRed }}
          >
            phone
          </Text>
        ) : (
          <Icon
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill={color === "primary" ? primaryColor : secondaryColor}
            _hover={{ fill: accentColorRed }}
          >
            <path
              d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Icon>
        )}
      </Box>
      <Box as={"a"} href={github}>
        {text ? (
          <Text
            fontFamily={primaryFont}
            fontWeight={"700"}
            fontSize={"20px"}
            lineHeight={"1.5"}
            fill={color === "primary" ? primaryColor : secondaryColor}
            _hover={{ color: accentColorGreen }}
          >
            github
          </Text>
        ) : (
          <Icon
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill={color === "primary" ? primaryColor : secondaryColor}
            _hover={{ fill: accentColorGreen }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.9992 5.95846C21.0087 6.565 20.9333 7.32649 20.8658 7.8807C20.8395 8.09686 20.8037 8.27676 20.7653 8.42453C21.6227 10.01 22 11.9174 22 14C22 16.4684 20.8127 18.501 18.9638 19.8871C17.1319 21.2605 14.6606 22 12 22C9.33939 22 6.86809 21.2605 5.0362 19.8871C3.18727 18.501 2 16.4684 2 14C2 11.9174 2.37732 10.01 3.23472 8.42452C3.19631 8.27676 3.16055 8.09685 3.13422 7.8807C3.06673 7.32649 2.99133 6.565 3.00081 5.95846C3.01149 5.27506 3.10082 4.5917 3.19988 3.91379C3.24569 3.60028 3.31843 3.30547 3.65883 3.11917C4.00655 2.92886 4.37274 2.99981 4.73398 3.1021C5.95247 3.44713 7.09487 3.93108 8.16803 4.51287C9.2995 4.17287 10.5783 4 12 4C13.4217 4 14.7005 4.17287 15.832 4.51287C16.9051 3.93108 18.0475 3.44713 19.266 3.1021C19.6273 2.99981 19.9935 2.92886 20.3412 3.11917C20.6816 3.30547 20.7543 3.60028 20.8001 3.91379C20.8992 4.5917 20.9885 5.27506 20.9992 5.95846ZM20 14C20 12.3128 19.6122 10 17.5 10C16.5478 10 15.6474 10.2502 14.7474 10.5004C13.8482 10.7502 12.9495 11 12 11C11.0505 11 10.1518 10.7502 9.25263 10.5004C8.35261 10.2502 7.45216 10 6.5 10C4.39379 10 4 12.3197 4 14C4 15.7636 4.82745 17.231 6.23588 18.2869C7.66135 19.3556 9.69005 20 12 20C14.3099 20 16.3386 19.3555 17.7641 18.2869C19.1726 17.231 20 15.7636 20 14ZM10 14.5C10 15.8807 9.32843 17 8.5 17C7.67157 17 7 15.8807 7 14.5C7 13.1193 7.67157 12 8.5 12C9.32843 12 10 13.1193 10 14.5ZM15.5 17C16.3284 17 17 15.8807 17 14.5C17 13.1193 16.3284 12 15.5 12C14.6716 12 14 13.1193 14 14.5C14 15.8807 14.6716 17 15.5 17Z"
            />
          </Icon>
        )}
      </Box>
      <Box as={"a"} href={linkedin}>
        {text ? (
          <Text
            fontFamily={primaryFont}
            fontWeight={"700"}
            fontSize={"20px"}
            lineHeight={"1.5"}
            fill={color === "primary" ? primaryColor : secondaryColor}
            _hover={{ color: accentColorBlue }}
          >
            linkedin
          </Text>
        ) : (
          <Icon
            width="24px"
            height="24px"
            viewBox="0 0 22 22"
            fill={color === "primary" ? primaryColor : secondaryColor}
            _hover={{ fill: accentColorBlue }}
          >
            <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" />
          </Icon>
        )}
      </Box>
    </Flex>
  );
};

export const Divider = () => {
  return <Box as="div" w={"100%"} h={"2px"} backgroundColor={secondaryColor} />;
};
