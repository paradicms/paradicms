import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getWorkLocationIcon} from "@paradicms/react-dom-components";
import {WorkLocationSummary} from "@paradicms/services";
import {useRouter} from "next/router";
import * as React from "react";
import {MapContainer, Marker, TileLayer, Tooltip} from "react-leaflet";
import {Hrefs} from "../lib/Hrefs";

export const WorkLocationsMap: React.FunctionComponent<{
  readonly workLocations: readonly WorkLocationSummary[];
}> = ({workLocations}) => {
  if (workLocations.length === 0) {
    return null;
  }

  const router = useRouter();

  return (
    <MapContainer
      center={[workLocations[0].location.lat, workLocations[0].location.long]}
      style={{height: "600px"}}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {workLocations.map((workLocation, workLocationIndex) => (
        <Marker
          eventHandlers={{
            click: () => router.push(Hrefs.work(workLocation.work.uri)),
          }}
          key={workLocationIndex}
          position={[workLocation.location.lat, workLocation.location.long]}
        >
          <Tooltip
            direction="right"
            interactive={true}
            offset={[0, 0]}
            opacity={1}
            permanent
          >
            <FontAwesomeIcon
              icon={getWorkLocationIcon(workLocation)}
              style={{height: "16px", width: "16px"}}
            />
            {workLocation.label ?? workLocation.work.label}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};
