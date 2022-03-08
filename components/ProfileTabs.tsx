import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { skill_1, skill_2, skill_3 } from "../data/skills";
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
        <Wrap spacing={8}>{myF(skill_1)}</Wrap>
      </TabPanel>
      <TabPanel>
        <Wrap spacing={8}>{myF(skill_2)}</Wrap>
      </TabPanel>
      <TabPanel>
        <Wrap spacing={8}>{myF(skill_3)}</Wrap>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export default ProfileTabs;
