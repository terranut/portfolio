import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { tecnologiesFront, tecnologiesBack, tecnologiesOthers } from "../data/tecnoList";
import { Wrap } from "@chakra-ui/layout";

const myF = (arr) => {
  return arr.map((element, idx) => {
    return <i key={idx} style={{ fontSize: "70px" }} className={element.className}></i>;
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
        <Wrap spacing={8}>{myF(tecnologiesFront)}</Wrap>
      </TabPanel>
      <TabPanel>
        <Wrap spacing={8}>{myF(tecnologiesBack)}</Wrap>
      </TabPanel>
      <TabPanel>
        <Wrap spacing={8}>{myF(tecnologiesOthers)}</Wrap>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export default ProfileTabs;
