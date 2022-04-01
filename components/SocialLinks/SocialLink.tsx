import { SocialLinkItem } from "./model";
import { Text, Icon, Flex, Tooltip } from "../ui";

//TODO SET URL
const SocialLink = (props: SocialLinkItem) => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Tooltip label={props.title}>
      <Flex direction="column" alignItems="center" cursor="pointer" onClick={(e) => handleClick(props.url)}>
        <Icon color={props.color ? props.color : "grey"} size={props.size ? props.size : "15px"}>
          {props.icon}
        </Icon>
        {props.showTitle ? <Text mt="2">{props.title}</Text> : ""}
      </Flex>
    </Tooltip>
  );
};
export default SocialLink;
