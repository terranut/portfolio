import { Card, Box, Center } from "../ui";
import MenuItems from "./MenuItems";
import { MenuProps } from "./model";

function Menu(props: MenuProps) {
  const { items } = props;

  return (
    <Box>
      <Box display={{ xs: "none", md: "block" }} position="relative" top="-1px" right="-1px">
        <Card bg="black.300" borderTopLeftRadius="0" borderBottomRightRadius="0" p="4">
          <MenuItems items={items} />
        </Card>
      </Box>

      <Center
        zIndex="999"
        border="1px solid"
        borderColor="black.200"
        backdropFilter="auto"
        backdropBlur="8px"
        borderTopRadius="30px"
        display={{ xs: "flex", md: "none" }}
        bg="blackAlpha.300"
        width="100vw"
        height="60px"
        position="fixed"
        left="0"
        bottom="0px"
      >
        <MenuItems items={items} />
      </Center>
    </Box>
  );
}

export { Menu };
