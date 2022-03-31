import { SocialLinkItem } from "./model";
import { Box, Icon, Flex, Tooltip } from "../ui";

//TODO SET URL
const SocialLink = (props: SocialLinkItem) => {
  return (
    <Tooltip label={props.title}>
      <Flex alignItems="center" cursor="pointer">
        <Icon color="yellow" size="15px">
          {props.icon}
        </Icon>
      </Flex>
    </Tooltip>
  );
};
export default SocialLink;
