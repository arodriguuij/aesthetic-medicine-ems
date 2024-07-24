import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { useMemo } from "react";

const MapApp = () => {
  const center = useMemo(() => ({ lat: 39.8949141, lng: -5.5426771 }), []);

  return (
    <Map
      style={{
        margin: "20px 0 0",
        height: "40vh",
        width: "100%",
        borderRadius: "6px",
      }}
      mapId="Policlínica Navalmoral"
      defaultCenter={center}
      defaultZoom={14}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
    >
      <AdvancedMarker position={center}>
        <Pin background={"#FBBC04"} glyphColor={"#000"} borderColor={"#000"} />
      </AdvancedMarker>
    </Map>
  );
};

export default MapApp;
