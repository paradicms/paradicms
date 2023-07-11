import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import * as React from "react";
import {MapContainer, Marker, TileLayer, Tooltip} from "react-leaflet";
import invariant from "ts-invariant";
import {Point} from "@paradicms/models";
import {faMapPin} from "@fortawesome/free-solid-svg-icons";

export interface LocationsMapLocation {
  centroid: Point;
  icon: IconDefinition | null;
  label: string;
}

export const LocationsMap: React.FunctionComponent<{
  readonly locations: readonly LocationsMapLocation[];
}> = ({locations}) => {
  invariant(locations.length > 0);

  return (
    <MapContainer
      center={[locations[0].centroid.latitude, locations[0].centroid.longitude]}
      style={{height: "600px"}}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, locationIndex) => (
        <Marker
          // eventHandlers={{
          //   click: () => router.push(Hrefs.work(workLocation.work.iri)),
          // }}
          key={locationIndex}
          position={[location.centroid.latitude, location.centroid.longitude]}
        >
          <Tooltip
            direction="right"
            interactive={true}
            offset={[0, 0]}
            opacity={1}
            permanent
          >
            <FontAwesomeIcon
              icon={location.icon ?? faMapPin}
              style={{height: "16px", width: "16px"}}
            />
            {location.label}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};
