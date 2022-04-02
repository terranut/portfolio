import { Box, Button } from "../ui";

const AbsButton = (props) => {
  return (
    <Box position="absolute" top="0" right="0" p="1" {...props}>
      <Button onClick={() => props.onClick()}>{props.children}</Button>
    </Box>
  );
};
export default AbsButton;
