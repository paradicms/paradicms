import * as React from "react";
import {useCallback, useState} from "react";
import {ValueFilterTable} from "./ValueFilterTable";
import {Col, Container, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImages} from "@fortawesome/free-solid-svg-icons";
import {ValueFilterGallery} from "./ValueFilterGallery";
import {JsonPrimitiveType, ValueFilter} from "@paradicms/filters";
import {ValueFacet} from "@paradicms/facets";

interface ValueFilterControlProps<T extends JsonPrimitiveType> {
  facet: ValueFacet<T>;
  filter: ValueFilter<T>;
  onChange: (newFilter: ValueFilter<T>) => void;
}

export const ValueFilterControl = <T extends JsonPrimitiveType>(
  props: ValueFilterControlProps<T>
) => {
  const {facet, filter, onChange} = props;

  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const toggleGalleryModal = useCallback(
    () => setGalleryModalOpen(!galleryModalOpen),
    [galleryModalOpen]
  );

  const valueFilterTable = (
    <ValueFilterTable facet={facet} filter={filter} onChange={onChange} />
  );

  if (!facet.values.some(value => !!value.thumbnail)) {
    return valueFilterTable;
  }

  return (
    <>
      <Container fluid>
        <Row className="mt-2">
          <Col className="d-flex justify-content-end" xs={12}>
            <FontAwesomeIcon
              className="text-primary"
              icon={faImages}
              onClick={() => setGalleryModalOpen(true)}
              style={{cursor: "pointer", maxHeight: "24px"}}
              title="gallery view"
            />
          </Col>
        </Row>
        <Row>
          <Col className="px-0" xs={12}>
            {valueFilterTable}
          </Col>
        </Row>
      </Container>
      <Modal
        centered={true}
        isOpen={galleryModalOpen}
        keyboard={true}
        toggle={toggleGalleryModal}
      >
        <ModalHeader toggle={toggleGalleryModal}>{filter.label}</ModalHeader>
        <ModalBody>
          <ValueFilterGallery
            facet={facet}
            filter={filter}
            onChange={onChange}
          />
        </ModalBody>
      </Modal>
    </>
  );
};
