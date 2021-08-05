import {HardCodedConfigurationQueryService} from "~/services/HardCodedConfigurationQueryService";
import {expect} from "chai";

describe("Hard-coded ConfigurationQueryService test", () => {
  const sut = new HardCodedConfigurationQueryService();

  it("should get the hard-coded configuration", async () => {
    const configuration = await sut.getConfiguration();
    expect(configuration.filters).to.not.be.empty;
  });
});
