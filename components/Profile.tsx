import { Card, Box, Text, Image, Badge, Divider, Flex, FiMail, Center, Stack } from "./ui";

const data = [
  { name: "Email", icon: <FiMail />, value: "namenal@gmail.com" },
  { name: "Phone", icon: <FiMail />, value: "639426299" },
  { name: "Birthday", icon: <FiMail />, value: "22/01/1987" },
  { name: "Location", icon: <FiMail />, value: "Madrid,España" },
];

const profileImage = () => (
  <Box bg="gray.800" boxSize="150px" borderRadius="20px" p="2">
    <Image src="/assets/avatar.png" alt="Ignacio Mendoza"></Image>
  </Box>
);

const stackData = data.map((e,idx) => {
  return (
    <Flex key={idx} mt="5" alignItems="center" width="100%" fontSize="14px">
      <Center p="2" boxSize="40px" bg="black.300" borderRadius="10px" color="yellow">
        {e.icon}
      </Center>
      <Flex direction="column">
        <Text ml="4" color="black.100" fontSize="12px" textTransform="uppercase">
          {e.name}
        </Text>
        <Text ml="4">{e.value}</Text>
      </Flex>
    </Flex>
  );
});

const Profile = () => (
  <Card alignItems="center" >
    <Box pl="8" pr="8" pt="8" pb="5">
      {profileImage()}
    </Box>

    <Text fontSize="24px" fontWeight="bold" textAlign="center">
      Ignacio Mendoza
    </Text>

    <Badge mt="4" p="2">
      <Text fontSize="smaller">Front-End Developer</Text>
    </Badge>
    <Divider mt="5" mb="5" />

    <Box maxWidth="100%" overflow="hidden" overflowX="auto" >
      <Stack direction={{ xs: "row", md: "column" }} spacing={10}>
        {stackData}
      </Stack>
    </Box>
  </Card>
);

export default Profile;
