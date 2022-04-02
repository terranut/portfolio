import { Center, Spinner, Text } from "./ui";

const LoadingPage = (props) => {
  const { color = "yellow", text = "Loading..." } = props;
  return (
    <Center height="100vh" width="100vw" flexDirection="column">
      <Spinner thickness="8px" speed="0.65s" emptyColor="black.700" color={color} size="xl" />
      <Text mt="5">{text}</Text>
    </Center>
  );
};
export default LoadingPage;
