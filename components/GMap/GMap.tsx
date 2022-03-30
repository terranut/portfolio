import GoogleMapReact from "google-map-react";
import { Card } from "../ui";
import { styles } from "./styles";

interface GMapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  height: string;
}

const GMap = (props: GMapProps) => {
  const { center, zoom, height } = props;

  return (
    <Card p="0" height={height} width="100%">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_API }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={{
          disableDefaultUI: true,
          styles: styles,
        }}
      ></GoogleMapReact>
    </Card>
  );
};

GMap.defaultProps = {
  center: { lat: 40.4410912, lng: -3.6292846 },
  zoom: 15,
  height: "300px",
};
export default GMap;
