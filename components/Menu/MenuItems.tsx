import { Stack, Text, Button } from "../ui";
import { useRouter } from "next/router";
import { MenuProps } from "./model";

const MenuItems = (props: MenuProps) => {
  const { items } = props;
  const router = useRouter();

  const handlerOption = (option) => {
    if (!option) router.push("/");
    else router.push(option);
  };

  return (
    <Stack spacing={0} direction="row">
      {items?.map((e, idx) => {
        return (
          <Button fontSize={{ xs: "xs", md: "lg" }} key={idx} onClick={() => handlerOption(e.path)}>
            <Text color={router.pathname === e.path ? "yellow" : ""}>{e.display}</Text>
          </Button>
        );
      })}
    </Stack>
  );
};

export default MenuItems;
