import {expect} from "chai";
import {Event} from "../src/Event";
import {it} from "mocha";
import {behavesLikeModel} from "./behavesLikeModel";
import {behavesLikeOriginalImage} from "./behavesLikeOriginalImage";

export const behavesLikeEvent = (event: Event) => {
  // it("should get the description", () => {
  //   expect(
  //     testModelSet.works.some(work =>
  //       work.events.some(workEvent => workEvent.description)
  //     )
  //   ).to.be.true;
  //
  //   // expect(
  //   //   testModelSet.works.some(work =>
  //   //     work.events.some(workEvent => workEvent.description === null)
  //   //   )
  //   // ).to.be.true;
  // });

  it("should get start and end dates", () => {
    for (const date of [event.startDate, event.endDate]) {
      expect(date).to.not.be.null;
      expect(date!.year!).to.be.gte(2022);
      expect(date!.month!).to.be.gte(1);
      expect(date!.day!).to.be.gte(1);
    }
  });

  it("should get images", () => {
    expect(event.images).to.not.be.empty;
    for (const image of event.images) {
      behavesLikeOriginalImage(image);
    }
  });

  // it("should get the location", () => {
  //   const location = event.location;
  //   expect(location).not.to.be.null;
  //   expect(location!.centroid).not.to.be.null;
  //   expect(location!.centroid!.latitude).to.not.eq(0);
  //   expect(location!.centroid!.longitude).to.not.eq(0);
  // });

  it("should get the label", () => {
    expect(event.label).to.not.be.empty;
  });

  behavesLikeModel(event);
};
