import { Card, Box, Text, Image, Badge, Divider, Flex, FiMail, Center, Stack,Icon } from "./ui";

const profileImage = () => (
  <Box bg="gray.800" boxSize="150px" borderRadius="20px" p="2">
    <Image src="/assets/avatar.png" alt="Ignacio Mendoza"></Image>
  </Box>
);

const Profile = (props) => {
  const { profile,idData } = props;
  return (
    <Card alignItems="center">
      <Box pl="8" pr="8" pt="8" pb="5">
        {profileImage()}
      </Box>

      <Text fontSize="24px" fontWeight="bold" textAlign="center">
        {idData?.name}
      </Text>

      <Badge mt="4" p="2">
        <Text fontSize="smaller">{idData?.rank}</Text>
      </Badge>
      <Divider mt="5" mb="5" />

      <Box maxWidth="100%" overflow="hidden" overflowX="auto">
        <Stack direction={{ xs: "row", md: "column" }} spacing={10}>
          {profile?.map((e, idx) => {
            return (
              <Flex key={idx}  alignItems="center" width="100%" fontSize="14px">
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
    </Card>
  );
};

export default Profile;
