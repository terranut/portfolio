import { Center, Wrap } from "@chakra-ui/react";
import Router from "next/router";
import { useRouter } from "next/router";

function Menu(props) {
  const router = useRouter();

  const handlerOption = (option) => {
    if (!option) Router.push("/");
    else Router.push(option);
  };

  let totalRoutes = props.routes.length;
  const listSquare = props.routes.map((element) => (
    <Center height={100/totalRoutes+'vh'} width="100%" bg="grey1" _hover={{bg: "grey5",color: "white"}}
      onMouseEnter={() => handlerOption(element.path)}
    >
      {element.id}
    </Center>
  ));

  return (
    <Center
      width={{ xs: "", md: "50%" }}
      height={{ xs: "30%", md: "100%" }}
      color="white"
      fontSize="24px"
    >
      <Wrap direction="column" width="100%" spacing={0}>
        {listSquare}
      </Wrap>
    </Center>
  );
}

export { Menu };
