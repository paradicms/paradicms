import * as React from "react";
import {useState} from "react";
import {Carousel, CarouselControl, CarouselIndicators, CarouselItem} from "reactstrap";
import ImageZoom from "react-medium-image-zoom";

interface DerivedImageSet {
    original: Image;
    thumbnail: Image | null;
}

interface Image {
    height: number | null;
    url: string;
    width: number | null;
}

export const ObjectImagesCarousel: React.FunctionComponent<{ images: DerivedImageSet[] }> = ({images}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex: number) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            {images.length > 1 ?
                <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex}/> : null}
            {images.map((image) =>
                <CarouselItem
                    className="text-center"
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}
                    key={image.original.url}
                >
                    <ImageZoom
                        image={{
                            className: "img",
                            height: image.thumbnail ? image.thumbnail.height : 200,
                            src: image.thumbnail ? image.thumbnail.url : "https://place-hold.it/200x200?text=Missing%20thumbnail",
                            width: image.thumbnail ? image.thumbnail.width : 200
                        }}
                        zoomImage={{
                            className: "img--zoomed",
                            height: image.original.height,
                            src: image.original.url,
                            width: image.original.width
                        }}
                    />
                    {/*<CarouselCaption captionText={item.caption} captionHeader={item.caption}/>*/}
                </CarouselItem>)
            }
            {images.length > 1 ?
                <React.Fragment>
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
                </React.Fragment>
                : null}
        </Carousel>
    );
}