import { Box, Stack, Icon } from "../ui";
import { SocialLinksProps } from "./model";
import SocialLink from "./SocialLink";

const SocialLinks = (props: SocialLinksProps) => {
  const { items } = props;
  return (
    <Stack direction="row" spacing={5}>
      {items?.map((e, idx) => {
        return <SocialLink key={idx} icon={e.icon} title={e.title} url={e.url} />;
      })}
    </Stack>
  );
};
export default SocialLinks;
