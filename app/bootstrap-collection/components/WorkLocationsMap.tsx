import * as React from "react";
import {WorkLocationSummary} from "@paradicms/services";
import {MapContainer, Marker, TileLayer, Tooltip} from "react-leaflet";
import {useRouter} from "next/router";
import {Hrefs} from "../lib/Hrefs";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const getWorkLocationIcon = (
  workLocation: WorkLocationSummary
): IconDefinition => {
  switch (workLocation.role) {
    case "Creation":
      return faLightbulb;
  }
};

export const WorkLocationsMap: React.FunctionComponent<{
  readonly renderWorkLink: (
    workUri: string,
    children: React.ReactNode
  ) => React.ReactNode;
  readonly workLocations: readonly WorkLocationSummary[];
}> = ({renderWorkLink, workLocations}) => {
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
            {workLocation.title ?? workLocation.work.title}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};
