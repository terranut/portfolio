import { Card, Box, Text, Badge, Divider, Flex, Collapse, Tooltip, Icon } from "../ui";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import { useDisclosure } from "@chakra-ui/hooks";
import AbsButton from "..//ui/AbsButton";
import Metadata from "..//Metadata";
import ProfileImage from "./ProfileImage";
import React from "react";
import { SheetContext } from "../../hooks/SheetContext";

const Profile = (props) => {
  const store: any = React.useContext(SheetContext);
  const { profile, idData, socialLinks } = props;
  const { isOpen, onToggle } = useDisclosure();

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Card alignItems="center" display={{ xs: "none", sm: "flex" }}>
        {store.id.url_cv ? (
          <Tooltip label={"Descarga cv"}>
            <Box position="absolute" top="5" right="5" onClick={() => handleClick(store.id.url_cv)}>
              <Icon color="yellow">download_file</Icon>
            </Box>
          </Tooltip>
        ) : (
          ""
        )}

        <Box pl="8" pr="8" pt="8" pb="5">
          <ProfileImage image={idData?.user_image} />
        </Box>

        <Flex alignItems="center">
          <Text mr="2" fontSize="24px" fontWeight="bold" textAlign="center">
            {idData?.name}
          </Text>
        </Flex>

        <Badge mt="4" p="2">
          <Text fontSize="smaller">{idData?.rank}</Text>
        </Badge>

        <Divider mt="5" mb="5" />

        <Metadata items={profile} direction="column" />

        <Box mt="5">
          <SocialLinks items={socialLinks} />
        </Box>
      </Card>

      <Card display={{ xs: "flex", sm: "none" }} p="2">
        <AbsButton
          onClick={onToggle}
          border="1px solid"
          borderColor="black.200"
          borderTopRightRadius="20px"
          borderBottomLeftRadius="20px"
        >
          Contacto
        </AbsButton>

        <Flex direction="row" alignItems="center" gap={3}>
          <Box p="2">
            <ProfileImage image={idData?.user_image} />
          </Box>
          <Box>
            <Text textAlign="center"> {idData?.name}</Text>
            <Badge mt="2" p="2">
              <Text fontSize="smaller">{idData?.rank}</Text>
            </Badge>
          </Box>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Metadata items={profile} direction="column" />
        </Collapse>
      </Card>
    </>
  );
};

export default Profile;
