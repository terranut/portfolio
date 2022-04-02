import { FiMail, FaBirthdayCake, BsPinMap, IoLogoYoutube, AiOutlineDownload,RiFileDownloadLine } from "../../ui";
import { devicon } from "./devicons";
import theme from "../../../theme";

interface IconProps {
  children: string;
  color?: string;
  size?: string;
}

const Icon = (props: IconProps) => {
  if (props.children === "mail") return <FiMail {...props} color={theme.colors[props.color]} />;
  else if (props.children === "birthday")
    return <FaBirthdayCake {...props} color={theme.colors[props.color]} />;
  else if (props.children === "location")
    return <BsPinMap {...props} color={theme.colors[props.color]} />;
  else if (props.children === "youtube")
    return <IoLogoYoutube {...props} color={theme.colors[props.color]} />;
  else if (props.children === "download")
    return <AiOutlineDownload {...props} color={theme.colors[props.color]} />;
  else if (props.children === "download_file")
    return <RiFileDownloadLine {...props} color={theme.colors[props.color]} />;
  else
    return (
      <i
        style={{ color: theme.colors[props.color], fontSize: props?.size ? props.size : "20px" }}
        className={devicon[Object.keys(devicon).find((e) => e === props.children)]}
      ></i>
    );
};

export { Icon };
