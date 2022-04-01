import { Box, Stack, Icon } from "../ui";
import { SocialLinksProps } from "./model";
import SocialLink from "./SocialLink";

const SocialLinks = (props: SocialLinksProps) => {
  const { items, size, color, showTitle } = props;
  return (
    <Stack direction="row" spacing={5}>
      {items?.map((e, idx) => {
        return (
          <SocialLink
            key={idx}
            icon={e.icon}
            title={e.title}
            url={e.url}
            size={size}
            color={color}
            showTitle={showTitle}
          />
        );
      })}
    </Stack>
  );
};
export default SocialLinks;
