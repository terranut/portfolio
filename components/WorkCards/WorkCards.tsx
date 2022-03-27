import { SimpleGrid } from "../ui";
import WorkCard from "./WorkCard";
import { WorkCardsProps } from "./model";

const WorkCards = (props: WorkCardsProps) => {
  const { items } = props;
  return (
    <SimpleGrid columns={{ xs: 1, md: 2 }} gap={6} mb="10">
      {items?.map((e, idx) => {
        return <WorkCard key={idx} icon={e.icon} title={e.title} description={e.description} />;
      })}
    </SimpleGrid>
  );
};

export default WorkCards;
