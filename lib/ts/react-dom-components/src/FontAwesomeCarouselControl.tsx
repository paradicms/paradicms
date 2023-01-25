import {CarouselControlProps} from "reactstrap";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

export const FontAwesomeCarouselControl: React.FunctionComponent<CarouselControlProps> = ({
  direction,
  directionText,
  onClickHandler,
}) => (
  <a
    className={`carousel-control-${direction}`}
    onClick={onClickHandler}
    role="button"
    style={{cursor: "pointer"}}
    tabIndex={0}
  >
    <FontAwesomeIcon
      className="text-secondary"
      icon={direction === "prev" ? faChevronLeft : faChevronRight}
      style={{maxHeight: "24px"}}
    />
    <span className="visually-hidden">
      {directionText ?? direction === "prev" ? "Previous" : "Next"}
    </span>
  </a>
);
