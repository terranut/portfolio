import { Flex, Image } from "../ui";

const ProfileImage = (props) => {
  const { size = "150px", image } = props;
  return (
    <Flex
      bg="gray.800"
      boxSize={size}
      borderRadius="20px"
      p="2"
      alignContent="center"
      justifyContent="center"
    >
      <Image borderRadius="20px" src={`https://drive.google.com/uc?id=${image}`} ignoreFallback />
    </Flex>
  );
};

export default ProfileImage;
