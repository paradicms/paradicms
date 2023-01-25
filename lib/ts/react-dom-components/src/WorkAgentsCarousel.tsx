import * as React from "react";
import {useCallback, useState} from "react";
import {WorkAgent} from "@paradicms/models";
import {AgentCard} from "./AgentCard";
import {Carousel, CarouselControl, CarouselItem} from "reactstrap";

export const WorkAgentsCarousel: React.FunctionComponent<{
  workAgents: readonly WorkAgent[];
}> = ({workAgents}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderWorkAgent = (workAgent: WorkAgent) => (
    <AgentCard agent={workAgent.agent} role={workAgent.role} />
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
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={onClickPrevious}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={onClickNext}
      />
    </Carousel>
  );
};
