import {imagePlaceholderSrc} from "@paradicms/models";
import * as React from "react";
import {useCallback, useState} from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  CarouselItem,
} from "reactstrap";
import {FontAwesomeCarouselControl} from "./FontAwesomeCarouselControl";
import {RightsParagraph} from "./RightsParagraph";
import {getNamedModelLinks} from "./getNamedModelLinks";
import {imagesCarouselThumbnailSelector} from "./imagesCarouselThumbnailSelector";
import {Image, ThumbnailSelector} from "@paradicms/models";

export interface AgentsCarouselAgent {
  readonly homepage?: string | null;
  readonly key: string;
  readonly label: string;
  readonly role?: string | null;
  thumbnail(selector: ThumbnailSelector): Image | null;
  readonly wikidataConceptIri: string | null;
  readonly wikipediaUrl: string | null;
}

const AgentCard: React.FunctionComponent<{
  agent: AgentsCarouselAgent;
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  role?: string;
}> = ({agent, getAbsoluteImageSrc}) => {
  const agentLinks = getNamedModelLinks(agent);
  const thumbnail = agent.thumbnail(imagesCarouselThumbnailSelector);

  return (
    <Card className="text-center">
      <CardHeader tag="h6">
        <div>{agent.label}</div>
        {agentLinks.length > 0 ? (
          <div className="mt-1" style={{fontSize: "x-small"}}>
            {agentLinks}
          </div>
        ) : null}
      </CardHeader>
      <CardBody>
        <img
          src={
            thumbnail?.src
              ? getAbsoluteImageSrc(thumbnail.src)
              : imagePlaceholderSrc(
                  imagesCarouselThumbnailSelector.targetDimensions
                )
          }
          style={{
            maxHeight: imagesCarouselThumbnailSelector.targetDimensions.height,
            maxWidth: imagesCarouselThumbnailSelector.targetDimensions.width,
          }}
          title={agent.label}
        />
      </CardBody>
      {thumbnail?.requiresAttribution ? (
        <CardFooter>
          <RightsParagraph
            material="Image"
            rights={thumbnail}
            style={{fontSize: "x-small", marginBottom: 0}}
          />
        </CardFooter>
      ) : null}
    </Card>
  );
};

export const AgentsCarousel: React.FunctionComponent<{
  agents: readonly AgentsCarouselAgent[];
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
}> = ({agents, getAbsoluteImageSrc}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderAgent = (agent: AgentsCarouselAgent) => (
    <AgentCard agent={agent} getAbsoluteImageSrc={getAbsoluteImageSrc} />
  );

  const onClickNext = useCallback(() => {
    // if (animating) return;
    const nextIndex = activeIndex === agents.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }, [activeIndex]);

  const onClickPrevious = useCallback(() => {
    // if (animating) return;
    const nextIndex = activeIndex === 0 ? agents.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }, [activeIndex]);

  switch (agents.length) {
    case 0:
      return null;
    case 1:
      return renderAgent(agents[0]);
  }

  return (
    <Carousel
      activeIndex={activeIndex}
      autoPlay={false}
      next={onClickNext}
      previous={onClickPrevious}
      slide={false}
    >
      {/*<CarouselIndicators*/}
      {/*  activeIndex={activeIndex}*/}
      {/*  items={items}*/}
      {/*  onClickHandler={goToIndex}*/}
      {/*/>*/}
      {agents.map(agent => (
        <CarouselItem key={agent.key}>{renderAgent(agent)}</CarouselItem>
      ))}
      <FontAwesomeCarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={onClickPrevious}
      />
      <FontAwesomeCarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={onClickNext}
      />
    </Carousel>
  );
};
