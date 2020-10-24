import * as React from "react";
import {
  ImageDimensions,
  Images,
  Institution,
  JoinedObject,
} from "@paradicms/models";
// import {RightsTable} from "./RightsTable";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Container,
  CardImg,
} from "reactstrap";
import {Accordion} from "components/Accordion";

// const useStyles = makeStyles(theme => ({
//   accordionTitle: {
//     fontSize: "smaller",
//   },
//   objectSummary: {
//     fontSize: "x-small",
//     maxWidth: "32em",
//   },
//   thumbnailImg: {
//     maxHeight: "200px",
//     maxWidth: "200px",
//   },
//   rightsTableCell: {
//     fontSize: "x-small",
//     padding: theme.spacing(1),
//   },
//   title: {
//     textAlign: "center",
//   },
// }));

export const ObjectCard: React.FunctionComponent<{
  object: JoinedObject;
  renderInstitutionLink?: (
    institution: Institution,
    children: React.ReactNode
  ) => React.ReactNode;
  renderObjectLink: (
    object: JoinedObject,
    children: React.ReactNode
  ) => React.ReactNode;
}> = ({object, renderInstitutionLink, renderObjectLink}) => {
  const thumbnailDimensions: ImageDimensions = {height: 200, width: 200};

  const thumbnail = Images.selectThumbnail({
    images: object.images,
    targetDimensions: thumbnailDimensions,
  });

  return (
    <Card className="object-card">
      <CardHeader tag="h3">
        {renderObjectLink(object, <>{object.title}</>)}
      </CardHeader>
      {renderObjectLink(
        object,
        <CardImg
          className="thumbnail"
          src={
            thumbnail
              ? thumbnail.uri
              : Images.placeholderUrl({
                  dimensions: thumbnailDimensions,
                  text: "Missing thumbnail",
                })
          }
          title={object.title}
        />
      )}
      {/*<Container fluid>*/}
      {/*  /!*<Grid container direction="column" spacing={2}>*!/*/}
      {/*  /!*  <Grid item container alignItems="center" justify="center">*!/*/}
      {/*  <Row>*/}
      {/*    <Col xs={12}>*/}
      {/*    </Col>*/}
      {/*  </Row>*/}
      {/*  /!*  {renderInstitutionLink ? (*!/*/}
      {/*  /!*    <Grid item>*!/*/}
      {/*  /!*      <Table>*!/*/}
      {/*  /!*        <TableBody>*!/*/}
      {/*  /!*          <TableRow>*!/*/}
      {/*  /!*            <TableCell>*!/*/}
      {/*  /!*              <strong>Institution</strong>*!/*/}
      {/*  /!*            </TableCell>*!/*/}
      {/*  /!*            <TableCell>*!/*/}
      {/*  /!*              {renderInstitutionLink(*!/*/}
      {/*  /!*                object.institution,*!/*/}
      {/*  /!*                <span>{object.institution.name}</span>*!/*/}
      {/*  /!*              )}*!/*/}
      {/*  /!*            </TableCell>*!/*/}
      {/*  /!*          </TableRow>*!/*/}
      {/*  /!*        </TableBody>*!/*/}
      {/*  /!*      </Table>*!/*/}
      {/*  /!*    </Grid>*!/*/}
      {/*  /!*  ) : null}*!/*/}
      {/*  {object.abstract ? (*/}
      {/*    <Row>*/}
      {/*      <Col xs={12}>*/}
      {/*        <Accordion title="Summary">{object.abstract}</Accordion>*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*  ) : null}*/}
      {/*  /!*  {thumbnail && thumbnail.rights ? (*!/*/}
      {/*  /!*    <Grid item>*!/*/}
      {/*  /!*      <Accordion>*!/*/}
      {/*  /!*        <AccordionSummary*!/*/}
      {/*  /!*          className={classes.accordionTitle}*!/*/}
      {/*  /!*          expandIcon={<ExpandMoreIcon />}*!/*/}
      {/*  /!*        >*!/*/}
      {/*  /!*          Image rights*!/*/}
      {/*  /!*        </AccordionSummary>*!/*/}
      {/*  /!*        <AccordionDetails>*!/*/}
      {/*  /!*          <RightsTable*!/*/}
      {/*  /!*            cellClassName={classes.rightsTableCell}*!/*/}
      {/*  /!*            rights={thumbnail.rights}*!/*/}
      {/*  /!*          ></RightsTable>*!/*/}
      {/*  /!*        </AccordionDetails>*!/*/}
      {/*  /!*      </Accordion>*!/*/}
      {/*  /!*    </Grid>*!/*/}
      {/*  /!*  ) : null}*!/*/}
      {/*  /!*  {object.rights ? (*!/*/}
      {/*  /!*    <Grid item>*!/*/}
      {/*  /!*      <Accordion>*!/*/}
      {/*  /!*        <AccordionSummary*!/*/}
      {/*  /!*          className={classes.accordionTitle}*!/*/}
      {/*  /!*          expandIcon={<ExpandMoreIcon />}*!/*/}
      {/*  /!*        >*!/*/}
      {/*  /!*          Metadata rights*!/*/}
      {/*  /!*        </AccordionSummary>*!/*/}
      {/*  /!*        <AccordionDetails>*!/*/}
      {/*  /!*          <RightsTable*!/*/}
      {/*  /!*            cellClassName={classes.rightsTableCell}*!/*/}
      {/*  /!*            rights={object.rights}*!/*/}
      {/*  /!*          ></RightsTable>*!/*/}
      {/*  /!*        </AccordionDetails>*!/*/}
      {/*  /!*      </Accordion>*!/*/}
      {/*  /!*    </Grid>*!/*/}
      {/*  /!*  ) : null}*!/*/}
      {/*  /!*</Grid>*!/*/}
      {/*</Container>*/}
    </Card>
  );
};
