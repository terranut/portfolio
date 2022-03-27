import Layout from "../components/Layout";
import { Text, Heading } from "../components/ui";
import WorkingCards from "../components/WorkingCards";
import { data } from "../data/data";

const HomePage = (props) => {
  return (
    <Layout title="Sobre mi" store={props.store}>
      {/* <div>{JSON.stringify(data[1])}</div> */}
      <Text color="gray.100"> {props?.store?.id?.description_a}</Text>
      <Text color="gray.100" mt="2">
        {props?.store?.id?.description_b}
      </Text>
      <Heading mt="10" mb="5">
      {props?.store?.id?.working_on_title}
      </Heading>
      <WorkingCards items={props?.store?.workingOn} />
    </Layout>
  );
};

export default HomePage;
