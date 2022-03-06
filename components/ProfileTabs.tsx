import { Tabs, TabList, TabPanels, Tab, TabPanel, Grid } from "@chakra-ui/react";
import { tecnologiesFront, tecnologiesBack, tecnologiesOthers } from "../data/tecnoList";
// https://devicon.dev/

const myF = (arr) => {
  return arr.map((element) => {
    return <i style={{ fontSize: "80px" }} className={element.className}></i>;
  });
};

const ProfileTabs = () => (
  <Tabs mt="10">
    <TabList>
      <Tab>Técnologías Frontend</Tab>
      <Tab>Técnologías Backend</Tab>
      <Tab>Otros</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <Grid templateColumns="repeat(5, 1fr)" gap={3}>
          {myF(tecnologiesFront)}
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid templateColumns="repeat(5, 1fr)" gap={3}>
          {myF(tecnologiesBack)}
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid templateColumns="repeat(5, 1fr)" gap={3}>
          {myF(tecnologiesOthers)}
        </Grid>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export default ProfileTabs;
