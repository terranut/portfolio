import Layout from "../components/Layout";
import { Text, Heading } from "../components/ui";
import WorkCards from "../components/WorkCards/WorkCards";

const HomePage = (props) => {
  return (
    <Layout title="Sobre mi" store={props.store}>
      <Text color="gray.100"> {props?.store?.id?.description_a}</Text>
      <Text color="gray.100" mt="2">
        {props?.store?.id?.description_b}
      </Text>

      {props?.store?.workingOn?.length ? (
        <>
          <Heading mt="10" mb="5">
            {props?.store?.id?.working_on_title}
          </Heading>
          <WorkCards items={props?.store?.workingOn} />
        </>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default HomePage;
