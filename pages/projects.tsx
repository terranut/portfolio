import Layout from '../components/Layout';
import { Heading,Box } from "@chakra-ui/layout";
import { workExperience } from "../data/workExperience";

const ProjectsPage = () => (
  <Layout title="José Mendoza | Experiencia">
    <Box className="timeline">
      {workExperience.map((element) => (
        <Box className={"container " + element.p}>
          <Box fontSize="10px" className="date">
            {element.data}
          </Box>
          <i className={'icon '+ element.icon}></i>
          <Box className="content">
            <Heading as="h2">{element.title}</Heading>
            <Box fontSize="12px">{element.description}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  </Layout>
)

export default ProjectsPage