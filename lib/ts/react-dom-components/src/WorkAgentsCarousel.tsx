import * as React from "react";
import {useCallback, useState} from "react";
import {Image, ImageDimensions, WorkAgent} from "@paradicms/models";
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
import {smallThumbnailTargetDimensions} from "./smallThumbnailTargetDimensions";

const WorkAgentCard: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  role?: string;
  thumbnailTargetDimensions?: ImageDimensions;
  workAgent: WorkAgent;
}> = ({
  workAgent,
  getAbsoluteImageSrc,
  thumbnailTargetDimensions: optionalThumbnailTargetDimensions,
}) => {
  const agentLinks = getNamedModelLinks(workAgent.agent);
  const thumbnailTargetDimensions =
    optionalThumbnailTargetDimensions ?? smallThumbnailTargetDimensions;
  const thumbnail = workAgent.agent.thumbnail({
    targetDimensions: thumbnailTargetDimensions,
  });

  return (
    <Card className="text-center">
      <CardHeader tag="h6">
        <div>{workAgent.agent.name}</div>
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
              : Image.placeholderSrc(thumbnailTargetDimensions)
          }
          style={{
            maxHeight: thumbnailTargetDimensions.height,
            maxWidth: thumbnailTargetDimensions.width,
          }}
          title={workAgent.agent.name}
        />
      </CardBody>
      {thumbnail?.rights?.requiresAttribution ? (
        <CardFooter>
          <RightsParagraph
            material="Image"
            rights={thumbnail.rights}
            style={{fontSize: "x-small", marginBottom: 0}}
          />
        </CardFooter>
      ) : null}
    </Card>
  );
};

export const WorkAgentsCarousel: React.FunctionComponent<{
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  thumbnailTargetDimensions?: ImageDimensions;
  workAgents: readonly WorkAgent[];
}> = ({getAbsoluteImageSrc, thumbnailTargetDimensions, workAgents}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderWorkAgent = (workAgent: WorkAgent) => (
    <WorkAgentCard
      workAgent={workAgent}
      getAbsoluteImageSrc={getAbsoluteImageSrc}
      role={workAgent.role}
      thumbnailTargetDimensions={thumbnailTargetDimensions}
    />
  );

  const onClickNext = useCallback(() => {
    // if (animating) return;
    const nextIndex =
      activeIndex === workAgents.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }, [activeIndex]);

  const onClickPrevious = useCallback(() => {
    // if (animating) return;
    const nextIndex =
      activeIndex === 0 ? workAgents.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }, [activeIndex]);

  switch (workAgents.length) {
    case 0:
      return null;
    case 1:
      return renderWorkAgent(workAgents[0]);
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
      {workAgents.map(workAgent => (
        <CarouselItem key={workAgent.agent.uri}>
          {renderWorkAgent(workAgent)}
        </CarouselItem>
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
