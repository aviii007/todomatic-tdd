import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";

import FilterButton from "./FilterButton";

// Configuring the Enzyme Adapter
configure({ adapter: new Adapter() });

// Testing the FilterButton component rendering
describe("Basic rendering test for FilterButton!", () => {
  it("Should have the button element", () => {
    const wrapper = shallow(
      <FilterButton name="All" isPressed={false} setFilter={() => {}} />
    );
    expect(wrapper.find("button").length).toBe(1);
  });

  it("Should have the span element", () => {
    const wrapper = shallow(
      <FilterButton name="All" isPressed={false} setFilter={() => {}} />
    );
    expect(wrapper.find("span").length).toBeGreaterThanOrEqual(1);
  });

  it("Should have the span element with the correct text", () => {
    const wrapper = shallow(
      <FilterButton name="All" isPressed={false} setFilter={() => {}} />
    );
    expect(wrapper.find("span").at(1).text()).toBe("All");
  });
});

// Testing the FilterButton component interaction
describe("FilterButton component functionality testing", () => {
  it("Should call the setFilter function when the button is clicked", () => {
    const setFilter = jest.fn();
    const wrapper = shallow(
      <FilterButton name="All" isPressed={false} setFilter={setFilter} />
    );
    wrapper.find("button").simulate("click");
    expect(setFilter).toHaveBeenCalled();
  });
});