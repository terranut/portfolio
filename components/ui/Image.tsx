import { Image } from "@chakra-ui/react";

const ImageApp = (props) => {
  return <Image objectFit="cover" fallbackSrc="/assets/no-image.jpeg" alt="" {...props} />;
};

export { ImageApp };
