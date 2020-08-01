import * as React from "react";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {Hrefs} from "Hrefs";
import {Link} from "gatsby";

export const InstitutionsList: React.FunctionComponent<{
  institutions: {
    name: string;
    uri: string;
  }[];
}> = ({institutions}) => (
  <List>
    {institutions.map(institution => (
      <ListItem key={institution.uri}>
        <ListItemText>
          <Link to={Hrefs.institution(institution.uri)}>
            {institution.name}
          </Link>
        </ListItemText>
      </ListItem>
    ))}
  </List>
);
