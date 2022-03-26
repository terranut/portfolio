import Layout from "../components/Layout";
import { Text, Heading } from "../components/ui";
import WorkingCards from "../components/WorkingCards";
import { data } from "../data/data";

const HomePage = () => {
  return (
    <Layout title="Sobre mi">
      <Text color="gray.100">{data.about.descriptionA}</Text>
      <Text color="gray.100" mt="2">
        {data.about.descriptionB}
      </Text>

      <Heading mt="10" mb="5" >
        Mi trabajo
      </Heading>

      <WorkingCards items={data.workingOn} />
    </Layout>
  );
};

export default HomePage;
