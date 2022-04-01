import { Card, Box, Text, Image, Badge, Divider, Flex, FiMail, Center, Stack, Icon } from "./ui";
import SocialLinks from "../components/SocialLinks/SocialLinks";

const profileImage = (image) => (
  <Flex
    bg="gray.800"
    boxSize="150px"
    borderRadius="20px"
    p="2"
    alignContent="center"
    justifyContent="center"
  >
    <Image
      borderRadius="20px"
      src={`https://drive.google.com/uc?id=${image}`}
      ignoreFallback
    />
  </Flex>
);

const Profile = (props) => {
  const { profile, idData,socialLinks } = props;
  return (
    <Card alignItems="center">
      <Box pl="8" pr="8" pt="8" pb="5">
        {profileImage(idData?.user_image)}
      </Box>

      <Text fontSize="24px" fontWeight="bold" textAlign="center">
        {idData?.name}
      </Text>

      <Badge mt="4" p="2">
        <Text fontSize="smaller">{idData?.rank}</Text>
      </Badge>
      <Divider mt="5" mb="5" />

      <Box maxWidth="100%" overflow="hidden" overflowX="auto" mb="8">
        <Stack direction={{ xs: "row", md: "column" }} spacing={10}>
          {profile?.map((e, idx) => {
            return (
              <Flex key={idx} alignItems="center" width="100%" fontSize="14px">
                <Center p="2" boxSize="40px" bg="black.300" borderRadius="10px">
                  <Icon color="yellow">{e.icon}</Icon>
                </Center>
                <Flex direction="column">
                  <Text ml="4" color="black.100" fontSize="12px" textTransform="uppercase">
                    {e.name}
                  </Text>
                  <Text ml="4">{e.value}</Text>
                </Flex>
              </Flex>
            );
          })}
        </Stack>
      </Box>

      <SocialLinks  items={socialLinks}   />

    </Card>
  );
};

export default Profile;
