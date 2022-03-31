import { Flex, Card } from "../ui";
import Skill from "./Skill";

const Skills = (props) => {
  const { skills } = props;

  return (
    <Card {...props} gradient="true">
      <Flex direction="column" gap={5} width="100%">
        {skills?.map((e, idx) => {
          return <Skill key={idx} title={e.name} value={e.value} />;
        })}
      </Flex>
    </Card>
  );
};

export default Skills;
