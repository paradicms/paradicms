import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getWorkLocationIcon} from "@paradicms/react-dom-components";
import {WorkLocationSummary} from "@paradicms/services";
import * as React from "react";
import {MapContainer, Marker, TileLayer, Tooltip} from "react-leaflet";
import invariant from "ts-invariant";

export const WorkLocationsMap: React.FunctionComponent<{
  readonly workLocations: readonly WorkLocationSummary[];
}> = ({workLocations}) => {
  invariant(workLocations.length > 0);
  invariant(
    workLocations.every(workLocation => !!workLocation.location.centroid)
  );

  return (
    <MapContainer
      center={[
        workLocations[0].location.centroid!.latitude,
        workLocations[0].location.centroid!.longitude,
      ]}
      style={{height: "600px"}}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {workLocations.map((workLocation, workLocationIndex) => (
        <Marker
          // eventHandlers={{
          //   click: () => router.push(Hrefs.work(workLocation.work.iri)),
          // }}
          key={workLocationIndex}
          position={[
            workLocation.location.centroid!.latitude,
            workLocation.location.centroid!.longitude,
          ]}
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
