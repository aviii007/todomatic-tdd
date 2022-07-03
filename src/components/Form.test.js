import { render, screen } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";
import Form from "./Form";

// Configuring the Enzyme Adapter
configure({ adapter: new Adapter() });

// Testing the Form component rendering
describe("Basic rendering test for Form component", () => {
  it("Should have a label", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find(Text)).toBeDefined();
  });

  it("Should have an input element", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find("input").length).toBe(1);
  });

  it("Should have an add button", async () => {
    render(<Form />);
    expect(await screen.findByTestId("add-button")).not.toHaveAttribute(
      "disabled"
    );
  });
});

// Testing the Form component interaction
describe("Form component functionality testing", () => {
  it("Should call the addTask function when the add button is clicked", () => {
    const addTask = jest.fn();
    const wrapper = shallow(<Form addTask={addTask} />);
    wrapper.find("input").simulate("change", {
      target: { value: "Eat" },
    });
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {},
    });
    expect(addTask).toHaveBeenCalled();
  });
});