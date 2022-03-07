import { List, ListItem, Center } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Router from "next/router";
import { useRouter } from "next/router";

function Menu(props) {
  const router = useRouter();

  const handlerOption = (option) => {
    if (!option) Router.push("/");
    else Router.push(option);
  };

  const listItems = props.routes.map((element) => (
    <ListItem fontSize="18px"  key={element.path} cursor="pointer" onClick={() => handlerOption(element.path)}>
      <ChevronRightIcon mr="2" color={router.pathname === element.path ? "white" : "dark"} />
      {element.id}
    </ListItem>
  ));

  return (
    <Center width={{xs:'',md:'50%'}} height={{xs:'30%',md:'100%'}} color="white" p="10" fontSize="24px">
      <List spacing={3}>{listItems}</List>
    </Center>
  );
}

export { Menu };
